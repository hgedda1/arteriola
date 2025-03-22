"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { getBasePath } from "@/lib/client-utils"

export default function ReviewPage() {
  const router = useRouter()
  const [userName, setUserName] = useState("")
  const [completedSections, setCompletedSections] = useState<number[]>([])

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
      if (state.completedSections) {
        setCompletedSections(state.completedSections)
      }
    } catch (error) {
      console.error("Error loading exam state:", error)
    }
  }, [router])

  const sectionTitles = {
    1: "Biological and Biochemical Foundations of Living Systems",
    2: "Chemical and Physical Foundations of Biological Systems",
    3: "Psychological, Social, and Biological Foundations of Behavior",
    4: "Critical Analysis and Reasoning Skills",
  }

  const navigateToSectionReview = (sectionId: number) => {
    const basePath = getBasePath()
    router.push(`${basePath}/review/section/${sectionId}`)
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col">
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <div>Exam Review - {userName}</div>
        <div className="flex items-center">
          <ThemeToggle />
        </div>
      </div>

      <div className="bg-white container mx-auto p-6 flex-1">
        <h1 className="text-2xl font-bold mb-6 dark:text-white">Review Completed Sections</h1>

        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
          {[1, 2, 3, 4].map((sectionId) => (
            <Card
              key={sectionId}
              className={`${completedSections.includes(sectionId) ? "" : "opacity-50"} text-black dark:bg-slate-800 dark:border-slate-700`}
            >
              <CardHeader>
                <CardTitle className="text-black dark:text-white">Section {sectionId}</CardTitle>
                <CardDescription className="dark:text-slate-300">
                  {sectionTitles[sectionId as keyof typeof sectionTitles]}
                </CardDescription>
              </CardHeader>
              <CardContent className="text-black dark:text-slate-300">
                {completedSections.includes(sectionId) ? (
                  <p>This section has been completed. You can review your answers.</p>
                ) : (
                  <p>This section has not been completed yet.</p>
                )}
              </CardContent>
              <CardFooter>
                <Button
                  onClick={() => navigateToSectionReview(sectionId)}
                  disabled={!completedSections.includes(sectionId)}
                  className="dark:bg-blue-700 dark:hover:bg-blue-800"
                >
                  Review Section
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-6 flex justify-end">
          <Button
            variant="outline"
            onClick={() => {
              const basePath = getBasePath()
              router.push(`${basePath}/complete`)
            }}
            className="text-black dark:text-white dark:border-slate-600"
          >
            Back to Results
          </Button>
        </div>
      </div>
    </div>
  )
}

