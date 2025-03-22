"use client"

import { formatTopicName } from "@/lib/score-utils"
import { Progress } from "@/components/ui/progress"

interface TopicPerformanceChartProps {
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>
}

export function TopicPerformanceChart({ topicScores }: TopicPerformanceChartProps) {
  // Sort topics by percentage (highest to lowest)
  const sortedTopics = Object.entries(topicScores).sort((a, b) => b[1].percentage - a[1].percentage)

  return (
    <div className="space-y-4 h-full">
      <h3 className="text-lg font-bold text-black dark:text-white">Performance by Topic</h3>

      <div className="space-y-3 overflow-y-auto max-h-[calc(100%-2rem)] custom-scrollbar pr-2">
        {sortedTopics.map(([topic, data]) => (
          <div key={topic}>
            <div className="flex justify-between mb-1">
              <div className="flex items-center">
                <span className="text-sm font-medium text-black dark:text-white truncate max-w-[150px] md:max-w-[200px]">
                  {formatTopicName(topic)}
                </span>
                <span className="ml-2 text-xs bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 px-1.5 py-0.5 rounded">
                  Section {data.section}
                </span>
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">
                {data.correct}/{data.total} ({Math.round(data.percentage)}%)
              </span>
            </div>
            <Progress
              value={data.percentage}
              className={`h-2 ${
                data.percentage >= 80
                  ? "[--primary:theme(colors.green.500)]"
                  : data.percentage >= 70
                    ? "[--primary:theme(colors.green.400)]"
                    : data.percentage >= 60
                      ? "[--primary:theme(colors.yellow.400)]"
                      : data.percentage >= 50
                        ? "[--primary:theme(colors.orange.400)]"
                        : "[--primary:theme(colors.red.500)]"
              }`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

