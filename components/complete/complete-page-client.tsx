"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"
import type { SectionResult, TopicPerformance } from "@/types"
import {
  calculateCorrectAnswers,
  calculateMCATScore,
  getMotivationalMessage,
  getPercentileRank,
  getStudyRecommendations,
  analyzeTopicPerformance,
} from "@/lib/utils"
import { sectionTitles } from "@/constants"
import CompletePageContent from "@/components/complete/complete-page-content"
import { getBasePath } from "@/lib/utils"

export default function CompletePageClient() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [results, setResults] = useState<SectionResult[]>([])
  const [totalScore, setTotalScore] = useState(0)
  const [mcatScore, setMcatScore] = useState(0)
  const [percentileRank, setPercentileRank] = useState("")
  const [topicPerformance, setTopicPerformance] = useState<TopicPerformance>({
    topicScores: {},
    strengths: [],
    weaknesses: [],
    foundationalConceptScores: {},
    contentCategoryScores: {},
    disciplineScores: {},
  })
  const [studyRecommendations, setStudyRecommendations] = useState<string[]>([])
  const [motivationalMessage, setMotivationalMessage] = useState("")
  const [loading, setLoading] = useState(true)

  // Update the useEffect hook to properly fetch and process all data
  useEffect(() => {
    // Check if user is registered and exam is complete
    const userData = localStorage.getItem("examUser")
    const examState = localStorage.getItem("examState")

    if (!userData || !examState) {
      router.push("/register")
      return
    }

    try {
      const user = JSON.parse(userData)
      const state = JSON.parse(examState)

      setUserName(`${user.firstName} ${user.lastName}`)

      // Verify at least one section is completed or exam was ended early
      if (!state.completedSections || (state.completedSections.length < 1 && !state.endedEarly)) {
        const nextSection = state.currentSection || 1
        router.push(`/exam/section/${nextSection}`)
        return
      }      

      // Get all questions for analysis
      const allQuestions: Record<number, any[]> = {}

      // Try to load questions from localStorage for each section
      for (let sectionId = 1; sectionId <= 4; sectionId++) {
        try {
          const storedQuestions = localStorage.getItem(`section${sectionId}-questions`)
          if (storedQuestions) {
            allQuestions[sectionId] = JSON.parse(storedQuestions)
            console.log(`Loaded ${allQuestions[sectionId].length} questions from localStorage for section ${sectionId}`)
          } else {
            console.warn(`No questions found in localStorage for section ${sectionId}`)
            allQuestions[sectionId] = []
          }
        } catch (err) {
          console.error(`Error loading questions for section ${sectionId}:`, err)
          allQuestions[sectionId] = []
        }
      }

      // Calculate results
      const sectionResults: SectionResult[] = [
        {
          id: 1,
          title: sectionTitles[1],
          questionCount: allQuestions[1]?.length || 59,
          answeredCount: Object.keys(state.answers?.[1] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[1] || {}, allQuestions[1] || []),
          score: 0,
        },
        {
          id: 2,
          title: sectionTitles[2],
          questionCount: allQuestions[2]?.length || 53,
          answeredCount: Object.keys(state.answers?.[2] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[2] || {}, allQuestions[2] || []),
          score: 0,
        },
        {
          id: 3,
          title: sectionTitles[3],
          questionCount: allQuestions[3]?.length || 59,
          answeredCount: Object.keys(state.answers?.[3] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[3] || {}, allQuestions[3] || []),
          score: 0,
        },
        {
          id: 4,
          title: sectionTitles[4],
          questionCount: allQuestions[4]?.length || 59,
          answeredCount: Object.keys(state.answers?.[4] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[4] || {}, allQuestions[4] || []),
          score: 0,
        },
      ]

      // Calculate scores (0-100 scale)
      const updatedResults = sectionResults.map((section) => {
        const score = section.questionCount > 0 ? Math.round((section.correctCount / section.questionCount) * 100) : 0
        return { ...section, score }
      })

      setResults(updatedResults)

      // Calculate total score - only count sections that were actually attempted
      const attemptedSections = updatedResults.filter((section) => section.answeredCount > 0)
      const total =
        attemptedSections.length > 0
          ? attemptedSections.reduce((sum, section) => sum + section.score, 0) / attemptedSections.length
          : 0

      setTotalScore(Math.round(total))

      // Calculate MCAT score (472-528 scale)
      const mcat = calculateMCATScore(total)
      setMcatScore(mcat)

      // Get percentile rank
      setPercentileRank(getPercentileRank(mcat))

      // Analyze topic performance with enhanced metadata
      const analysis = analyzeTopicPerformance(state.answers || {}, allQuestions)
      console.log("Topic performance analysis:", analysis)

      // Ensure the analysis has all required properties
      setTopicPerformance({
        topicScores: analysis.topicScores || {},
        strengths: analysis.strengths || [],
        weaknesses: analysis.weaknesses || [],
        foundationalConceptScores: analysis.foundationalConceptScores || {},
        contentCategoryScores: analysis.contentCategoryScores || {},
        disciplineScores: analysis.disciplineScores || {},
      })

      // Get study recommendations with enhanced metadata
      const recommendations = getStudyRecommendations(
        analysis.weaknesses || [],
        analysis.topicScores || {},
        analysis.foundationalConceptScores || {},
        analysis.contentCategoryScores || {},
      )

      // Convert the nested object structure to an array of strings for backward compatibility
      const flattenedRecommendations: string[] = []
      Object.entries(recommendations).forEach(([sectionId, sectionRecs]) => {
        Object.entries(sectionRecs).forEach(([topic, tips]) => {
          if (Array.isArray(tips)) {
            tips.forEach((tip: string) => {
              flattenedRecommendations.push(`Section ${sectionId}: ${formatTopicName(topic)} - ${tip}`)
            })
          } else if (typeof tips === "string") {
            flattenedRecommendations.push(`Section ${sectionId}: ${formatTopicName(topic)} - ${tips}`)
          }
        })
      })

      setStudyRecommendations(flattenedRecommendations)

      // Get motivational message
      setMotivationalMessage(getMotivationalMessage(mcat))

      setLoading(false)
    } catch (error) {
      console.error("Error loading exam results:", error)
      router.push("/instructions")
    }
  }, [router])

  function formatTopicName(topic: string): string {
    // Replace underscores with spaces and capitalize each word
    return topic
      .replace(/_/g, " ")
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ")
  }

  return (
    <CompletePageContent
      userName={userName}
      results={results}
      totalScore={totalScore}
      mcatScore={mcatScore}
      percentileRank={percentileRank}
      topicPerformance={topicPerformance}
      studyRecommendations={studyRecommendations}
      motivationalMessage={motivationalMessage}
      loading={loading}
    />
  )
}

