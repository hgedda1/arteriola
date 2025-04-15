"use client"

import { useEffect, useState, useRef } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { formatTime } from "@/lib/utils"
import { HelpDialog } from "@/components/help-dialog"
import { trackBreakStart, trackBreakEnd } from "@/components/analytics-events"

export default function BreakPageClient({ id }: { id: string }) {
  const router = useRouter()
  const sectionId = id ? Number.parseInt(id, 10) : Number.NaN

  // Log for debugging
  console.log(`BreakPageClient: Received id=${id}, parsed sectionId=${sectionId}`)
  const [timeRemaining, setTimeRemaining] = useState(0)
  const [breakDuration, setBreakDuration] = useState(0)
  const [userName, setUserName] = useState("First Name Last Name")
  const [showHelp, setShowHelp] = useState(false)

  // Add refs for timer tracking
  const startTimeRef = useRef<number>(Date.now())
  const lastTickRef = useRef<number>(Date.now())

  useEffect(() => {
    // Check if user is registered and exam is in progress
    const userData = localStorage.getItem("examUser")
    const examState = localStorage.getItem("examState")

    if (!userData || !examState) {
      router.push('/register')
      return
    }

    try {
      const user = JSON.parse(userData)
      setUserName(`${user.firstName} ${user.lastName}`)

      const state = JSON.parse(examState)

      // Verify the previous section was completed
      if (!state.completedSections || !state.completedSections.includes(sectionId)) {
        router.push(`/exam/section/${sectionId}`)
        return
      }

      // Set break duration based on section
      let duration = 10 * 60 // Default 10 minutes
      if (sectionId === 2) {
        duration = 30 * 60 // 30 minutes after section 2
      }

      setBreakDuration(duration)
      setTimeRemaining(duration)

      // Initialize timer refs
      startTimeRef.current = Date.now()
      lastTickRef.current = Date.now()

      // Track break start
      trackBreakStart(sectionId, duration)

      // Track break start in analytics
      if (typeof window !== "undefined" && window.gtag) {
        window.gtag("event", "break_start", {
          section_id: sectionId,
          break_duration: duration,
          event_category: "Break",
          event_label: `Started Break after Section ${sectionId}`,
        })
      }
    } catch (error) {
      console.error("Error loading exam state:", error)
      router.push("/instructions")
    }
  }, [router, sectionId, id])

  // Timer effect - updated to use Date.now() to prevent pausing when window is minimized
  useEffect(() => {
    if (timeRemaining <= 0) return

    const timer = setInterval(() => {
      // Calculate elapsed time since last tick
      const now = Date.now()
      const deltaTime = Math.floor((now - lastTickRef.current) / 1000)

      // Update last tick time
      lastTickRef.current = now

      // Update time remaining
      setTimeRemaining((prev) => {
        if (prev <= deltaTime) {
          clearInterval(timer)
          return 0
        }
        return prev - deltaTime
      })
    }, 1000)

    // Handle visibility change to ensure timer continues when tab becomes visible again
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        // Update last tick time when tab becomes visible again
        lastTickRef.current = Date.now()
      }
    }

    document.addEventListener("visibilitychange", handleVisibilityChange)

    return () => {
      clearInterval(timer)
      document.removeEventListener("visibilitychange", handleVisibilityChange)
    }
  }, [timeRemaining])

  const skipBreak = () => {
    // Calculate actual break duration
    const actualDuration = breakDuration - timeRemaining

    // Track break end
    trackBreakEnd(sectionId, actualDuration, true)

    // Track break skipped in analytics
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "break_skipped", {
        section_id: sectionId,
        time_remaining: timeRemaining,
        break_duration: breakDuration,
        percentage_used: Math.round(((breakDuration - timeRemaining) / breakDuration) * 100),
        event_category: "Break",
        event_label: `Skipped Break after Section ${sectionId}`,
      })
    }

    router.push(`/exam/section/${sectionId + 1}`)
  }

  const getNextSectionTitle = () => {
    const sections = [
      "",
      "Biological and Biochemical Foundations of Living Systems",
      "Chemical and Physical Foundations of Biological Systems",
      "Psychological, Social, and Biological Foundations of Behavior",
      "Critical Analysis and Reasoning Skills",
    ]

    return sections[sectionId + 1] || "Next Section"
  }

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-900">
      {/* Header */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <div>Demo - Pearson VUE Test Driver - {userName}</div>
        <div className="flex items-center gap-4">
          <div>Time Remaining {formatTime(timeRemaining)}</div>
        </div>
      </div>

      <div className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-white dark:bg-slate-800 border border-gray-300 dark:border-slate-700 shadow-sm">
          <div className="bg-[#1a4a7a] text-white p-3">
            <h2 className="text-lg font-normal">Break Time</h2>
          </div>

          <div className="p-6 space-y-4">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2 text-black dark:text-white">{formatTime(timeRemaining)}</div>
              <p className="text-sm text-gray-600 dark:text-slate-300">
                {timeRemaining > 0 ? "Remaining in break" : "Break time is over"}
              </p>
            </div>

            <div className="bg-gray-100 dark:bg-slate-700 p-4 border border-gray-300 dark:border-slate-600">
              <h3 className="font-medium mb-2 text-black dark:text-white">Next Section</h3>
              <p className="text-sm dark:text-slate-300">
                Section {sectionId + 1}: {getNextSectionTitle()}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="font-medium dark:text-white">Break Tips</h3>
              <ul className="list-disc list-inside text-sm space-y-1 text-gray-700 dark:text-slate-300">
                <li>Stretch and move around</li>
                <li>Use the restroom if needed</li>
                <li>Drink water to stay hydrated</li>
                <li>Take deep breaths to reduce stress</li>
                <li>Avoid looking at your phone or other screens</li>
              </ul>
            </div>

            <Button
              onClick={skipBreak}
              className="w-full bg-[#1a4a7a] hover:bg-[#0d3a6a] rounded-none mt-4 text-white dark:bg-blue-700 dark:hover:bg-blue-800 dark:text-white"
            >
              {timeRemaining === 0 ? "Continue to Next Section" : "Skip Break"}
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-[#1a4a7a] text-white p-2 flex justify-between items-center">
        <button className="bg-[#3a6a9a] px-3 py-1 rounded" onClick={() => setShowHelp(true)}>
          <span className="mr-1">❓</span> Help
        </button>
      </div>
      <HelpDialog open={showHelp} onOpenChange={setShowHelp} />
    </div>
  )
}

