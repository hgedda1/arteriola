import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export const formatTime = (seconds: number): string => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds % 3600) / 60)
  const remainingSeconds = seconds % 60

  const formattedHours = String(hours).padStart(2, "0")
  const formattedMinutes = String(minutes).padStart(2, "0")
  const formattedSeconds = String(remainingSeconds).padStart(2, "0")

  return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`
}

export function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array]
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[newArray[i], newArray[j]] = [newArray[j], newArray[i]]
  }
  return newArray
}

// Update the calculateCorrectAnswers function to properly handle all question formats
export const calculateCorrectAnswers = (answers: Record<string, string>, questions: any[]): number => {
  let correct = 0

  if (!questions || !Array.isArray(questions)) return 0

  Object.entries(answers).forEach(([questionId, userAnswer]) => {
    const question = questions.find((q) => q && q.id === questionId)
    if (question && userAnswer === question.correctAnswer) {
      correct++
    }
  })

  return correct
}

// Function to convert raw score percentage to MCAT score (472-528 scale)
export function calculateMCATScore(percentage: number): number {
  // MCAT scores range from 472 to 528
  // Convert percentage (0-100) to MCAT scale
  const minScore = 472
  const maxScore = 528
  const range = maxScore - minScore

  // Calculate score based on percentage
  const score = Math.round(minScore + (percentage / 100) * range)

  // Ensure score is within valid range
  return Math.max(minScore, Math.min(maxScore, score))
}

export function getAllSectionQuestions(): Record<number, any[]> {
  return {}
}

// Function to get motivational messages
export function getMotivationalMessage(score: number): string {
  if (score >= 515) {
    return "Outstanding work! Your score is competitive for top medical schools. Keep up the excellent preparation!"
  } else if (score >= 508) {
    return "Great job! Your score is competitive for many medical schools. Continue refining your knowledge in your weaker areas."
  } else if (score >= 500) {
    return "Good effort! Your score is approaching the average for medical school matriculants. Focus on your identified areas for improvement."
  } else if (score >= 490) {
    return "You're making progress! With targeted studying in your weaker areas, you can significantly improve your score."
  } else {
    return "This is a great baseline! Everyone starts somewhere, and with dedicated study using the recommendations provided, you can make substantial improvements."
  }
}

// Function to get percentile rank from MCAT score
export function getPercentileRank(score: number): string {
  return "50"
}

export function getStudyRecommendations(
  weaknesses: string[],
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>,
  foundationalConceptScores?: Record<string, { correct: number; total: number; percentage: number }>,
  contentCategoryScores?: Record<string, { correct: number; total: number; percentage: number }>,
): string[] {
  return []
}

// Update the analyzeTopicPerformance function to handle missing data gracefully
export function analyzeTopicPerformance(
  answers: Record<number, Record<string, string>>,
  questions: Record<number, any[]>,
): any {
  const topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }> = {}
  const foundationalConceptScores: Record<string, { correct: number; total: number; percentage: number }> = {}
  const contentCategoryScores: Record<string, { correct: number; total: number; percentage: number }> = {}
  const disciplineScores: Record<string, { correct: number; total: number; percentage: number }> = {}
  const sectionScores: Record<number, { correct: number; total: number; percentage: number }> = {
    1: { correct: 0, total: 0, percentage: 0 },
    2: { correct: 0, total: 0, percentage: 0 },
    3: { correct: 0, total: 0, percentage: 0 },
    4: { correct: 0, total: 0, percentage: 0 },
  }

  // Process each section
  Object.keys(questions).forEach((sectionKey) => {
    const sectionId = Number(sectionKey)
    const sectionQuestions = questions[sectionId] || []
    const sectionAnswers = answers[sectionId] || {}

    if (!Array.isArray(sectionQuestions)) {
      console.warn(`Questions for section ${sectionId} is not an array`)
      return
    }

    // Process each question in the section
    sectionQuestions.forEach((question) => {
      if (!question) return

      const { id, topic, correctAnswer, foundationalConcept, contentCategory, disciplines } = question

      // Skip if missing essential data
      if (!id || !topic) return

      // Initialize topic if not exists
      if (!topicScores[topic]) {
        topicScores[topic] = {
          correct: 0,
          total: 0,
          percentage: 0,
          section: sectionId,
        }
      }

      // Initialize foundational concept if not exists and if it exists in the question
      if (foundationalConcept && !foundationalConceptScores[foundationalConcept]) {
        foundationalConceptScores[foundationalConcept] = {
          correct: 0,
          total: 0,
          percentage: 0,
        }
      }

      // Initialize content category if not exists and if it exists in the question
      if (contentCategory && !contentCategoryScores[contentCategory]) {
        contentCategoryScores[contentCategory] = {
          correct: 0,
          total: 0,
          percentage: 0,
        }
      }

      // Initialize disciplines if not exists and if they exist in the question
      if (disciplines && Array.isArray(disciplines)) {
        disciplines.forEach((discipline) => {
          if (!disciplineScores[discipline]) {
            disciplineScores[discipline] = {
              correct: 0,
              total: 0,
              percentage: 0,
            }
          }
        })
      }

      // Increment total for this topic
      topicScores[topic].total++
      sectionScores[sectionId].total++

      // Increment total for foundational concept if it exists
      if (foundationalConcept) {
        foundationalConceptScores[foundationalConcept].total++
      }

      // Increment total for content category if it exists
      if (contentCategory) {
        contentCategoryScores[contentCategory].total++
      }

      // Increment total for disciplines if they exist
      if (disciplines && Array.isArray(disciplines)) {
        disciplines.forEach((discipline) => {
          disciplineScores[discipline].total++
        })
      }

      // Check if answer is correct
      if (sectionAnswers[id] === correctAnswer) {
        topicScores[topic].correct++
        sectionScores[sectionId].correct++

        // Increment correct for foundational concept if it exists
        if (foundationalConcept) {
          foundationalConceptScores[foundationalConcept].correct++
        }

        // Increment correct for content category if it exists
        if (contentCategory) {
          contentCategoryScores[contentCategory].correct++
        }

        // Increment correct for disciplines if they exist
        if (disciplines && Array.isArray(disciplines)) {
          disciplines.forEach((discipline) => {
            disciplineScores[discipline].correct++
          })
        }
      }
    })
  })

  // Calculate percentages
  Object.keys(topicScores).forEach((topic) => {
    const { correct, total } = topicScores[topic]
    topicScores[topic].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(foundationalConceptScores).forEach((concept) => {
    const { correct, total } = foundationalConceptScores[concept]
    foundationalConceptScores[concept].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(contentCategoryScores).forEach((category) => {
    const { correct, total } = contentCategoryScores[category]
    contentCategoryScores[category].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(disciplineScores).forEach((discipline) => {
    const { correct, total } = disciplineScores[discipline]
    disciplineScores[discipline].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(sectionScores).forEach((sectionId) => {
    const { correct, total } = sectionScores[Number(sectionId)]
    sectionScores[Number(sectionId)].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  // Identify strengths and weaknesses
  const sortedTopics = Object.entries(topicScores).sort((a, b) => b[1].percentage - a[1].percentage)

  // Top 3 topics are strengths
  const strengths = sortedTopics
    .slice(0, 3)
    .filter(([_, data]) => data.percentage >= 70) // Only include if ≥70%
    .map(([topic]) => topic)

  // Bottom 3 topics are weaknesses
  const weaknesses = sortedTopics
    .slice(-3)
    .filter(([_, data]) => data.percentage < 70) // Only include if <70%
    .map(([topic]) => topic)

  return {
    topicScores,
    foundationalConceptScores,
    contentCategoryScores,
    disciplineScores,
    strengths,
    weaknesses,
    sectionScores,
  }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Base path helper
export const getBasePath = (): string => {
  if (typeof window !== "undefined") {
    // Check if we're on GitHub Pages with the /arteriola path
    if (window.location.hostname.includes("github.io")) {
      return "/arteriola"
    }

    // For local development when testing with the path
    if (process.env.NODE_ENV === "development" && window.location.pathname.startsWith("/arteriola")) {
      return "/arteriola"
    }
  }

  // Default to empty string for local development without the path
  return ""
}

