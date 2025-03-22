"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { getBasePath } from "@/lib/client-utils"

export default function ResumePage() {
  const router = useRouter()
  const [examState, setExamState] = useState<any>(null)
  const [userName, setUserName] = useState("Candidate")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState("")

  useEffect(() => {
    try {
      // Check if user is registered
      const userData = localStorage.getItem("examUser")
      if (!userData) {
        const basePath = getBasePath()
        router.push(`${basePath}/register`)
        return
      }

      // Parse user data
      const user = JSON.parse(userData)
      setUserName(`${user.firstName} ${user.lastName}`)

      // Check if exam is in progress
      const examStateData = localStorage.getItem("examState")
      if (!examStateData) {
        setError("No exam in progress")
        setLoading(false)
        return
      }

      // Parse exam state
      const state = JSON.parse(examStateData)
      setExamState(state)
      setLoading(false)
    } catch (err) {
      console.error("Error loading data:", err)
      setError("An error occurred. Please try again.")
      setLoading(false)
    }
  }, [router])

  const resumeExam = () => {
    if (!examState) return

    try {
      const basePath = getBasePath()
      const currentSection = examState.currentSection || 1

      if (currentSection >= 1 && currentSection <= 4) {
        router.push(`${basePath}/exam/section/${currentSection}`)
      } else {
        router.push(`${basePath}/instructions`)
      }
    } catch (err) {
      console.error("Error resuming exam:", err)
      setError("An error occurred. Please try again.")
    }
  }

  const startNewExam = () => {
    try {
      // Reset exam state
      localStorage.setItem(
        "examState",
        JSON.stringify({
          currentSection: 0,
          completedSections: [],
          answers: {},
          markedQuestions: {},
          currentQuestionIndex: {},
          startedAt: new Date().toISOString(),
        }),
      )

      // Redirect to instructions
      const basePath = getBasePath()
      router.push(`${basePath}/instructions`)
    } catch (err) {
      console.error("Error starting new exam:", err)
      setError("An error occurred. Please try again.")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white p-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl font-bold mb-6 text-center">Resume Exam</h1>

        {error ? (
          <div className="mb-6 p-3 bg-red-100 dark:bg-red-900/30 border border-red-300 dark:border-red-800 text-red-700 dark:text-red-300 rounded">
            {error}
          </div>
        ) : (
          <div className="mb-6">
            <p className="mb-2">Welcome back, {userName}!</p>

            {examState && (
              <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded border border-blue-200 dark:border-blue-800">
                <p className="font-medium">You have an exam in progress:</p>
                <ul className="mt-2 space-y-1">
                  <li>Started: {new Date(examState.startedAt).toLocaleString()}</li>
                  <li>Current Section: {examState.currentSection || 1}</li>
                  <li>Completed Sections: {examState.completedSections?.length || 0} of 4</li>
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="space-y-4">
          {!error && (
            <Button className="w-full" onClick={resumeExam}>
              Resume Exam
            </Button>
          )}

          <Button variant="outline" className="w-full" onClick={startNewExam}>
            Start New Exam
          </Button>

          <Button variant="outline" className="w-full" onClick={() => router.push("/")}>
            Back to Home
          </Button>
        </div>
      </div>
    </div>
  )
}

