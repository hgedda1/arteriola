"use client"

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Tooltip, ResponsiveContainer } from "recharts"

interface RadarChartComponentProps {
  data: Array<{
    topic: string
    percentage: number
    section: number
    fullMark: number
  }>
  isDark: boolean
}

export default function RadarChartComponent({ data, isDark }: RadarChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid stroke={isDark ? "#475569" : "#94a3b8"} />
        <PolarAngleAxis
          dataKey="topic"
          tick={{
            fill: isDark ? "#e2e8f0" : "#1e293b",
            fontSize: 12,
          }}
        />
        <PolarRadiusAxis
          angle={90}
          domain={[0, 100]}
          tick={{
            fill: isDark ? "#e2e8f0" : "#1e293b",
            fontSize: 12,
          }}
        />

        <Radar
          name="Performance"
          dataKey="percentage"
          stroke={isDark ? "#60a5fa" : "#3b82f6"}
          fill={isDark ? "#60a5fa" : "#3b82f6"}
          fillOpacity={0.3}
        />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload
              return (
                <div className="bg-white dark:bg-slate-800 p-2 border rounded shadow-sm dark:border-slate-700">
                  <p className="font-medium text-black dark:text-white">{data.topic}</p>
                  <p className="text-sm text-black dark:text-slate-300">Section {data.section}</p>
                  <p className="text-sm font-medium text-black dark:text-white">Score: {data.percentage}%</p>
                </div>
              )
            }
            return null
          }}
        />
      </RadarChart>
    </ResponsiveContainer>
  )
}

