"use client"

import { Clock } from "lucide-react"
import { formatTime } from "@/lib/utils"

interface SectionHeaderProps {
  title: string
  timeRemaining: number
  questionCount: number
  currentQuestion: number
  answeredCount: number
}

export function SectionHeader({
  title,
  timeRemaining,
  questionCount,
  currentQuestion,
  answeredCount,
}: SectionHeaderProps) {
  return (
    <div className="bg-white border-b shadow-sm p-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-xl font-bold mb-2 md:mb-0">{title}</h1>

        <div className="flex items-center space-x-6">
          <div className="flex items-center">
            <span className="text-sm mr-2">Question:</span>
            <span className="font-medium">
              {currentQuestion} of {questionCount}
            </span>
          </div>

          <div className="flex items-center">
            <span className="text-sm mr-2">Answered:</span>
            <span className="font-medium">
              {answeredCount} of {questionCount}
            </span>
          </div>

          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span className={`font-medium ${timeRemaining < 300 ? "text-red-600" : ""}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

