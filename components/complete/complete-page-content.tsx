"use client"

import type { SectionResult, TopicPerformance } from "@/types"
import BarChartComponent from "@/components/charts/bar-chart-component"
import { PerformanceRadarChart } from "@/components/performance-radar-chart"
import { StudyRecommendations } from "@/components/study-recommendations"
import { MCATScoreTable } from "@/components/mcat-score-table"
import { DownloadSummary } from "@/components/download-summary"
import { SectionPerformanceChart } from "@/components/section-performance-chart"
import { disciplineColors, foundationalConceptColors, contentCategoryColors } from "@/constants"
import { useMemo } from "react"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { getImagePath as getImagePathUtil } from "@/lib/client-utils"

// Update the getImagePath function to use our utility function
// Replace the existing getImagePath function with:

// And then update the function to:
const getImagePath = (path: string): string => {
  return getImagePathUtil(path)
}

// Add this after the imports:
// Helper function to ensure image paths work with basePath
// const getImagePath = (path: string): string => {
//   // If path already starts with http or https, it's an external URL
//   if (path.startsWith("http")) return path

//   // If path starts with a slash, remove it
//   const cleanPath = path.startsWith("/") ? path.substring(1) : path

//   // Return the path (Next.js will handle the basePath)
//   return cleanPath
// }

// Add this function at the top of the file, after the imports
// Function to generate HTML for all sections' questions
const generateAllSectionsReviewHTML = (
  userName: string,
  results: SectionResult[],
  totalScore: number,
  mcatScore: number,
  percentileRank: string,
): string => {
  // First, try to get all questions and answers from localStorage
  const allSectionQuestions: Record<number, any[]> = {}
  const allSectionAnswers: Record<number, Record<string, string>> = {}

  // Get exam state for answers
  const examState = localStorage.getItem("examState")
  const state = examState ? JSON.parse(examState) : { answers: {} }

  // Load questions and answers for each section
  results.forEach((section) => {
    try {
      const storedQuestions = localStorage.getItem(`section${section.id}-questions`)
      if (storedQuestions) {
        allSectionQuestions[section.id] = JSON.parse(storedQuestions)
        allSectionAnswers[section.id] = state.answers?.[section.id] || {}
      }
    } catch (err) {
      console.error(`Error loading questions for section ${section.id}:`, err)
    }
  })

  // Helper function to get passage text for a question
  const getPassageTextForQuestion = (question: any, questions: any[]): string | undefined => {
    if (question.passage) {
      return question.passage
    }

    if (question.type === "passage" && question.passageId) {
      // Find the first question in the group that has the passage text
      const passageQuestions = questions.filter((q) => q.type === "passage" && q.passageId === question.passageId)
      const questionWithPassage = passageQuestions.find((q) => q.passage)
      return questionWithPassage?.passage
    }

    return undefined
  }

  // Format topic name
  const formatTopicName = (topic: string): string => {
    // Replace underscores with spaces and capitalize each word
    return topic
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  }

  // Generate HTML
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MCAT Exam Complete Review</title>
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
        .section-header {
          background-color: #1a4a7a;
          color: white;
          padding: 10px 15px;
          margin-top: 40px;
          margin-bottom: 20px;
          border-radius: 4px;
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
        .section-toc {
          background-color: #f5f5f5;
          padding: 15px;
          border-radius: 8px;
          margin-bottom: 20px;
        }
        .toc-title {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .toc-list {
          list-style-type: none;
          padding-left: 0;
        }
        .toc-section {
          margin-bottom: 15px;
        }
        .toc-section-title {
          font-weight: bold;
          margin-bottom: 5px;
          color: #1a4a7a;
        }
        .toc-questions {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
          gap: 5px;
          margin-left: 15px;
        }
        .toc-question {
          display: flex;
          align-items: center;
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
        .print-page-break {
          page-break-before: always;
        }
        @media print {
          .question-item {
            page-break-inside: avoid;
          }
          .passage-box {
            page-break-inside: avoid;
          }
          .section-header {
            page-break-before: always;
          }
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>MCAT Exam Summary</h1>
        <h2>Comprehensive Question Analysis</h2>
        <p>Prepared for: ${userName}</p>
        <p>Generated on: ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      </div>
      
      <div class="score-summary">
        <div class="score-box">
          <div class="score-value">${mcatScore}</div>
          <div class="score-label">MCAT Score</div>
          <div class="score-label">${percentileRank}th Percentile</div>
        </div>
        <div class="score-box">
          <div class="score-value">${totalScore}%</div>
          <div class="score-label">Overall Percentage</div>
        </div>
      </div>
      
      <!-- Table of Contents -->
      <div class="section-toc">
        <div class="toc-title">Table of Contents</div>
        <div class="toc-list">
          ${results
            .map((section) => {
              const sectionQuestions = allSectionQuestions[section.id] || []
              const sectionAnswers = allSectionAnswers[section.id] || {}

              return `
              <div class="toc-section">
                <div class="toc-section-title">Section ${section.id}: ${section.title} (${section.score}%)</div>
                <div class="toc-questions">
                  ${sectionQuestions
                    .map((question, index) => {
                      const isAnswered = sectionAnswers[question.id] !== undefined
                      const isCorrect = sectionAnswers[question.id] === question.correctAnswer
                      let statusClass = "status-unanswered"
                      if (isAnswered) {
                        statusClass = isCorrect ? "status-correct" : "status-incorrect"
                      }

                      return `
                      <div class="toc-question">
                        <span class="toc-status ${statusClass}"></span>
                        <a href="#section${section.id}-question${index + 1}">Q${index + 1}</a>
                      </div>
                    `
                    })
                    .join("")}
                </div>
              </div>
            `
            })
            .join("")}
        </div>
      </div>
      
      <!-- Sections and Questions -->
      ${results
        .map((section) => {
          const sectionQuestions = allSectionQuestions[section.id] || []
          const sectionAnswers = allSectionAnswers[section.id] || {}

          return `
          <div class="section-header print-page-break">
            <h2>Section ${section.id}: ${section.title}</h2>
            <div>Score: ${section.correctCount}/${section.questionCount} (${section.score}%)</div>
          </div>
          
          ${sectionQuestions
            .map((question, index) => {
              const userAnswer = sectionAnswers[question.id]
              const isCorrect = userAnswer === question.correctAnswer
              const isAnswered = userAnswer !== undefined
              const passageText = getPassageTextForQuestion(question, sectionQuestions)

              return `
              <div id="section${section.id}-question${index + 1}" class="question-item">
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
                              (discipline: string) => `
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
                              (subtopic: string) => `
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
                        <img src="${getImagePath(question.image)}" alt="Passage image" />
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
                    <img src="${getImagePath(question.image)}" alt="Question image" />
                  </div>
                `
                    : ""
                }
                
                <!-- Answer Options -->
                <ul class="options-list">
                  ${question.options
                    .map((option: string, optionIndex: number) => {
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
                      <img src="${getImagePath(question.explanationImage)}" alt="Explanation image" />
                    </div>
                  `
                      : ""
                  }
                </div>
              </div>
            `
            })
            .join("")}
        `
        })
        .join("")}
      
      <div class="footer">
        <p>MCAT Exam Simulation Platform</p>
        <p>This document is for personal study purposes only.</p>
        <p>${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      </div>
    </body>
    </html>
  `

  return html
}

// Update the topicPerformance initialization in the props interface to ensure it has default values
interface CompletePageContentProps {
  userName: string
  results: SectionResult[]
  totalScore: number
  mcatScore: number
  percentileRank: string
  topicPerformance: TopicPerformance
  studyRecommendations: string[]
  motivationalMessage: string
  loading: boolean
  onDownload?: () => void // Add this line to include the onDownload callback
}

export default function CompletePageContent({
  userName,
  results,
  totalScore,
  mcatScore,
  percentileRank,
  topicPerformance,
  studyRecommendations,
  motivationalMessage,
  loading,
  onDownload,
}: CompletePageContentProps) {
  // Convert results to sectionScores format expected by SectionPerformanceChart
  const sectionScores = useMemo(() => {
    const scores: Record<number, { correct: number; total: number; percentage: number }> = {}
    results.forEach((result) => {
      scores[result.id] = {
        correct: result.correctCount,
        total: result.questionCount,
        percentage: result.score,
      }
    })
    return scores
  }, [results])

  // Update the enhancedTopicScores useMemo to handle the section property correctly
  const enhancedTopicScores = useMemo(() => {
    const enhanced: Record<string, { correct: number; total: number; percentage: number; section: number }> = {}

    Object.entries(topicPerformance?.topicScores || {}).forEach(([topic, data]) => {
      // Create a new object with all properties from data plus a section property
      enhanced[topic] = {
        correct: data.correct || 0,
        total: data.total || 0,
        percentage: data.percentage || 0,
        // Use the section property if it exists, otherwise try to determine from the topic
        section: "section" in data ? Number(data.section) : 1, // Default to section 1 if missing
      }
    })

    return enhanced
  }, [topicPerformance?.topicScores])

  // Convert string array recommendations to the expected nested record format
  const formattedRecommendations = useMemo(() => {
    const formatted: Record<number, Record<string, string[]>> = {
      1: {},
      2: {},
      3: {},
      4: {},
    }

    // Group recommendations by section (assuming format like "Section 1: Topic - Recommendation")
    studyRecommendations.forEach((rec) => {
      const sectionMatch = rec.match(/^Section (\d+):/)
      const topicMatch = rec.match(/^Section \d+: ([^-]+) -/)

      if (sectionMatch && topicMatch) {
        const sectionId = Number.parseInt(sectionMatch[1])
        const topic = topicMatch[1].trim()
        const recommendation = rec.split("-")[1]?.trim() || rec

        if (!formatted[sectionId][topic]) {
          formatted[sectionId][topic] = []
        }

        formatted[sectionId][topic].push(recommendation)
      } else {
        // If no section/topic format, add to general recommendations in section 1
        if (!formatted[1]["General"]) {
          formatted[1]["General"] = []
        }
        formatted[1]["General"].push(rec)
      }
    })

    return formatted
  }, [studyRecommendations])

  // Add this function to the component
  const downloadAllSectionsReview = () => {
    const html = generateAllSectionsReviewHTML(userName, results || [], totalScore, mcatScore, percentileRank)

    const blob = new Blob([html], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `MCAT_Complete_Review_${new Date().toISOString().split("T")[0]}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)

    // Call the onDownload callback if provided
    if (onDownload) {
      onDownload()
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    )
  }

  // Function to get the base path
  const getBasePath = () => {
    return window.location.pathname.includes("/arteriola") ? "/arteriola" : ""
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">MCAT Exam Complete</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-4">Congratulations, {userName}!</h2>
        <p className="text-lg mb-6">{motivationalMessage}</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Your MCAT Score</h3>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-primary mb-2">{mcatScore}</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Percentile Rank: {percentileRank}</div>
            </div>
          </div>
          <div className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Overall Performance</h3>
            <div className="flex flex-col items-center">
              <div className="text-5xl font-bold text-primary mb-2">{totalScore}%</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">Average Correct Answers</div>
            </div>
          </div>
        </div>

        <MCATScoreTable userScore={mcatScore} />

        {/* Add Take Retest Button */}
        <div className="mt-6 flex justify-center">
          <Button
            size="lg"
            onClick={() => {
              // Reset exam state but keep user data
              localStorage.setItem(
                "examState",
                JSON.stringify({
                  currentSection: 1,
                  sectionStartTime: new Date().toISOString(),
                  answers: {
                    1: {},
                    2: {},
                    3: {},
                    4: {},
                  },
                  markedQuestions: {
                    1: [],
                    2: [],
                    3: [],
                    4: [],
                  },
                  currentQuestionIndex: {
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                  },
                  completedSections: [],
                  startedAt: new Date().toISOString(),
                }),
              )
              // Navigate to instructions
              window.location.href = `${getBasePath()}/instructions`
            }}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Take Exam Again
          </Button>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Section Performance</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <SectionPerformanceChart sectionScores={sectionScores} />
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-4">Section Details</h3>
            <div className="space-y-4">
              {(results || []).map((section) => (
                <div key={section.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">{section.title}</h4>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div>
                      <div className="text-gray-500 dark:text-gray-400">Score</div>
                      <div className="font-medium">{section.score}%</div>
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400">Correct</div>
                      <div className="font-medium">
                        {section.correctCount}/{section.questionCount}
                      </div>
                    </div>
                    <div>
                      <div className="text-gray-500 dark:text-gray-400">Answered</div>
                      <div className="font-medium">
                        {section.answeredCount}/{section.questionCount}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Add a section for review questions */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Review Questions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {(results || []).map((section) => (
            <div key={section.id} className="bg-gray-50 dark:bg-gray-700 p-4 rounded-lg">
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Score: {section.score}% ({section.correctCount}/{section.questionCount})
                  </p>
                </div>
                <button
                  onClick={() => {
                    window.location.href = `${getBasePath()}/review/section/${section.id}`
                  }}
                  className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors"
                >
                  Review Section
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Content Performance Analysis</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Topic Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <PerformanceRadarChart
                topicScores={enhancedTopicScores}
                foundationalConceptScores={topicPerformance.foundationalConceptScores}
                displayMode="topics"
              />
            </div>
            {/* Update the strengths and weaknesses section to handle empty arrays gracefully */}
            <div>
              <h4 className="font-semibold mb-3">Strengths</h4>
              <div className="mb-4 flex flex-wrap gap-2">
                {(topicPerformance?.strengths || []).length > 0 ? (
                  topicPerformance.strengths.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"
                    >
                      {topic}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">No particular strengths identified yet.</p>
                )}
              </div>
              <h4 className="font-semibold mb-3">Areas for Improvement</h4>
              <div className="flex flex-wrap gap-2">
                {(topicPerformance?.weaknesses || []).length > 0 ? (
                  topicPerformance.weaknesses.map((topic, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"
                    >
                      {topic}
                    </span>
                  ))
                ) : (
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    No significant weaknesses identified. Great job!
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Foundational Concept Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Update the BarChartComponent to handle empty data */}
            <div className="h-64">
              {Object.entries(topicPerformance?.foundationalConceptScores || {}).length > 0 ? (
                <BarChartComponent
                  data={Object.entries(topicPerformance?.foundationalConceptScores || {}).map(([section, data]) => ({
                    section,
                    sectionName: section,
                    percentage: typeof data === "number" ? Math.round(data) : Math.round(data.percentage || 0),
                    correct: typeof data === "number" ? 0 : data.correct || 0,
                    total: typeof data === "number" ? 0 : data.total || 0,
                  }))}
                  isDark={false}
                />
              ) : (
                <div className="flex items-center justify-center h-full">
                  <p className="text-gray-500 dark:text-gray-400">No foundational concept data available</p>
                </div>
              )}
            </div>
            <div>
              <h4 className="font-semibold mb-3">Foundational Concepts</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(topicPerformance.foundationalConceptScores || {})
                  .sort(([, a], [, b]) => {
                    const aValue = typeof a === "number" ? a : a.percentage
                    const bValue = typeof b === "number" ? b : b.percentage
                    return bValue - aValue
                  })
                  .map(([concept, score]) => {
                    const scoreValue = typeof score === "number" ? score : score.percentage
                    return (
                      <div
                        key={concept}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${foundationalConceptColors[concept] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
                      >
                        {concept}: {Math.round(scoreValue)}%
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Discipline Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-64">
              <BarChartComponent
                data={Object.entries(topicPerformance.disciplineScores || {}).map(([section, data]) => ({
                  section,
                  sectionName: section,
                  percentage: typeof data === "number" ? Math.round(data) : Math.round(data.percentage),
                  correct: typeof data === "number" ? 0 : data.correct,
                  total: typeof data === "number" ? 0 : data.total,
                }))}
                isDark={false}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-3">Disciplines</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(topicPerformance.disciplineScores || {})
                  .sort(([, a], [, b]) => {
                    const aValue = typeof a === "number" ? a : a.percentage
                    const bValue = typeof b === "number" ? b : b.percentage
                    return bValue - aValue
                  })
                  .map(([discipline, score]) => {
                    const scoreValue = typeof score === "number" ? score : score.percentage
                    return (
                      <div
                        key={discipline}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${disciplineColors[discipline] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
                      >
                        {discipline}: {Math.round(scoreValue)}%
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Content Category Performance</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="h-64">
              <BarChartComponent
                data={Object.entries(topicPerformance.contentCategoryScores || {}).map(([section, data]) => ({
                  section,
                  sectionName: section,
                  percentage: typeof data === "number" ? Math.round(data) : Math.round(data.percentage),
                  correct: typeof data === "number" ? 0 : data.correct,
                  total: typeof data === "number" ? 0 : data.total,
                }))}
                isDark={false}
              />
            </div>
            <div>
              <h4 className="font-semibold mb-3">Content Categories</h4>
              <div className="flex flex-wrap gap-2 mb-4">
                {Object.entries(topicPerformance.contentCategoryScores || {})
                  .sort(([, a], [, b]) => {
                    const aValue = typeof a === "number" ? a : a.percentage
                    const bValue = typeof b === "number" ? b : b.percentage
                    return bValue - aValue
                  })
                  .map(([category, score]) => {
                    const scoreValue = typeof score === "number" ? score : score.percentage
                    return (
                      <div
                        key={category}
                        className={`px-3 py-1 rounded-full text-sm font-medium ${contentCategoryColors[category] || "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"}`}
                      >
                        {category}: {Math.round(scoreValue)}%
                      </div>
                    )
                  })}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <h2 className="text-2xl font-semibold mb-6">Study Recommendations</h2>
        <StudyRecommendations recommendations={formattedRecommendations} />
      </div>

      <div className="flex justify-center gap-4 mb-8">
        {/* Update the DownloadSummary component to handle potential undefined values */}
        <DownloadSummary
          userName={userName}
          results={results || []}
          totalScore={totalScore}
          mcatScore={mcatScore}
          percentileRank={Number.parseInt(percentileRank) || 0}
          topicPerformance={{
            topicScores: enhancedTopicScores,
            strengths: topicPerformance?.strengths || [],
            weaknesses: topicPerformance?.weaknesses || [],
          }}
          studyRecommendations={formattedRecommendations}
          motivationalMessage={motivationalMessage}
        />

        {/* Add Download All Questions Button */}
        <Button
          onClick={() => {
            downloadAllSectionsReview()
            if (onDownload) onDownload()
          }}
          className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white"
        >
          <Download className="h-4 w-4" />
          Download All Questions
        </Button>
      </div>
    </div>
  )
}

