"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { AlertCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Instructions() {
  const router = useRouter()
  const [userName, setUserName] = useState("")

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
      router.push("/register")
    }
  }, [router])

  const startExam = () => {
    // Initialize exam state
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
        }, // Initialize with empty objects for each section
        markedQuestions: {
          1: [],
          2: [],
          3: [],
          4: [],
        }, // Initialize with empty arrays for each section
        currentQuestionIndex: {
          1: 0,
          2: 0,
          3: 0,
          4: 0,
        }, // Initialize with 0 for each section
        completedSections: [],
        startedAt: new Date().toISOString(),
      }),
    )

    router.push("/exam/section/1")
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-4xl dark:bg-slate-800">
        <CardHeader className="text-center border-b pb-6">
          <CardTitle className="text-3xl font-bold dark:text-white">MCAT Exam Simulator</CardTitle>
          <CardDescription className="text-lg mt-2 dark:text-slate-300">Welcome, {userName}</CardDescription>
          <div className="mt-2 text-sm text-muted-foreground dark:text-slate-400">
            <p>You can toggle between light and dark mode using the button in the top right corner.</p>
            <p className="font-medium mt-1">
              Note: Light mode is recommended for the most realistic exam simulation experience.
            </p>
          </div>
        </CardHeader>
        <CardContent className="pt-6 space-y-6">
          <Alert variant="default">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Important</AlertTitle>
            <AlertDescription>Please read all instructions carefully before beginning the exam.</AlertDescription>
          </Alert>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">General Instructions</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-slate-300">
              <li>This exam consists of four sections with specific time limits for each.</li>
              <li>You must complete each section within the allotted time.</li>
              <li>Optional breaks are available between sections.</li>
              <li>You can navigate between questions within a section.</li>
              <li>You can mark questions for review and return to them later.</li>
              <li>Once you complete a section, you cannot return to it.</li>
              <li>Do not refresh the browser or navigate away during the exam.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">Technical Information</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-slate-300">
              <li>A timer will be displayed for each section.</li>
              <li>You will receive a warning when 5 minutes remain in a section.</li>
              <li>Your answers are automatically saved as you progress.</li>
              <li>If you experience technical difficulties, please contact the proctor.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-black dark:text-white">Ready to begin ?</h2>

            <div className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600">
              <h3 className="font-medium text-lg text-black dark:text-white">
                SECTION 1: Chemical and Physical Foundations of Biological Systems
              </h3>
              <p className="text-sm text-gray-600 text-black dark:text-slate-300 mt-1">59 Questions, 95 Minutes</p>
              <p className="text-sm mt-2 dark:text-slate-300">Includes Discrete and passage-based questions.</p>
              <p className="text-sm italic mt-1 text-black dark:text-slate-400">
                10-minute optional break follows this section.
              </p>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6">
          <Button size="lg" onClick={startExam} className="px-8">
            Begin Exam
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

