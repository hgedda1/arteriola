"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle, Download } from "lucide-react"
import { getAllSectionQuestions } from "@/lib/questions"
import type { Question } from "@/lib/exam-data"
import { getSafeSectionQuestions } from "@/lib/safe-questions"
import { formatTopicName } from "@/lib/score-utils"

// Add this function to handle passage-based questions
const getPassageQuestions = (questions: Question[], currentQuestion: Question): Question[] => {
  if (currentQuestion.type !== "passage" || !currentQuestion.passageId) {
    return []
  }

  return questions
    .filter((q) => q.type === "passage" && q.passageId === currentQuestion.passageId)
    .sort((a, b) => {
      // Sort by question index within the passage
      const aIndex = questions.findIndex((q) => q.id === a.id)
      const bIndex = questions.findIndex((q) => q.id === b.id)
      return aIndex - bIndex
    })
}

// Add this function to get passage text for a question
const getPassageTextForQuestion = (question: Question, questions: Question[]): string | undefined => {
  if (question.passage) {
    return question.passage
  }

  if (question.type === "passage" && question.passageId) {
    // Find the first question in the group that has the passage text
    const passageQuestions = getPassageQuestions(questions, question)
    const questionWithPassage = passageQuestions.find((q) => q.passage)
    return questionWithPassage?.passage
  }

  return undefined
}

// Add this function to generate HTML for download
const generateSectionReviewHTML = (
  sectionId: number,
  sectionTitle: string,
  questions: Question[],
  userAnswers: Record<string, string>,
  score: number,
  correctCount: number,
  totalCount: number,
): string => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Section ${sectionId} Review - ${sectionTitle}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 900px;
          margin: 0 auto;
          padding: 20px;
        }
        h1, h2, h3, h4 {
          color: #1a4a7a;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #1a4a7a;
          padding-bottom: 20px;
        }
        .score-summary {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          padding: 15px;
          background-color: #f0f7ff;
          border-radius: 8px;
        }
        .score-box {
          text-align: center;
        }
        .score-value {
          font-size: 24px;
          font-weight: bold;
          color: #1a4a7a;
        }
        .score-label {
          font-size: 14px;
          color: #666;
        }
        .question-item {
          margin-bottom: 30px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
          background-color: #fff;
        }
        .question-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
          padding-bottom: 10px;
          border-bottom: 1px solid #eee;
        }
        .question-metadata {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 10px;
        }
        .metadata-tag {
          font-size: 12px;
          padding: 2px 8px;
          border-radius: 4px;
          background-color: #e0f2ff;
          color: #1a4a7a;
        }
        .passage-box {
          padding: 15px;
          background-color: #f9f9f9;
          border-radius: 8px;
          margin-bottom: 15px;
          border-left: 4px solid #1a4a7a;
        }
        .question-text {
          font-weight: bold;
          margin-bottom: 15px;
        }
        .options-list {
          list-style-type: none;
          padding-left: 0;
        }
        .option-item {
          padding: 8px 12px;
          margin-bottom: 8px;
          border-radius: 4px;
          border: 1px solid #ddd;
        }
        .user-selected {
          border-color: #f59e0b;
          background-color: #fef3c7;
        }
        .correct-answer {
          border-color: #10b981;
          background-color: #d1fae5;
        }
        .incorrect-answer {
          border-color: #ef4444;
          background-color: #fee2e2;
        }
        .explanation-box {
          margin-top: 15px;
          padding: 15px;
          background-color: #f0f7ff;
          border-radius: 8px;
          border-left: 4px solid #3b82f6;
        }
        .explanation-title {
          font-weight: bold;
          margin-bottom: 8px;
          color: #1a4a7a;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          font-size: 14px;
          color: #666;
        }
        .image-container {
          text-align: center;
          margin: 15px 0;
        }
        .image-container img {
          max-width: 100%;
          max-height: 400px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }
        .topic-badge {
          display: inline-block;
          padding: 3px 8px;
          background-color: #e0f2ff;
          color: #1a4a7a;
          border-radius: 4px;
          font-size: 12px;
          margin-right: 8px;
        }
        .correct-icon {
          color: #10b981;
          margin-left: 8px;
        }
        .incorrect-icon {
          color: #ef4444;
          margin-left: 8px;
        }
        .table-of-contents {
          background-color: #f9f9f9;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 30px;
        }
        .toc-title {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .toc-list {
          list-style-type: none;
          padding-left: 0;
          columns: 2;
        }
        .toc-item {
          margin-bottom: 5px;
        }
        .toc-link {
          text-decoration: none;
          color: #1a4a7a;
        }
        .toc-link:hover {
          text-decoration: underline;
        }
        .toc-status {
          display: inline-block;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          margin-right: 5px;
        }
        .status-correct {
          background-color: #10b981;
        }
        .status-incorrect {
          background-color: #ef4444;
        }
        .status-unanswered {
          background-color: #9ca3af;
        }
        @media print {
          .question-item {
            page-break-inside: avoid;
          }
          .passage-box {
            page-break-inside: avoid;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>Section ${sectionId} Review</h1>
        <h2>${sectionTitle}</h2>
        <p>Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      </div>
      
      <div class="score-summary">
        <div class="score-box">
          <div class="score-value">${score}%</div>
          <div class="score-label">Section Score</div>
        </div>
        <div class="score-box">
          <div class="score-value">${correctCount}/${totalCount}</div>
          <div class="score-label">Correct Answers</div>
        </div>
      </div>
      
      <!-- Table of Contents -->
      <div class="table-of-contents">
        <div class="toc-title">Quick Navigation</div>
        <ul class="toc-list">
          ${questions
            .map((question, index) => {
              const isAnswered = userAnswers[question.id] !== undefined
              const isCorrect = userAnswers[question.id] === question.correctAnswer
              let statusClass = "status-unanswered"
              if (isAnswered) {
                statusClass = isCorrect ? "status-correct" : "status-incorrect"
              }

              return `
              <li class="toc-item">
                <span class="toc-status ${statusClass}"></span>
                <a href="#question-${index + 1}" class="toc-link">Question ${index + 1}: ${
                  question.question.length > 50 ? question.question.substring(0, 50) + "..." : question.question
                }</a>
              </li>
            `
            })
            .join("")}
        </ul>
      </div>
      
      <!-- Questions -->
      ${questions
        .map((question, index) => {
          const userAnswer = userAnswers[question.id]
          const isCorrect = userAnswer === question.correctAnswer
          const isAnswered = userAnswer !== undefined
          const passageText = getPassageTextForQuestion(question, questions)

          return `
          <div id="question-${index + 1}" class="question-item">
            <div class="question-header">
              <div>
                <strong>Question ${index + 1}</strong>
                <span class="topic-badge">${formatTopicName(question.topic)}</span>
              </div>
              <div>
                ${
                  isAnswered
                    ? isCorrect
                      ? '<span style="color: #10b981;">✓ Correct</span>'
                      : '<span style="color: #ef4444;">✗ Incorrect</span>'
                    : '<span style="color: #9ca3af;">Not Answered</span>'
                }
              </div>
            </div>
            
            <!-- Question Metadata -->
            ${
              question.foundationalConcept ||
              question.contentCategory ||
              (question.disciplines && question.disciplines.length > 0)
                ? `
              <div class="question-metadata">
                ${
                  question.foundationalConcept
                    ? `
                  <span class="metadata-tag">FC ${question.foundationalConcept}</span>
                `
                    : ""
                }
                ${
                  question.contentCategory
                    ? `
                  <span class="metadata-tag">CC ${question.contentCategory}</span>
                `
                    : ""
                }
                ${
                  question.disciplines && question.disciplines.length > 0
                    ? question.disciplines
                        .map(
                          (discipline) => `
                    <span class="metadata-tag">${discipline}</span>
                  `,
                        )
                        .join("")
                    : ""
                }
                ${
                  question.subtopics && question.subtopics.length > 0
                    ? question.subtopics
                        .map(
                          (subtopic) => `
                    <span class="metadata-tag">${subtopic}</span>
                  `,
                        )
                        .join("")
                    : ""
                }
                ${
                  question.difficulty
                    ? `
                  <span class="metadata-tag">${question.difficulty}</span>
                `
                    : ""
                }
              </div>
            `
                : ""
            }
            
            <!-- Passage if applicable -->
            ${
              passageText
                ? `
              <div class="passage-box">
                <h4>Passage</h4>
                <div>${passageText}</div>
                ${
                  question.image && question.type === "passage"
                    ? `
                  <div class="image-container">
                    <img src="${question.image}" alt="Passage image" />
                  </div>
                `
                    : ""
                }
              </div>
            `
                : ""
            }
            
            <!-- Question Text -->
            <div class="question-text">${question.question}</div>
            
            <!-- Question Image if any (not passage image) -->
            ${
              question.image && question.type !== "passage"
                ? `
              <div class="image-container">
                <img src="${question.image}" alt="Question image" />
              </div>
            `
                : ""
            }
            
            <!-- Answer Options -->
            <ul class="options-list">
              ${question.options
                .map((option, optionIndex) => {
                  const letter = String.fromCharCode(65 + optionIndex) // A, B, C, D, etc.
                  const isUserAnswer = userAnswer === option
                  const isCorrectAnswer = question.correctAnswer === option

                  let optionClass = ""
                  if (isUserAnswer && isCorrectAnswer) {
                    optionClass = "correct-answer"
                  } else if (isUserAnswer && !isCorrectAnswer) {
                    optionClass = "incorrect-answer"
                  } else if (isCorrectAnswer) {
                    optionClass = "correct-answer"
                  } else if (isUserAnswer) {
                    optionClass = "user-selected"
                  }

                  return `
                  <li class="option-item ${optionClass}">
                    <strong>${letter}.</strong> ${option}
                    ${isCorrectAnswer ? '<span style="color: #10b981; margin-left: 8px;">✓ Correct Answer</span>' : ""}
                    ${isUserAnswer && !isCorrectAnswer ? '<span style="color: #ef4444; margin-left: 8px;">✗ Your Answer</span>' : ""}
                  </li>
                `
                })
                .join("")}
            </ul>
            
            <!-- Explanation -->
            <div class="explanation-box">
              <div class="explanation-title">Explanation</div>
              <div>${question.explanation || "No explanation available for this question."}</div>
              
              ${
                question.explanationImage
                  ? `
                <div class="image-container">
                  <img src="${question.explanationImage}" alt="Explanation image" />
                </div>
              `
                  : ""
              }
            </div>
          </div>
        `
        })
        .join("")}
      
      <div class="footer">
        <p>MCAT Exam Simulation Platform</p>
        <p>This document is for personal study purposes only.</p>
      </div>
    </body>
    </html>
  `

  return html
}

// Change the component props from { params } to { id }
export default function SectionReviewClientPage({ id }: { id: string }) {
  const router = useRouter()
  const sectionId = id ? Number.parseInt(id, 10) : Number.NaN

  // Log for debugging
  console.log(`SectionReviewClientPage: Received id=${id}, parsed sectionId=${sectionId}`)

  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [userAnswers, setUserAnswers] = useState<Record<string, string>>({})
  const [userName, setUserName] = useState("")
  const [sectionTitle, setSectionTitle] = useState("")
  const [score, setScore] = useState(0)
  const [correctCount, setCorrectCount] = useState(0)

  // Track review page views
  useEffect(() => {
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "review_section_view", {
        section_id: sectionId,
        event_category: "Review",
        event_label: `Viewed Review for Section ${sectionId}`,
      })
    }
  }, [sectionId])

  const sectionTitles = {
    1: "Chemical and Physical Foundations of Biological Systems",
    2: "Critical Analysis and Reasoning Skills",
    3: "Biological and Biochemical Foundations of Living Systems",
    4: "Psychological, Social, and Biological Foundations of Behavior",
  }

  useEffect(() => {
    // Check if user is registered
    const userData = localStorage.getItem("examUser")
    if (!userData) {
      router.push("/register")
      return
    }

    try {
      const user = JSON.parse(userData)
      setUserName(`${user.firstName} ${user.lastName}`)
    } catch (error) {
      console.error("Error parsing user data:", error)
    }

    // Check if exam has been completed
    const examState = localStorage.getItem("examState")
    if (!examState) {
      router.push("/instructions")
      return
    }

    try {
      const state = JSON.parse(examState)

      // Check if this section was completed
      if (!state.completedSections || !state.completedSections.includes(sectionId)) {
        router.push("/review")
        return
      }

      // Set section title
      setSectionTitle(sectionTitles[sectionId as keyof typeof sectionTitles] || `Section ${sectionId}`)

      // Load user answers
      if (state.answers && state.answers[sectionId]) {
        console.log(`Loading answers for section ${sectionId} in review:`, state.answers[sectionId])
        setUserAnswers(state.answers[sectionId] as Record<string, string>)
      } else {
        console.warn(`No answers found for section ${sectionId} in examState:`, state)
      }

      // Try to load questions from localStorage first for consistency
      try {
        const storedQuestions = localStorage.getItem(`section${sectionId}-questions`)
        if (storedQuestions) {
          const parsedQuestions = JSON.parse(storedQuestions)
          console.log(`Review: Loaded ${parsedQuestions.length} questions from localStorage for section ${sectionId}`)
          setQuestions(parsedQuestions)

          // Calculate score and correct count
          const answers = state.answers[sectionId] || {}
          let correct = 0
          parsedQuestions.forEach((q: Question) => {
            if (answers[q.id] === q.correctAnswer) {
              correct++
            }
          })

          const totalQuestions = parsedQuestions.length
          const scorePercentage = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0

          setCorrectCount(correct)
          setScore(scorePercentage)

          setLoading(false)
          return
        }
      } catch (err) {
        console.error("Error loading questions from localStorage in review:", err)
      }

      // Fall back to getAllSectionQuestions if localStorage doesn't have the questions
      try {
        const allQuestions = getAllSectionQuestions()
        if (allQuestions[sectionId] && allQuestions[sectionId].length > 0) {
          console.log(`Review: Loaded ${allQuestions[sectionId].length} questions for review of section ${sectionId}`)
          setQuestions(allQuestions[sectionId])
        } else {
          // If getAllSectionQuestions fails, try getSafeSectionQuestions
          console.log(`Review: Trying safe questions for section ${sectionId}`)
          const safeQuestions = getSafeSectionQuestions(sectionId)
          if (safeQuestions && safeQuestions.length > 0) {
            console.log(`Review: Loaded ${safeQuestions.length} safe questions for section ${sectionId}`)
            setQuestions(safeQuestions)
          } else {
            throw new Error("Failed to load questions for review")
          }
        }
      } catch (error) {
        console.error(`Error loading questions for review of section ${sectionId}:`, error)
        // Create emergency fallback questions for review
        const fallbackQuestions: Question[] = []
        const targetCount = sectionId === 2 ? 53 : 59

        for (let i = 0; i < targetCount; i++) {
          fallbackQuestions.push({
            id: `section${sectionId}-review-fallback-${i}`,
            type: "discrete",
            question: `Fallback review question ${i + 1} for section ${sectionId}`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: "Option A",
            topic: "general",
            explanation: "This is a fallback question for review. The correct answer is Option A.",
          })
        }

        setQuestions(fallbackQuestions)
        console.log(`Review: Created ${fallbackQuestions.length} fallback questions for section ${sectionId}`)
      }

      setLoading(false)
    } catch (error) {
      console.error("Error loading exam state:", error)
      router.push("/review")
    }
  }, [router, sectionId, id])

  const navigateToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index)

      // Track navigation in review
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "review_navigation", {
          section_id: sectionId,
          from_question: currentQuestionIndex + 1,
          to_question: index + 1,
          event_category: "Review",
          event_label: `Review Navigation in Section ${sectionId}`,
        })
      }
    }
  }

  const isAnswerCorrect = (questionId: string) => {
    const question = questions.find((q) => q.id === questionId)
    if (!question) {
      console.warn(`Question with ID ${questionId} not found`)
      return false
    }

    const userAnswer = userAnswers[questionId]
    if (!userAnswer) {
      console.warn(`No user answer found for question ${questionId}`)
      return false
    }

    console.log(
      `Checking answer for ${questionId}: User answer: ${userAnswer}, Correct answer: ${question.correctAnswer}`,
    )
    return userAnswer === question.correctAnswer
  }

  // Add download function
  const downloadSectionReview = () => {
    const html = generateSectionReviewHTML(
      sectionId,
      sectionTitles[sectionId as keyof typeof sectionTitles] || `Section ${sectionId}`,
      questions,
      userAnswers,
      score,
      correctCount,
      questions.length,
    )

    const blob = new Blob([html], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `MCAT_Section${sectionId}_Review_${new Date().toISOString().split("T")[0]}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // Track download events
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "download_review", {
        section_id: sectionId,
        score,
        correct_count: correctCount,
        total_questions: questions.length,
        event_category: "Review",
        event_label: `Downloaded Review for Section ${sectionId}`,
      })
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
        <p>Loading review...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  if (!currentQuestion) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
        <p>No questions available for this section.</p>
      </div>
    )
  }

  const questionNumber = currentQuestionIndex + 1
  const totalQuestions = questions.length
  const answeredCount = Object.keys(userAnswers).length

  // Check if current question is part of a passage
  const isPassageQuestion = currentQuestion.type === "passage"
  const passageText = getPassageTextForQuestion(currentQuestion, questions)
  const passageQuestions = isPassageQuestion ? getPassageQuestions(questions, currentQuestion) : []

  // Find the first question in the passage group that has the passage text
  const firstPassageQuestion =
    isPassageQuestion && currentQuestion.passageId
      ? questions.find((q) => q.passageId === currentQuestion.passageId && q.passage)
      : null

  // Use the image from the first passage question as the passage image
  const passageImage = firstPassageQuestion?.image

  // Determine if the current question has its own image (different from passage image)
  const hasQuestionImage = currentQuestion.image && (!passageImage || currentQuestion.image !== passageImage)

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-black dark:text-white">
      {/* Header */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <div>Review - {sectionTitles[sectionId as keyof typeof sectionTitles]}</div>
        <div className="flex items-center gap-4">
          <div>
            Score: {correctCount}/{totalQuestions} ({score}%)
          </div>
          <div>
            {questionNumber} of {totalQuestions}
          </div>
          {/* Add Download Button */}
          <Button
            variant="outline"
            size="sm"
            onClick={downloadSectionReview}
            className="flex items-center gap-1 bg-green-600 hover:bg-green-700 text-white border-none"
          >
            <Download className="h-4 w-4" />
            <span>Download Review</span>
          </Button>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="bg-[#e6e6e6] dark:bg-slate-800 p-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-black dark:text-white">Navigate:</span>
          <div className="flex flex-wrap gap-1 max-w-[500px]">
            {questions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => navigateToQuestion(index)}
                className={`w-8 h-8 text-xs flex items-center justify-center rounded ${
                  currentQuestionIndex === index
                    ? "bg-blue-600 text-white"
                    : userAnswers[q.id]
                      ? isAnswerCorrect(q.id)
                        ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border border-green-300 dark:border-green-700"
                        : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border border-red-300 dark:border-red-700"
                      : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            router.push("/complete")
          }}
          className="text-black dark:text-white dark:border-slate-600"
        >
          Back to Results
        </Button>
      </div>

      {/* Topic Badge */}
      <div className="bg-[#f0f0f0] dark:bg-slate-800 p-2 border-b border-gray-300 dark:border-slate-700">
        <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
          Topic: {currentQuestion.topic.charAt(0).toUpperCase() + currentQuestion.topic.slice(1)}
        </span>
      </div>

      {/* Question Type Header */}
      <div className="bg-[#1a4a7a] text-white p-1 px-2 border border-black dark:border-slate-600">
        Multiple Choice Item - Single Select
      </div>

      {/* Main Question Area */}
      <div className="bg-white flex-1 p-4 text-black dark:text-white">
        {isPassageQuestion ? (
          // Two-column layout for passage questions
          <div className="flex flex-col lg:flex-row gap-4 h-full">
            {/* Left column - Passage */}
            <div className="lg:w-1/2 p-4 border border-gray-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800 rounded overflow-auto">
              <h3 className="font-medium mb-2 text-black dark:text-white">Passage</h3>
              <div className="text-sm text-black dark:text-slate-300 whitespace-pre-line">{passageText}</div>

              {/* Passage Image if any */}
              {passageImage && (
                <div className="mt-4 flex justify-center">
                  <Image
                    src={passageImage || "/placeholder.svg"}
                    alt="Passage image"
                    width={400}
                    height={300}
                    className="border border-gray-300 dark:border-slate-700 rounded max-w-full h-auto"
                    unoptimized 
                  />
                </div>
              )}
            </div>

            {/* Right column - Question and Options */}
            <div className="lg:w-1/2">
              {/* Passage Question Navigation */}
              <div className="mb-4 flex flex-wrap gap-2">
                <span className="text-sm text-black dark:text-white mr-2">Questions:</span>
                {passageQuestions.map((q, idx) => {
                  const isCurrentQuestion = q.id === currentQuestion.id
                  return (
                    <button
                      key={q.id}
                      onClick={() => {
                        const index = questions.findIndex((question) => question.id === q.id)
                        if (index !== -1) navigateToQuestion(index)
                      }}
                      className={`w-8 h-8 text-xs flex items-center justify-center rounded ${
                        isCurrentQuestion
                          ? "bg-blue-600 text-white"
                          : userAnswers[q.id]
                            ? isAnswerCorrect(q.id)
                              ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100 border border-green-300 dark:border-green-700"
                              : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100 border border-red-300 dark:border-red-700"
                            : "bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
                      }`}
                    >
                      {idx + 1}
                    </button>
                  )
                })}
              </div>

              {/* Question Text */}
              <div className="mb-4">
                <p className="text-black dark:text-white">{currentQuestion.question}</p>
              </div>

              {/* Question Metadata */}
              {currentQuestion.foundationalConcept && (
                <div className="mt-2 mb-4 flex flex-wrap gap-2">
                  {currentQuestion.foundationalConcept && (
                    <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                      FC {currentQuestion.foundationalConcept}
                    </span>
                  )}
                  {currentQuestion.contentCategory && (
                    <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs px-2 py-1 rounded">
                      CC {currentQuestion.contentCategory}
                    </span>
                  )}
                  {currentQuestion.disciplines &&
                    currentQuestion.disciplines.map((discipline, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded"
                      >
                        {discipline}
                      </span>
                    ))}
                  {currentQuestion.subtopics &&
                    currentQuestion.subtopics.map((subtopic, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-xs px-2 py-1 rounded"
                      >
                        {subtopic}
                      </span>
                    ))}
                  {currentQuestion.difficulty && (
                    <span
                      className={`inline-block text-xs px-2 py-1 rounded ${
                        currentQuestion.difficulty === "Advanced"
                          ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                          : currentQuestion.difficulty === "Intermediate"
                            ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                            : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                      }`}
                    >
                      {currentQuestion.difficulty}
                    </span>
                  )}
                </div>
              )}

              {/* Question Image if any (not passage image) */}
              {hasQuestionImage && (
                <div className="mb-4">
                  <Image
                    src={currentQuestion.image || "/placeholder.svg"}
                    alt="Question image"
                    width={300}
                    height={200}
                    className="border border-gray-300 dark:border-slate-700"
                    unoptimized 
                  />
                </div>
              )}

              {/* Answer Options */}
              <div className="space-y-3 mt-4">
                {currentQuestion.optionImages ? (
                  // Image-based options
                  <div className="grid grid-cols-1 gap-4">
                    {currentQuestion.options.map((option, index) => {
                      const letter = String.fromCharCode(65 + index) // A, B, C, D, etc.
                      const isUserAnswer = userAnswers[currentQuestion.id] === option
                      const isCorrectAnswer = currentQuestion.correctAnswer === option
                      const imageSrc = currentQuestion.optionImages?.[index] || "/placeholder.svg?height=200&width=200"
                      const optionId = `option-${currentQuestion.id}-${index}`

                      return (
                        <div key={optionId} className="flex items-start">
                          <div className="flex items-center mr-2">
                            <input
                              type="radio"
                              id={optionId}
                              name={`question-${currentQuestion.id}`}
                              checked={isUserAnswer}
                              readOnly
                              className="mr-2"
                            />
                            <label htmlFor={optionId} className="font-bold text-black dark:text-white mr-2">
                              {letter}.
                            </label>
                            {isUserAnswer && isCorrectAnswer && (
                              <CheckCircle className="h-4 w-4 ml-1 text-green-600 dark:text-green-400" />
                            )}
                            {isUserAnswer && !isCorrectAnswer && (
                              <XCircle className="h-4 w-4 ml-1 text-red-600 dark:text-red-400" />
                            )}
                          </div>
                          <div className="flex flex-col">
                            <label
                              htmlFor={optionId}
                              className={`cursor-pointer text-black dark:text-white mb-2 ${
                                !isUserAnswer && isCorrectAnswer ? "font-medium text-blue-600 dark:text-blue-400" : ""
                              }`}
                            >
                              {option}
                              {!isUserAnswer && isCorrectAnswer && " (Correct Answer)"}
                            </label>
                            <Image
                              src={imageSrc || "/placeholder.svg"}
                              alt={`Option ${letter}`}
                              width={300}
                              height={200}
                              className="border border-gray-300 dark:border-slate-700 rounded"
                              unoptimized 
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // Text-based options
                  currentQuestion.options.map((option, index) => {
                    const letter = String.fromCharCode(65 + index)
                    const isUserAnswer = userAnswers[currentQuestion.id] === option
                    const isCorrectAnswer = currentQuestion.correctAnswer === option
                    const optionId = `option-${currentQuestion.id}-${index}`

                    return (
                      <div key={optionId} className="flex items-center">
                        <input
                          type="radio"
                          id={optionId}
                          name={`question-${currentQuestion.id}`}
                          checked={isUserAnswer}
                          readOnly
                          className="mr-2"
                        />
                        <label htmlFor={optionId} className="cursor-pointer">
                          <span className="font-bold mr-2 text-black dark:text-white">{letter}.</span>
                          <span
                            className={`text-black dark:text-white ${
                              !isUserAnswer && isCorrectAnswer ? "font-medium text-blue-600 dark:text-blue-400" : ""
                            }`}
                          >
                            {option}
                            {!isUserAnswer && isCorrectAnswer && " (Correct Answer)"}
                          </span>
                        </label>
                        {isUserAnswer && isCorrectAnswer && (
                          <CheckCircle className="h-4 w-4 ml-2 text-green-600 dark:text-green-400" />
                        )}
                        {isUserAnswer && !isCorrectAnswer && (
                          <XCircle className="h-4 w-4 ml-2 text-red-600 dark:text-red-400" />
                        )}
                      </div>
                    )
                  })
                )}
              </div>

              {/* Explanation */}
              <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
                <h3 className="font-medium mb-2 text-black dark:text-white">Explanation</h3>
                <p className="text-black dark:text-slate-300">
                  The correct answer is {currentQuestion.correctAnswer}.
                  {isAnswerCorrect(currentQuestion.id)
                    ? " You answered this question correctly."
                    : ` You selected ${userAnswers[currentQuestion.id] || "no answer"}.`}
                </p>
                <p className="mt-2 text-black dark:text-slate-300">
                  {currentQuestion.explanation || "No explanation available for this question."}
                </p>

                {currentQuestion.explanationImage && (
                  <div className="mt-4 flex justify-center">
                    <Image
                      src={currentQuestion.explanationImage || "/placeholder.svg"}
                      alt="Explanation image"
                      width={500}
                      height={300}
                      className="border border-gray-300 dark:border-slate-700 rounded-md"
                      unoptimized 
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          // Single column layout for discrete questions
          <>
            {/* Question Text */}
            <div className="mb-4">
              <p className="text-black dark:text-white">{currentQuestion.question}</p>
            </div>

            {/* Question Metadata */}
            {currentQuestion.foundationalConcept && (
              <div className="mt-2 mb-4 flex flex-wrap gap-2">
                {currentQuestion.foundationalConcept && (
                  <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                    FC {currentQuestion.foundationalConcept}
                  </span>
                )}
                {currentQuestion.contentCategory && (
                  <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs px-2 py-1 rounded">
                    CC {currentQuestion.contentCategory}
                  </span>
                )}
                {currentQuestion.disciplines &&
                  currentQuestion.disciplines.map((discipline, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100 text-xs px-2 py-1 rounded"
                    >
                      {discipline}
                    </span>
                  ))}
                {currentQuestion.subtopics &&
                  currentQuestion.subtopics.map((subtopic, idx) => (
                    <span
                      key={idx}
                      className="inline-block bg-amber-100 dark:bg-amber-900 text-amber-800 dark:text-amber-100 text-xs px-2 py-1 rounded"
                    >
                      {subtopic}
                    </span>
                  ))}
                {currentQuestion.difficulty && (
                  <span
                    className={`inline-block text-xs px-2 py-1 rounded ${
                      currentQuestion.difficulty === "Advanced"
                        ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-100"
                        : currentQuestion.difficulty === "Intermediate"
                          ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-100"
                          : "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100"
                    }`}
                  >
                    {currentQuestion.difficulty}
                  </span>
                )}
              </div>
            )}

            {/* Question Image if any */}
            {hasQuestionImage && (
              <div className="mb-4 flex justify-center">
                <Image
                  src={currentQuestion.image || "/placeholder.svg"}
                  alt="Question image"
                  width={400}
                  height={300}
                  className="border border-gray-300 dark:border-slate-700"
                  unoptimized 
                />
              </div>
            )}

            <div className="space-y-3 mt-4">
              {currentQuestion.optionImages ? (
                // Image-based options
                <div className="grid grid-cols-1 gap-4">
                  {currentQuestion.options.map((option, index) => {
                    const letter = String.fromCharCode(65 + index) // A, B, C, D, etc.
                    const isUserAnswer = userAnswers[currentQuestion.id] === option
                    const isCorrectAnswer = currentQuestion.correctAnswer === option
                    const imageSrc = currentQuestion.optionImages?.[index] || "/placeholder.svg?height=200&width=200"
                    const optionId = `option-${currentQuestion.id}-${index}`

                    return (
                      <div key={optionId} className="flex items-start">
                        <div className="flex items-center mr-2">
                          <input
                            type="radio"
                            id={optionId}
                            name={`question-${currentQuestion.id}`}
                            checked={isUserAnswer}
                            readOnly
                            className="mr-2"
                          />
                          <label htmlFor={optionId} className="font-bold text-black dark:text-white mr-2">
                            {letter}.
                          </label>
                          {isUserAnswer && isCorrectAnswer && (
                            <CheckCircle className="h-4 w-4 ml-1 text-green-600 dark:text-green-400" />
                          )}
                          {isUserAnswer && !isCorrectAnswer && (
                            <XCircle className="h-4 w-4 ml-1 text-red-600 dark:text-red-400" />
                          )}
                        </div>
                        <div className="flex flex-col">
                          <label
                            htmlFor={optionId}
                            className={`cursor-pointer text-black dark:text-white mb-2 ${
                              !isUserAnswer && isCorrectAnswer ? "font-medium text-blue-600 dark:text-blue-400" : ""
                            }`}
                          >
                            {option}
                            {!isUserAnswer && isCorrectAnswer && " (Correct Answer)"}
                          </label>
                          <Image
                            src={imageSrc || "/placeholder.svg"}
                            alt={`Option ${letter}`}
                            width={300}
                            height={200}
                            className="border border-gray-300 dark:border-slate-700 rounded"
                            unoptimized 
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                // Text-based options
                currentQuestion.options.map((option, index) => {
                  const letter = String.fromCharCode(65 + index)
                  const isUserAnswer = userAnswers[currentQuestion.id] === option
                  const isCorrectAnswer = currentQuestion.correctAnswer === option
                  const optionId = `option-${currentQuestion.id}-${index}`

                  return (
                    <div key={optionId} className="flex items-center">
                      <input
                        type="radio"
                        id={optionId}
                        name={`question-${currentQuestion.id}`}
                        checked={isUserAnswer}
                        readOnly
                        className="mr-2"
                      />
                      <label htmlFor={optionId} className="cursor-pointer">
                        <span className="font-bold mr-2 text-black dark:text-white">{letter}.</span>
                        <span
                          className={`text-black dark:text-white ${
                            !isUserAnswer && isCorrectAnswer ? "font-medium text-blue-600 dark:text-blue-400" : ""
                          }`}
                        >
                          {option}
                          {!isUserAnswer && isCorrectAnswer && " (Correct Answer)"}
                        </span>
                      </label>
                      {isUserAnswer && isCorrectAnswer && (
                        <CheckCircle className="h-4 w-4 ml-2 text-green-600 dark:text-green-400" />
                      )}
                      {isUserAnswer && !isCorrectAnswer && (
                        <XCircle className="h-4 w-4 ml-2 text-red-600 dark:text-red-400" />
                      )}
                    </div>
                  )
                })
              )}
            </div>

            {/* Explanation */}
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded">
              <h3 className="font-medium mb-2 text-black dark:text-white">Explanation</h3>
              <p className="text-black dark:text-slate-300">
                The correct answer is {currentQuestion.correctAnswer}.
                {isAnswerCorrect(currentQuestion.id)
                  ? " You answered this question correctly."
                  : ` You selected ${userAnswers[currentQuestion.id] || "no answer"}.`}
              </p>
              <p className="mt-2 text-black dark:text-slate-300">
                {currentQuestion.explanation || "No explanation available for this question."}
              </p>

              {currentQuestion.explanationImage && (
                <div className="mt-4 flex justify-center">
                  <Image
                    src={currentQuestion.explanationImage || "/placeholder.svg"}
                    alt="Explanation image"
                    width={500}
                    height={300}
                    className="border border-gray-300 dark:border-slate-700 rounded-md"
                    unoptimized 
                  />
                </div>
              )}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <div className="flex items-center">
          <span className="mr-2">Section Score:</span>
          <Progress value={score} className="w-32 h-2 bg-gray-300 dark:bg-gray-700 progress-bar" />
          <span className="ml-2">{score}%</span>
        </div>
        <div className="flex gap-2">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => navigateToQuestion(currentQuestionIndex - 1)}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              <span className="mr-1">◀</span> Previous
            </button>
          )}
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={() => navigateToQuestion(currentQuestionIndex + 1)}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              Next <span className="ml-1">▶</span>
            </button>
          ) : (
            <button
              onClick={() => {
                router.push("/complete")
              }}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              Back to Results <span className="ml-1">▶</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

