"use client"

import { useEffect, useState, useCallback, useRef } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { getSectionQuestions } from "@/lib/questions"
import { formatTime } from "@/lib/utils"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { NavigatorDialog } from "@/components/navigator-dialog"
import { ScratchPadDialog } from "@/components/scratch-pad-dialog"
import { HelpDialog } from "@/components/help-dialog"
import { EndSectionDialog } from "@/components/end-section-dialog"
import type { Question } from "@/lib/exam-data"
import { EndExamDialog } from "@/components/end-exam-dialog"
import { Button } from "@/components/ui/button"
import { getBasePath } from "@/lib/client-utils"
import { getSafeSectionQuestions } from "@/lib/safe-questions"

// Change the component props from { params } to { id }
export default function SectionClientPage({ id }: { id: string }) {
  const router = useRouter()

  // Parse the section ID directly from the id prop
  const sectionId = id ? Number.parseInt(id, 10) : Number.NaN

  // Log for debugging
  console.log(`SectionClientPage: Received id=${id}, parsed sectionId=${sectionId}`)

  // Validate section ID immediately
  useEffect(() => {
    if (isNaN(sectionId) || sectionId < 1 || sectionId > 4) {
      console.error(`Invalid section ID: ${id}, redirecting to instructions`)
      const basePath = getBasePath()
      router.push(`${basePath}/instructions`)
    }
  }, [sectionId, id, router])

  // Use refs for values that shouldn't trigger re-renders
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null)
  const initialLoadDoneRef = useRef(false)

  const [loading, setLoading] = useState(true)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [markedQuestions, setMarkedQuestions] = useState<string[]>([])
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [showTimeWarning, setShowTimeWarning] = useState(false)
  const [userName, setUserName] = useState("First Name Last Name")

  // Add new state for dialogs
  const [showNavigator, setShowNavigator] = useState(false)
  const [showScratchPad, setShowScratchPad] = useState(false)
  const [showHelp, setShowHelp] = useState(false)
  const [showEndSection, setShowEndSection] = useState(false)

  // Add state for text selection
  const [selectedText, setSelectedText] = useState("")

  // Add this state in the component
  const [showEndExam, setShowEndExam] = useState(false)

  // Section definitions
  const sections = {
    1: {
      title: "Biological and Biochemical Foundations of Living Systems",
      timeLimit: 95 * 60, // 95 minutes in seconds
      questionCount: 59,
    },
    2: {
      title: "Chemical and Physical Foundations of Biological Systems",
      timeLimit: 90 * 60, // 90 minutes in seconds
      questionCount: 53,
    },
    3: {
      title: "Psychological, Social, and Biological Foundations of Behavior",
      timeLimit: 95 * 60, // 95 minutes in seconds
      questionCount: 59,
    },
    4: {
      title: "Critical Analysis and Reasoning Skills",
      timeLimit: 95 * 60, // 95 minutes in seconds
      questionCount: 59,
    },
  }

  // Handle text selection
  const handleTextSelection = () => {
    const selection = window.getSelection()
    if (selection && selection.toString().trim()) {
      setSelectedText(selection.toString())
    }
  }

  // Handle highlight
  const handleHighlight = () => {
    if (!selectedText) return

    const selection = window.getSelection()
    if (!selection) return

    const range = selection.getRangeAt(0)
    const span = document.createElement("span")
    span.className = "bg-yellow-200 dark:bg-yellow-700"
    range.surroundContents(span)

    setSelectedText("")
  }

  // Handle strikethrough
  const handleStrikethrough = () => {
    if (!selectedText) return

    const selection = window.getSelection()
    if (!selection) return

    const range = selection.getRangeAt(0)
    const span = document.createElement("span")
    span.className = "line-through"
    range.surroundContents(span)

    setSelectedText("")
  }

  // Memoize the saveProgress function to avoid recreating it on every render
  const saveProgress = useCallback(() => {
    try {
      if (loading) return // Don't save if still loading
      if (isNaN(sectionId)) return // Don't save if sectionId is invalid

      const examState = JSON.parse(localStorage.getItem("examState") || "{}")

      // Update answers for current section
      const updatedAnswers = {
        ...examState.answers,
        [sectionId]: answers,
      }

      // Log the answers being saved
      console.log(`Saving answers for section ${sectionId}:`, answers)
      console.log(`Updated answers in examState:`, updatedAnswers)

      // Update marked questions for current section
      const updatedMarkedQuestions = {
        ...examState.markedQuestions,
        [sectionId]: markedQuestions,
      }

      // Update current question index
      const updatedCurrentQuestionIndex = {
        ...examState.currentQuestionIndex,
        [sectionId]: currentQuestionIndex,
      }

      localStorage.setItem(
        "examState",
        JSON.stringify({
          ...examState,
          answers: updatedAnswers,
          markedQuestions: updatedMarkedQuestions,
          currentQuestionIndex: updatedCurrentQuestionIndex,
          currentSection: sectionId,
          sectionStartTime: examState.sectionStartTime || new Date().toISOString(),
        }),
      )
    } catch (error) {
      console.error("Error saving progress:", error)
    }
  }, [answers, currentQuestionIndex, loading, markedQuestions, sectionId])

  // Add this state to track when section is completed
  const [sectionCompleted, setSectionCompleted] = useState(false)
  const [nextRoute, setNextRoute] = useState("")

  // Memoize the completeSection function
  const completeSection = useCallback(() => {
    try {
      if (isNaN(sectionId)) {
        console.error("Cannot complete section: Invalid section ID")
        return
      }

      // Save final state for this section
      saveProgress()

      // Mark section as completed
      const examState = JSON.parse(localStorage.getItem("examState") || "{}")
      const completedSections = [...(examState.completedSections || []), sectionId]

      localStorage.setItem(
        "examState",
        JSON.stringify({
          ...examState,
          completedSections,
          currentSection: sectionId + 1,
        }),
      )

      // Set state to trigger navigation in useEffect
      setSectionCompleted(true)
      const basePath = getBasePath()
      if (sectionId < 4) {
        setNextRoute(`${basePath}/break/${sectionId}`)
      } else {
        setNextRoute(`${basePath}/complete`)
      }
    } catch (error) {
      console.error("Error completing section:", error)
    }
  }, [saveProgress, sectionId])

  // Add this useEffect to handle navigation after state updates
  useEffect(() => {
    if (sectionCompleted && nextRoute) {
      router.push(nextRoute)
    }
  }, [sectionCompleted, nextRoute, router])

  // Add this function in the component
  const handleEndExam = useCallback(() => {
    try {
      if (isNaN(sectionId)) {
        console.error("Cannot end exam: Invalid section ID")
        return
      }

      // Save final state for this section
      saveProgress()

      // Mark current section as completed if any questions were answered
      const examState = JSON.parse(localStorage.getItem("examState") || "{}")
      const completedSections = [...(examState.completedSections || [])]

      if (Object.keys(answers).length > 0 && !completedSections.includes(sectionId)) {
        completedSections.push(sectionId)
      }

      // Update localStorage with completed sections and endedEarly flag
      localStorage.setItem(
        "examState",
        JSON.stringify({
          ...examState,
          completedSections,
          endedEarly: true,
        }),
      )

      // Navigate to complete page
      const basePath = getBasePath()
      router.push(`${basePath}/complete`)
    } catch (error) {
      console.error("Error ending exam:", error)
    }
  }, [router, saveProgress, sectionId, answers])

  // Initial load effect - runs only once
  useEffect(() => {
    if (initialLoadDoneRef.current) return

    // Validate section ID
    if (isNaN(sectionId) || sectionId < 1 || sectionId > 4) {
      console.error(`Invalid section ID: ${id}, redirecting to instructions`)
      const basePath = getBasePath()
      router.push(`${basePath}/instructions`)
      return
    }

    console.log(`Loading section ${sectionId}...`)

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

    // Check if exam has been started
    const examState = localStorage.getItem("examState")
    if (!examState) {
      const basePath = getBasePath()
      router.push(`${basePath}/instructions`)
      return
    }

    // Load section info
    const sectionInfo = sections[sectionId as keyof typeof sections]
    if (sectionInfo) {
      setTimeRemaining(sectionInfo.timeLimit)
    }

    try {
      // Load questions for this section
      console.log(`Attempting to load questions for section ${sectionId}...`)
      try {
        // First try the regular method
        const sectionQuestions = getSectionQuestions(sectionId)

        if (!sectionQuestions || sectionQuestions.length === 0) {
          console.error(`No questions returned for section ${sectionId}, trying safe questions...`)

          // Try the safe questions method
          const safeQuestions = getSafeSectionQuestions(sectionId)
          if (safeQuestions && safeQuestions.length > 0) {
            setQuestions(safeQuestions)
            console.log(`Successfully loaded ${safeQuestions.length} safe questions for section ${sectionId}`)
          } else {
            throw new Error("Both regular and safe question loading failed")
          }
        } else {
          setQuestions(sectionQuestions)
          console.log(`Successfully loaded ${sectionQuestions.length} questions`)
        }
      } catch (error) {
        console.error(`All question loading methods failed for section ${sectionId}:`, error)

        // Last resort emergency fallback
        const lastResortQuestions: Question[] = []
        const targetCount = sectionId === 2 ? 53 : 59

        // Create themed questions based on section
        const questionTemplates = {
          1: [
            {
              q: "Which organelle is responsible for protein synthesis?",
              a: ["Ribosome", "Mitochondria", "Golgi apparatus", "Lysosome"],
            },
            {
              q: "What is the primary function of DNA?",
              a: ["Store genetic information", "Protein synthesis", "Energy production", "Cell signaling"],
            },
            {
              q: "Which of the following is NOT a nucleotide found in DNA?",
              a: ["Uracil", "Adenine", "Guanine", "Thymine"],
            },
            {
              q: "Which enzyme catalyzes the hydrolysis of peptide bonds?",
              a: ["Peptidase", "Amylase", "Lipase", "DNA polymerase"],
            },
            {
              q: "What is the main function of the mitochondria?",
              a: ["ATP production", "Protein synthesis", "Lipid metabolism", "Cell division"],
            },
          ],
          2: [
            { q: "What is the SI unit of force?", a: ["Newton", "Joule", "Watt", "Pascal"] },
            {
              q: "Which law states that energy cannot be created or destroyed?",
              a: ["First law of thermodynamics", "Second law of thermodynamics", "Ohm's law", "Boyle's law"],
            },
            { q: "What is the pH of a neutral solution at 25°C?", a: ["7", "0", "14", "1"] },
            {
              q: "Which of the following is an example of a polar molecule?",
              a: ["Water", "Methane", "Oxygen", "Nitrogen"],
            },
            { q: "What is the charge of an electron?", a: ["Negative", "Positive", "Neutral", "Variable"] },
          ],
          3: [
            {
              q: "Who is known for classical conditioning experiments with dogs?",
              a: ["Pavlov", "Skinner", "Freud", "Jung"],
            },
            {
              q: "What is the term for a person's awareness of their own identity?",
              a: ["Self-concept", "Persona", "Archetype", "Superego"],
            },
            {
              q: "Which theory focuses on how people learn by observing others?",
              a: ["Social learning theory", "Psychoanalytic theory", "Behaviorism", "Humanism"],
            },
            {
              q: "What is the smallest unit of social organization?",
              a: ["Family", "Individual", "Community", "Society"],
            },
            {
              q: "Which part of the brain is primarily responsible for emotions?",
              a: ["Limbic system", "Cerebellum", "Medulla", "Corpus callosum"],
            },
          ],
          4: [
            {
              q: "What is the main purpose of a thesis statement in an essay?",
              a: [
                "State the main argument",
                "Provide background information",
                "Summarize the conclusion",
                "List supporting evidence",
              ],
            },
            {
              q: "Which of the following is an example of a logical fallacy?",
              a: ["Ad hominem", "Deductive reasoning", "Syllogism", "Empirical evidence"],
            },
            {
              q: "What is the difference between correlation and causation?",
              a: [
                "Correlation doesn't imply causation",
                "They are synonymous",
                "Causation is weaker than correlation",
                "Correlation only applies to qualitative data",
              ],
            },
            {
              q: "Which approach to ethics focuses on the outcomes of actions?",
              a: ["Consequentialism", "Deontology", "Virtue ethics", "Divine command theory"],
            },
            {
              q: "What is the purpose of a control group in an experiment?",
              a: [
                "Provide a baseline for comparison",
                "Maximize the effect of the treatment",
                "Eliminate all variables",
                "Increase sample size",
              ],
            },
          ],
        }

        // Get templates for this section
        const templates = questionTemplates[sectionId as keyof typeof questionTemplates] || []

        // Generate questions using templates and random variations
        for (let i = 0; i < targetCount; i++) {
          // Select a template, cycling through them
          const template = templates[i % templates.length]

          // Create a variation of the template question
          const variation = i < templates.length ? "" : ` (Variation ${Math.floor(i / templates.length) + 1})`

          lastResortQuestions.push({
            id: `section${sectionId}-emergency-${i}`,
            type: "discrete",
            question: template ? `${template.q}${variation}` : `Emergency question ${i + 1} for section ${sectionId}?`,
            options: template ? [...template.a] : ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: template ? template.a[0] : "Option A",
            topic: "general",
            explanation: `This is an emergency fallback question. The correct answer is ${template ? template.a[0] : "Option A"}.`,
          })
        }

        setQuestions(lastResortQuestions)
        console.log(`Created ${lastResortQuestions.length} emergency fallback questions`)
      }

      // Load saved answers if any
      try {
        const state = JSON.parse(examState)
        if (state.answers && state.answers[sectionId]) {
          setAnswers(state.answers[sectionId])
        }
        if (state.markedQuestions && state.markedQuestions[sectionId]) {
          setMarkedQuestions(state.markedQuestions[sectionId])
        }
        if (state.currentQuestionIndex && state.currentQuestionIndex[sectionId]) {
          setCurrentQuestionIndex(state.currentQuestionIndex[sectionId])
        }
      } catch (error) {
        console.error("Error loading exam state:", error)
      }

      setLoading(false)
      // Move this line to the end of the effect
      initialLoadDoneRef.current = true
    } catch (error) {
      console.error(`Error in section ${sectionId} initialization:`, error)
      setLoading(false)
      initialLoadDoneRef.current = true
    }
  }, [router, sectionId, id, sections])

  // Timer effect
  useEffect(() => {
    if (loading) return

    const timer = setInterval(() => {
      setTimeRemaining((prev) => {
        // Show warning when 5 minutes remain
        if (prev === 300) {
          setShowTimeWarning(true)
        }

        // End section when time is up
        if (prev <= 1) {
          clearInterval(timer)
          completeSection()
          return 0
        }

        return prev - 1
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [loading, completeSection])

  // Save progress when relevant state changes
  useEffect(() => {
    if (loading || !initialLoadDoneRef.current) return

    // Clear any existing timeout
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current)
    }

    // Set a new timeout to save progress
    saveTimeoutRef.current = setTimeout(() => {
      saveProgress()
    }, 500)

    // Cleanup function
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current)
      }
    }
  }, [answers, currentQuestionIndex, markedQuestions, loading, saveProgress])

  // Update the handleSingleAnswerChange function to ensure immediate saving
  const handleSingleAnswerChange = useCallback(
    (questionId: string, value: string) => {
      setAnswers((prev) => {
        const newAnswers = {
          ...prev,
          [questionId]: value,
        }

        // Log the answer being selected
        console.log(`Selected answer for question ${questionId}: ${value}`)

        // Save answers immediately after selection
        setTimeout(() => {
          try {
            const examState = JSON.parse(localStorage.getItem("examState") || "{}")
            const updatedAnswers = {
              ...examState.answers,
              [sectionId]: {
                ...(examState.answers?.[sectionId] || {}),
                [questionId]: value,
              },
            }

            localStorage.setItem(
              "examState",
              JSON.stringify({
                ...examState,
                answers: updatedAnswers,
              }),
            )

            console.log(`Saved answer for question ${questionId} immediately`)
          } catch (error) {
            console.error("Error saving answer immediately:", error)
          }
        }, 0)

        return newAnswers
      })
    },
    [sectionId],
  )

  const toggleMarkQuestion = useCallback(() => {
    if (!questions[currentQuestionIndex]) return

    const questionId = questions[currentQuestionIndex].id

    setMarkedQuestions((prev) => {
      if (prev.includes(questionId)) {
        return prev.filter((id) => id !== questionId)
      } else {
        return [...prev, questionId]
      }
    })
  }, [currentQuestionIndex, questions])

  const navigateToQuestion = useCallback(
    (index: number) => {
      if (index >= 0 && index < questions.length) {
        setCurrentQuestionIndex(index)
      }
    },
    [questions.length],
  )

  // If section ID is invalid, show an error message
  if (isNaN(sectionId) || sectionId < 1 || sectionId > 4) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center dark:bg-slate-900 text-black dark:text-white">
        <div className="text-center">
          <p className="text-red-500 mb-4">Invalid section ID: {id}</p>
          <Button
            onClick={() => {
              const basePath = getBasePath()
              router.push(`${basePath}/instructions`)
            }}
          >
            Return to Instructions
          </Button>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center dark:bg-slate-900 text-black dark:text-white">
        <p>Loading exam section...</p>
      </div>
    )
  }

  const currentQuestion = questions[currentQuestionIndex]
  if (!currentQuestion) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center dark:bg-slate-900 text-black dark:text-white">
        <div className="text-center">
          <p className="mb-4">No questions available for this section.</p>
          <Button
            onClick={() => {
              const basePath = getBasePath()
              router.push(`${basePath}/instructions`)
            }}
          >
            Return to Instructions
          </Button>
        </div>
      </div>
    )
  }

  const questionNumber = currentQuestionIndex + 1
  const totalQuestions = questions.length
  const answeredCount = Object.keys(answers).length
  const markedCount = markedQuestions.length

  const examState = JSON.parse(localStorage.getItem("examState") || "{}")

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

  // Function to get the passage text for a given question
  const getPassageTextForQuestion = (currentQuestion: Question, questions: Question[]) => {
    if (currentQuestion.passage) {
      return currentQuestion.passage
    }

    if (currentQuestion.type === "passage" && currentQuestion.passageId) {
      // Find the first question in the group that has the passage text
      const passageQuestions = getPassageQuestions(questions, currentQuestion)
      const questionWithPassage = passageQuestions.find((q) => q.passage)
      return questionWithPassage?.passage || ""
    }

    return ""
  }

  // Check if current question is part of a passage
  const isPassageQuestion = currentQuestion.type === "passage"
  const passageText = getPassageTextForQuestion(currentQuestion, questions)
  const passageQuestions = isPassageQuestion ? getPassageQuestions(questions, currentQuestion) : []
  const passageImage =
    isPassageQuestion && currentQuestion.image && currentQuestion.type === "passage" ? currentQuestion.image : undefined

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900" onMouseUp={handleTextSelection}>
      {/* Header */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <div>MCAT Exam Simulation - {userName}</div>
        <div className="flex items-center gap-4">
          <Button variant="destructive" size="sm" onClick={() => setShowEndExam(true)} className="mr-4 text-white">
            End Exam
          </Button>
          <div>Time Remaining {formatTime(timeRemaining)}</div>
          <div>
            {questionNumber} of {totalQuestions}
          </div>
        </div>
      </div>

      {/* Toolbar */}
      <div className="bg-[#f0f4f8] dark:bg-slate-700 p-1 flex justify-between items-center border-y border-gray-300 dark:border-slate-600">
        <div className="flex items-center gap-2">
          <button
            className={`text-sm px-2 py-1 flex items-center text-black dark:text-white ${
              selectedText ? "bg-yellow-300 dark:bg-yellow-500" : ""
            }`}
            onClick={handleHighlight}
          >
            <span className="mr-1">▶</span> Highlight (1)
          </button>
          <button
            className={`text-sm px-2 py-1 flex items-center text-black dark:text-white ${
              selectedText ? "bg-gray-200 dark:bg-gray-600" : ""
            }`}
            onClick={handleStrikethrough}
          >
            <span className="mr-1">✏️</span> Strikethrough (W)
          </button>
          <button
            className="text-sm px-2 py-1 flex items-center text-black dark:text-white"
            onClick={() => setShowScratchPad(true)}
          >
            <span className="mr-1">📝</span> Scratch Pad
          </button>
        </div>
        <button
          onClick={toggleMarkQuestion}
          className={`text-sm px-2 py-1 flex items-center text-black dark:text-white ${
            markedQuestions.includes(currentQuestion.id) ? "bg-yellow-200 dark:bg-yellow-500" : ""
          }`}
        >
          <span className="mr-1">🚩</span> Mark for Review
        </button>
      </div>

      {/* Topic Badge */}
      <div className="bg-[#f0f0f0] dark:bg-slate-800 p-1 border-b border-gray-300 dark:border-slate-700">
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
                          : answers[q.id]
                            ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-100 border border-green-300 dark:border-green-700"
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
                      const isSelected = answers[currentQuestion.id] === option
                      const imageSrc = currentQuestion.optionImages?.[index] || "/placeholder.svg?height=200&width=200"
                      const optionId = `option-${currentQuestion.id}-${index}`

                      return (
                        <div key={optionId} className="flex items-start">
                          <div className="flex items-center mr-2">
                            <input
                              type="radio"
                              id={optionId}
                              name={`question-${currentQuestion.id}`}
                              checked={isSelected}
                              onChange={() => handleSingleAnswerChange(currentQuestion.id, option)}
                              className="mr-2"
                            />
                            <label htmlFor={optionId} className="font-bold text-black dark:text-white mr-2">
                              {letter}.
                            </label>
                          </div>
                          <div className="flex flex-col">
                            <label htmlFor={optionId} className="cursor-pointer text-black dark:text-white mb-2">
                              {option}
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
                    const isSelected = answers[currentQuestion.id] === option
                    const optionId = `option-${currentQuestion.id}-${index}`

                    return (
                      <div key={optionId} className="flex items-center">
                        <input
                          type="radio"
                          id={optionId}
                          name={`question-${currentQuestion.id}`}
                          checked={isSelected}
                          onChange={() => handleSingleAnswerChange(currentQuestion.id, option)}
                          className="mr-2"
                        />
                        <label htmlFor={optionId} className="cursor-pointer">
                          <span className="font-bold mr-2 text-black dark:text-white">{letter}.</span>
                          <span className="text-black dark:text-white">{option}</span>
                        </label>
                      </div>
                    )
                  })
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
                    const isSelected = answers[currentQuestion.id] === option
                    const imageSrc = currentQuestion.optionImages?.[index] || "/placeholder.svg?height=200&width=200"
                    const optionId = `option-${currentQuestion.id}-${index}`

                    return (
                      <div key={optionId} className="flex items-start">
                        <div className="flex items-center mr-2">
                          <input
                            type="radio"
                            id={optionId}
                            name={`question-${currentQuestion.id}`}
                            checked={isSelected}
                            onChange={() => handleSingleAnswerChange(currentQuestion.id, option)}
                            className="mr-2"
                          />
                          <label htmlFor={optionId} className="font-bold text-black dark:text-white mr-2">
                            {letter}.
                          </label>
                        </div>
                        <div className="flex flex-col">
                          <label htmlFor={optionId} className="cursor-pointer text-black dark:text-white mb-2">
                            {option}
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
                  const isSelected = answers[currentQuestion.id] === option
                  const optionId = `option-${currentQuestion.id}-${index}`

                  return (
                    <div key={optionId} className="flex items-center">
                      <input
                        type="radio"
                        id={optionId}
                        name={`question-${currentQuestion.id}`}
                        checked={isSelected}
                        onChange={() => handleSingleAnswerChange(currentQuestion.id, option)}
                        className="mr-2"
                      />
                      <label htmlFor={optionId} className="cursor-pointer">
                        <span className="font-bold mr-2 text-black dark:text-white">{letter}.</span>
                        <span className="text-black dark:text-white">{option}</span>
                      </label>
                    </div>
                  )
                })
              )}
            </div>
          </>
        )}
      </div>

      {/* Footer */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <button className="bg-[#3a6a9a] px-3 py-1 rounded text-white" onClick={() => setShowHelp(true)}>
          <span className="mr-1">❓</span> Help
        </button>
        <div className="flex gap-2">
          {currentQuestionIndex > 0 && (
            <button
              onClick={() => navigateToQuestion(currentQuestionIndex - 1)}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              <span className="mr-1">◀</span> Previous
            </button>
          )}
          <button
            className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            onClick={() => setShowNavigator(true)}
          >
            <span className="mr-1">🔍</span> Navigator
          </button>
          {currentQuestionIndex < questions.length - 1 ? (
            <button
              onClick={() => navigateToQuestion(currentQuestionIndex + 1)}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              Next <span className="ml-1">▶</span>
            </button>
          ) : (
            <button
              onClick={() => setShowEndSection(true)}
              className="bg-[#3a6a9a] px-3 py-1 rounded flex items-center text-white"
            >
              Complete Section <span className="ml-1">▶</span>
            </button>
          )}
        </div>
      </div>

      {/* Dialogs */}
      <NavigatorDialog
        open={showNavigator}
        onOpenChange={setShowNavigator}
        questions={questions.map((q, i) => ({
          id: q.id,
          number: i + 1,
          question: q.question,
        }))}
        answers={answers}
        markedQuestions={markedQuestions}
        onReviewQuestion={navigateToQuestion}
      />

      <ScratchPadDialog open={showScratchPad} onOpenChange={setShowScratchPad} />

      <HelpDialog open={showHelp} onOpenChange={setShowHelp} />

      <EndSectionDialog
        open={showEndSection}
        onOpenChange={setShowEndSection}
        onConfirm={completeSection}
        totalQuestions={totalQuestions}
        answeredCount={answeredCount}
        markedCount={markedCount}
      />

      {/* Time Warning Dialog */}
      <Dialog open={showTimeWarning} onOpenChange={setShowTimeWarning}>
        <DialogContent className="bg-white dark:bg-slate-800 border-2 border-[#1a4a7a] dark:border-blue-700 p-0 max-w-md dialog-content">
          <DialogHeader className="bg-[#1a4a7a] text-white p-2 flex items-center">
            <DialogTitle className="flex items-center text-base font-normal">
              <span className="mr-2">⏱️</span> 5 Minute Warning
            </DialogTitle>
            <button onClick={() => setShowTimeWarning(false)} className="ml-auto text-white">
              ✕
            </button>
          </DialogHeader>
          <div className="p-4 text-black dark:text-white">You have 5 minutes remaining in this section.</div>
        </DialogContent>
      </Dialog>
      <EndExamDialog
        open={showEndExam}
        onOpenChange={setShowEndExam}
        completedSections={examState?.completedSections || []}
        currentSection={sectionId}
        onConfirm={handleEndExam}
      />
    </div>
  )
}

