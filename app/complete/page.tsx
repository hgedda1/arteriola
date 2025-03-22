"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, BookOpen, TrendingUp, AlertTriangle, PieChart } from "lucide-react"
import { getAllSectionQuestions } from "@/lib/questions"
import { MCATScoreTable } from "@/components/mcat-score-table"
import { TopicPerformanceChart } from "@/components/topic-performance-chart"
import { StudyRecommendations } from "@/components/study-recommendations"
import { PerformanceRadarChart } from "@/components/performance-radar-chart"
import { SectionPerformanceChart } from "@/components/section-performance-chart"
import { DownloadSummary } from "@/components/download-summary"
import {
  calculateMCATScore,
  getPercentileRank,
  analyzeTopicPerformance,
  getStudyRecommendations,
  getMotivationalMessage,
  formatTopicName,
  sectionTitles,
} from "@/lib/score-utils"

// Add this import at the top
import { BarChart } from "recharts"

interface SectionResult {
  id: number
  title: string
  questionCount: number
  answeredCount: number
  correctCount: number
  score: number
}

export default function CompletePage() {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const [userName, setUserName] = useState("")
  const [results, setResults] = useState<SectionResult[]>([])
  const [totalScore, setTotalScore] = useState(0)
  const [mcatScore, setMcatScore] = useState(500)
  const [percentileRank, setPercentileRank] = useState(0)
  const [topicPerformance, setTopicPerformance] = useState<{
    topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>
    strengths: string[]
    weaknesses: string[]
    sectionScores: Record<number, { correct: number; total: number; percentage: number }>
  }>({
    topicScores: {},
    strengths: [],
    weaknesses: [],
    sectionScores: {
      1: { correct: 0, total: 0, percentage: 0 },
      2: { correct: 0, total: 0, percentage: 0 },
      3: { correct: 0, total: 0, percentage: 0 },
      4: { correct: 0, total: 0, percentage: 0 },
    },
  })
  const [studyRecommendations, setStudyRecommendations] = useState<Record<number, Record<string, string[]>>>({
    1: {},
    2: {},
    3: {},
    4: {},
  })
  const [motivationalMessage, setMotivationalMessage] = useState("")
  const [visualizationType, setVisualizationType] = useState<"radar" | "bar">("radar")

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
      const allQuestions = getAllSectionQuestions()

      // Calculate results
      const sectionResults: SectionResult[] = [
        {
          id: 1,
          title: sectionTitles[1],
          questionCount: 59,
          answeredCount: Object.keys(state.answers?.[1] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[1] || {}, allQuestions[1]),
          score: 0,
        },
        {
          id: 2,
          title: sectionTitles[2],
          questionCount: 53,
          answeredCount: Object.keys(state.answers?.[2] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[2] || {}, allQuestions[2]),
          score: 0,
        },
        {
          id: 3,
          title: sectionTitles[3],
          questionCount: 59,
          answeredCount: Object.keys(state.answers?.[3] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[3] || {}, allQuestions[3]),
          score: 0,
        },
        {
          id: 4,
          title: sectionTitles[4],
          questionCount: 59,
          answeredCount: Object.keys(state.answers?.[4] || {}).length,
          correctCount: calculateCorrectAnswers(state.answers?.[4] || {}, allQuestions[4]),
          score: 0,
        },
      ]

      // Calculate scores (0-100 scale)
      const updatedResults = sectionResults.map((section) => {
        const score = section.questionCount > 0 ? Math.round((section.correctCount / section.questionCount) * 100) : 0
        return { ...section, score }
      })

      setResults(updatedResults)

      // Calculate total score
      const total = updatedResults.reduce((sum, section) => sum + section.score, 0) / updatedResults.length
      setTotalScore(Math.round(total))

      // Calculate MCAT score (472-528 scale)
      const mcat = calculateMCATScore(total)
      setMcatScore(mcat)

      // Get percentile rank
      setPercentileRank(getPercentileRank(mcat))

      // Analyze topic performance
      const analysis = analyzeTopicPerformance(state.answers || {}, allQuestions)
      setTopicPerformance(analysis)

      // Get study recommendations
      setStudyRecommendations(getStudyRecommendations(analysis.weaknesses, analysis.topicScores))

      // Get motivational message
      setMotivationalMessage(getMotivationalMessage(mcat))

      setLoading(false)
    } catch (error) {
      console.error("Error loading exam results:", error)
      router.push("/instructions")
    }
  }, [router])

  // Helper function to calculate correct answers
  const calculateCorrectAnswers = (answers: Record<string, string>, questions: any[]): number => {
    let correct = 0

    Object.entries(answers).forEach(([questionId, userAnswer]) => {
      const question = questions.find((q) => q.id === questionId)
      if (question && userAnswer === question.correctAnswer) {
        correct++
      }
    })

    return correct
  }

  const resetExam = () => {
    // Clear exam state but keep user data
    localStorage.removeItem("examState")
    router.push("/instructions")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
        <p>Loading your results...</p>
      </div>
    )
  }

  const examState = localStorage.getItem("examState") ? JSON.parse(localStorage.getItem("examState")!) : null

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <Card className="w-full max-w-5xl card dark:bg-slate-800 dark:border-slate-700 overflow-hidden">
        <CardHeader className="text-center border-b dark:border-slate-700 pb-6">
          <div className="mx-auto bg-green-100 dark:bg-green-900 rounded-full p-2 w-12 h-12 flex items-center justify-center mb-4">
            <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <CardTitle className="text-3xl font-bold text-black dark:text-white">Exam Complete</CardTitle>
          <CardDescription className="text-lg mt-2 text-gray-600 dark:text-slate-300">
            Congratulations, {userName}! You have completed {examState?.endedEarly ? "part of" : "all sections of"} the
            exam.
          </CardDescription>
          {examState?.endedEarly && (
            <div className="text-sm mt-2 text-amber-600 dark:text-amber-400">
              Note: You ended the exam early. Results are shown for the sections you completed.
            </div>
          )}
        </CardHeader>

        <Tabs defaultValue="summary" className="w-full">
          <TabsList className="grid grid-cols-3 mx-6 mt-4 dark:bg-slate-700">
            <TabsTrigger value="summary" className="text-black dark:text-white dark:data-[state=active]:bg-slate-900">
              Summary
            </TabsTrigger>
            <TabsTrigger value="analysis" className="text-black dark:text-white dark:data-[state=active]:bg-slate-900">
              Performance Analysis
            </TabsTrigger>
            <TabsTrigger
              value="recommendations"
              className="text-black dark:text-white dark:data-[state=active]:bg-slate-900"
            >
              Study Plan
            </TabsTrigger>
          </TabsList>

          <TabsContent value="summary" className="pt-2">
            <CardContent className="space-y-6">
              <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-black dark:text-white">{mcatScore}</div>
                  <p className="text-muted-foreground dark:text-slate-400">MCAT Score</p>
                  <p className="text-sm text-blue-600 dark:text-blue-400 font-medium">{percentileRank}th Percentile</p>
                </div>

                <div className="h-16 w-px bg-gray-200 dark:bg-slate-700 hidden md:block"></div>

                <div className="text-center">
                  <div className="text-5xl font-bold mb-2 text-black dark:text-white">{totalScore}%</div>
                  <p className="text-muted-foreground dark:text-slate-400">Overall Percentage</p>
                </div>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 text-center">
                <p className="text-blue-800 dark:text-blue-200">{motivationalMessage}</p>
              </div>

              <div className="space-y-6">
                <h2 className="text-xl font-semibold text-black dark:text-white">Section Results</h2>

                {results.map((section) => (
                  <div
                    key={section.id}
                    className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-black dark:text-white">
                        Section {section.id}: {section.title}
                      </h3>
                      <span className="font-bold text-black dark:text-white">{section.score}%</span>
                    </div>
                    <Progress
                      value={section.score}
                      className={`h-2 mb-2 ${
                        section.score >= 80
                          ? "[--primary:theme(colors.green.500)]"
                          : section.score >= 70
                            ? "[--primary:theme(colors.green.400)]"
                            : section.score >= 60
                              ? "[--primary:theme(colors.yellow.400)]"
                              : section.score >= 50
                                ? "[--primary:theme(colors.orange.400)]"
                                : "[--primary:theme(colors.red.500)]"
                      }`}
                    />
                    <div className="flex justify-between text-sm text-muted-foreground dark:text-slate-400">
                      <span>Questions: {section.questionCount}</span>
                      <span>Answered: {section.answeredCount}</span>
                      <span>Correct: {section.correctCount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="analysis" className="pt-2">
            <CardContent className="space-y-6">
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-black dark:text-white">Performance Visualization</h3>
                <div className="flex items-center space-x-2 bg-gray-100 dark:bg-slate-700 rounded-lg p-1">
                  <Button
                    variant={visualizationType === "radar" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setVisualizationType("radar")}
                    className="flex items-center gap-1 text-black dark:text-white dark:data-[state=open]:bg-slate-800"
                  >
                    <PieChart className="h-4 w-4" />
                    <span>Radar</span>
                  </Button>
                  <Button
                    variant={visualizationType === "bar" ? "default" : "ghost"}
                    size="sm"
                    onClick={() => setVisualizationType("bar")}
                    className="flex items-center gap-1 text-black dark:text-white dark:data-[state=open]:bg-slate-800"
                  >
                    <BarChart className="h-4 w-4" />
                    <span>Bar</span>
                  </Button>
                </div>
              </div>

              <div className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600 overflow-hidden">
                {visualizationType === "radar" ? (
                  <div className="h-[450px] w-full overflow-hidden">
                    <PerformanceRadarChart topicScores={topicPerformance.topicScores} />
                  </div>
                ) : (
                  <div className="h-[400px] w-full overflow-hidden flex flex-col">
                    <SectionPerformanceChart sectionScores={topicPerformance.sectionScores} />
                  </div>
                )}
              </div>

              <div className="flex flex-col space-y-8">
                <div className="h-[350px] overflow-hidden">
                  <TopicPerformanceChart topicScores={topicPerformance.topicScores} />
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4 text-black dark:text-white">Strengths & Weaknesses</h3>

                  {topicPerformance.strengths.length > 0 ? (
                    <div className="mb-6">
                      <h4 className="text-sm font-medium flex items-center text-green-700 dark:text-green-400 mb-2">
                        <TrendingUp className="h-4 w-4 mr-1" /> Strengths
                      </h4>
                      <ul className="space-y-2">
                        {topicPerformance.strengths.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-center bg-green-50 dark:bg-green-900/30 p-2 rounded border border-green-100 dark:border-green-800"
                          >
                            <CheckCircle className="h-4 w-4 text-green-500 dark:text-green-400 mr-2" />
                            <span className="text-black dark:text-white">{formatTopicName(topic)}</span>
                            <span className="ml-auto font-medium text-black dark:text-white">
                              {Math.round(topicPerformance.topicScores[topic].percentage)}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground dark:text-slate-400 mb-6">
                      No particular strengths identified yet.
                    </p>
                  )}

                  {topicPerformance.weaknesses.length > 0 ? (
                    <div>
                      <h4 className="text-sm font-medium flex items-center text-amber-700 dark:text-amber-400 mb-2">
                        <AlertTriangle className="h-4 w-4 mr-1" /> Areas for Improvement
                      </h4>
                      <ul className="space-y-2">
                        {topicPerformance.weaknesses.map((topic) => (
                          <li
                            key={topic}
                            className="flex items-center bg-amber-50 dark:bg-amber-900/30 p-2 rounded border border-amber-100 dark:border-amber-800"
                          >
                            <AlertTriangle className="h-4 w-4 text-amber-500 dark:text-amber-400 mr-2" />
                            <span className="text-black dark:text-white">{formatTopicName(topic)}</span>
                            <span className="ml-auto font-medium text-black dark:text-white">
                              {Math.round(topicPerformance.topicScores[topic].percentage)}%
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground dark:text-slate-400">
                      No significant weaknesses identified. Great job!
                    </p>
                  )}
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium mb-4 text-black dark:text-white">MCAT Score Percentile Table</h3>
                <MCATScoreTable userScore={mcatScore} />
              </div>
            </CardContent>
          </TabsContent>

          <TabsContent value="recommendations" className="pt-2">
            <CardContent className="space-y-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4">
                <h3 className="text-lg font-medium flex items-center mb-2 text-black dark:text-white">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-700 dark:text-blue-400" />
                  Your Personalized Study Plan
                </h3>
                <p className="text-sm text-blue-800 dark:text-blue-200">
                  Based on your performance, we've identified specific areas where focused study can help improve your
                  score. Remember that consistent practice and targeted review are key to MCAT success.
                </p>
              </div>

              <StudyRecommendations recommendations={studyRecommendations} />

              <div className="space-y-4 mt-6">
                <h3 className="text-lg font-medium text-black dark:text-white">General Study Tips</h3>
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <Card className="card dark:bg-slate-700 dark:border-slate-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-black dark:text-white">Content Review</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm space-y-1 text-black dark:text-slate-300">
                        <li>Create a study schedule with specific goals for each session</li>
                        <li>Use active recall techniques rather than passive reading</li>
                        <li>Review high-yield topics more frequently</li>
                        <li>Create and use flashcards for key concepts and formulas</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="card dark:bg-slate-700 dark:border-slate-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-black dark:text-white">Practice Strategy</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm space-y-1 text-black dark:text-slate-300">
                        <li>Take full-length practice tests under timed conditions</li>
                        <li>Review every question, even ones you got right</li>
                        <li>Focus on understanding why wrong answers are incorrect</li>
                        <li>Practice with this tool and you will clear the exam for sure</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="card dark:bg-slate-700 dark:border-slate-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-black dark:text-white">Mental Preparation</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm space-y-1 text-black dark:text-slate-300">
                        <li>Develop test-taking strategies to manage time effectively</li>
                        <li>Practice mindfulness or meditation to reduce test anxiety</li>
                        <li>Maintain a positive mindset and visualize success</li>
                        <li>Take care of your physical health with proper sleep and nutrition</li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="card dark:bg-slate-700 dark:border-slate-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-black dark:text-white">To Follow</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm space-y-1 text-black dark:text-slate-300">
                        <li>These questions are sourced from best resources</li>
                        <li>Consider answering one section and review results</li>
                        <li>Try two sections and slowly increase the pace</li>
                        <li>Keep an eye on fundamentals</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-green-50 dark:bg-green-900/20 border border-green-100 dark:border-green-800 rounded-lg p-4 text-center mt-6">
                <p className="text-green-800 dark:text-green-200 font-medium">
                  Remember: The MCAT is just one part of your medical school application. Stay confident and keep
                  working toward your goals. I am sure you'll nail it!
                </p>
              </div>
            </CardContent>
          </TabsContent>
        </Tabs>

        <CardFooter className="flex justify-between border-t dark:border-slate-700 pt-6">
          <div className="flex gap-4">
            <Button
              onClick={() => router.push("/review")}
              variant="outline"
              size="lg"
              className="text-black dark:text-white dark:border-slate-600"
            >
              Review Sections
            </Button>
            <DownloadSummary
              userName={userName}
              mcatScore={mcatScore}
              percentileRank={percentileRank}
              totalScore={totalScore}
              results={results}
              topicPerformance={topicPerformance}
              studyRecommendations={studyRecommendations}
              motivationalMessage={motivationalMessage}
            />
          </div>
          <Button onClick={resetExam} size="lg" className="px-8 text-white">
            Take Exam Again
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

