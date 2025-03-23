"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { CheckCircle, XCircle } from "lucide-react"
import { getAllSectionQuestions } from "@/lib/questions"
import type { Question } from "@/lib/exam-data"
import { getBasePath } from "@/lib/client-utils"
import { getSafeSectionQuestions } from "@/lib/safe-questions"

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

  const sectionTitles = {
    1: "Biological and Biochemical Foundations of Living Systems",
    2: "Chemical and Physical Foundations of Biological Systems",
    3: "Psychological, Social, and Biological Foundations of Behavior",
    4: "Critical Analysis and Reasoning Skills",
  }

  useEffect(() => {
    // Check if user is registered
    const userData = localStorage.getItem("examUser")
    if (!userData) {
      const basePath = getBasePath()
      router.push(`${basePath}/register`)
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
      const basePath = getBasePath()
      router.push(`${basePath}/instructions`)
      return
    }

    try {
      const state = JSON.parse(examState)

      // Check if this section was completed
      if (!state.completedSections || !state.completedSections.includes(sectionId)) {
        const basePath = getBasePath()
        router.push(`${basePath}/review`)
        return
      }

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
      const basePath = getBasePath()
      router.push(`${basePath}/review`)
    }
  }, [router, sectionId, id])

  const navigateToQuestion = (index: number) => {
    if (index >= 0 && index < questions.length) {
      setCurrentQuestionIndex(index)
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
  const correctCount = questions.filter((q) => isAnswerCorrect(q.id)).length
  const scorePercentage = (correctCount / totalQuestions) * 100

  // Check if current question is part of a passage
  const isPassageQuestion = currentQuestion.type === "passage"
  const passageText = getPassageTextForQuestion(currentQuestion, questions)
  const passageQuestions = isPassageQuestion ? getPassageQuestions(questions, currentQuestion) : []
  const passageImage =
    isPassageQuestion && currentQuestion.image && currentQuestion.type === "passage" ? currentQuestion.image : undefined

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900 text-black dark:text-white">
      {/* Header */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <div>Review - {sectionTitles[sectionId as keyof typeof sectionTitles]}</div>
        <div className="flex items-center gap-4">
          <div>
            Score: {correctCount}/{totalQuestions} ({Math.round(scorePercentage)}%)
          </div>
          <div>
            {questionNumber} of {totalQuestions}
          </div>
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
            const basePath = getBasePath()
            router.push(`${basePath}/review`)
          }}
          className="text-black dark:text-white dark:border-slate-600"
        >
          Back to Sections
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

              {/* Question Image if any (not passage image) */}
              {currentQuestion.image && currentQuestion.type !== "passage" && (
                <div className="mb-4">
                  <Image
                    src={currentQuestion.image || "/placeholder.svg"}
                    alt="Question image"
                    width={300}
                    height={200}
                    className="border border-gray-300 dark:border-slate-700"
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
                            />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                ) : (
                  // Text-based options
                  currentQuestion.options.map((option, index) => {
                    const letter = String.fromCharCode(65 + index) // A, B, C, D, etc.
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
                      width={400}
                      height={250}
                      className="border border-gray-300 dark:border-slate-700 rounded-md"
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

            {/* Question Image if any */}
            {currentQuestion.image && (
              <div className="mb-4 flex justify-center">
                <Image
                  src={currentQuestion.image || "/placeholder.svg"}
                  alt="Question image"
                  width={400}
                  height={300}
                  className="border border-gray-300 dark:border-slate-700"
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
                          />
                        </div>
                      </div>
                    )
                  })}
                </div>
              ) : (
                // Text-based options
                currentQuestion.options.map((option, index) => {
                  const letter = String.fromCharCode(65 + index) // A, B, C, D, etc.
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
          <Progress value={scorePercentage} className="w-32 h-2 bg-gray-300 dark:bg-gray-700 progress-bar" />
          <span className="ml-2">{Math.round(scorePercentage)}%</span>
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
                const basePath = getBasePath()
                router.push(`${basePath}/review`)
              }}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              Back to Sections <span className="ml-1">▶</span>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

