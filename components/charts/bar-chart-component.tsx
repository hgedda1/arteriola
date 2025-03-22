"use client"

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

interface BarChartComponentProps {
  data: Array<{
    section: string
    sectionName: string
    percentage: number
    correct: number
    total: number
  }>
  isDark: boolean
}

export default function BarChartComponent({ data, isDark }: BarChartComponentProps) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={data}>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={isDark ? "#475569" : "#e2e8f0"} />
        <XAxis
          dataKey="section"
          tickLine={false}
          axisLine={false}
          tick={{
            fill: isDark ? "#e2e8f0" : "#1e293b",
            fontSize: 12,
          }}
        />
        <YAxis
          tickLine={false}
          axisLine={false}
          domain={[0, 100]}
          tickFormatter={(value) => `${value}%`}
          tick={{
            fill: isDark ? "#e2e8f0" : "#1e293b",
            fontSize: 12,
          }}
        />

        <Bar dataKey="percentage" radius={[4, 4, 0, 0]} fill={isDark ? "#60a5fa" : "#3b82f6"} />

        <Tooltip
          content={({ active, payload }) => {
            if (active && payload && payload.length) {
              const data = payload[0].payload
              return (
                <div className="bg-white dark:bg-slate-800 p-2 border rounded shadow-sm dark:border-slate-700">
                  <p className="font-medium text-black dark:text-white">{data.sectionName}</p>
                  <p className="text-sm text-black dark:text-slate-300">Score: {data.percentage}%</p>
                  <p className="text-sm text-black dark:text-slate-300">
                    {data.correct} correct out of {data.total} questions
                  </p>
                </div>
              )
            }
            return null
          }}
        />
      </BarChart>
    </ResponsiveContainer>
  )
}

