"use client"

import type React from "react"

import { formatTopicName } from "@/lib/score-utils"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"

interface TopicDataPoint {
  topic: string
  originalTopic: string
  percentage: number
  section: number
  correct: number
  total: number
  x?: number
  y?: number
}

interface PerformanceRadarChartProps {
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>
}

export function PerformanceRadarChart({ topicScores }: PerformanceRadarChartProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const requestRef = useRef<number | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  // Format data for the radar chart
  const chartData: TopicDataPoint[] = Object.entries(topicScores).map(([topic, data]) => ({
    topic: formatTopicName(topic),
    originalTopic: topic,
    percentage: Math.round(data.percentage),
    section: data.section,
    correct: data.correct,
    total: data.total,
  }))

  // Animation function
  const animate = () => {
    if (animationProgress < 1) {
      setAnimationProgress((prev) => Math.min(prev + 0.02, 1))
      requestRef.current = requestAnimationFrame(animate)
    }
  }

  // Start animation
  useEffect(() => {
    if (mounted) {
      setAnimationProgress(0)
      requestRef.current = requestAnimationFrame(animate)

      return () => {
        if (requestRef.current) {
          cancelAnimationFrame(requestRef.current)
        }
      }
    }
  }, [mounted])

  // Adjust the chart dimensions and padding to ensure all content is visible
  const drawRadarChart = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas dimensions with high-DPI support
    const containerWidth = canvas.parentElement?.clientWidth || 400
    const containerHeight = canvas.parentElement?.clientHeight || 400

    // Get device pixel ratio
    const dpr = window.devicePixelRatio || 1

    // Set canvas dimensions accounting for device pixel ratio
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr

    // Scale canvas back down with CSS
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`

    // Scale all drawing operations
    ctx.scale(dpr, dpr)

    // Increase top and bottom padding to ensure labels are visible
    const topPadding = 30
    const bottomPadding = 60
    const sidePadding = 30

    // Chart dimensions - adjusted to account for padding
    const centerX = containerWidth / 2
    const centerY = (containerHeight - bottomPadding + topPadding) / 2
    const radius = Math.min(centerX - sidePadding, centerY - topPadding) * 0.7

    // Clear canvas
    ctx.clearRect(0, 0, containerWidth, containerHeight)

    // Draw axes
    ctx.strokeStyle = isDark ? "#475569" : "#94a3b8"
    ctx.lineWidth = 1

    const numPoints = chartData.length
    const angleStep = (Math.PI * 2) / numPoints

    // Draw circles with animation
    for (let r = 0.2; r <= 1; r += 0.2) {
      // Only draw circles that should be visible based on animation progress
      if (r <= animationProgress) {
        const circleRadius = radius * r

        ctx.beginPath()
        for (let i = 0; i < numPoints; i++) {
          const angle = i * angleStep - Math.PI / 2
          const x = centerX + Math.cos(angle) * circleRadius
          const y = centerY + Math.sin(angle) * circleRadius

          if (i === 0) {
            ctx.moveTo(x, y)
          } else {
            ctx.lineTo(x, y)
          }
        }
        ctx.closePath()
        ctx.stroke()

        // Add percentage labels to circles
        if (r < 1) {
          ctx.fillStyle = isDark ? "#e2e8f0" : "#1e293b"
          ctx.font = "10px Arial"
          ctx.textAlign = "right"
          ctx.textBaseline = "middle"
          ctx.fillText(`${Math.round(r * 100)}%`, centerX - 5, centerY - circleRadius)
        }
      }
    }

    // Draw axes
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2
      const x = centerX + Math.cos(angle) * radius * animationProgress
      const y = centerY + Math.sin(angle) * radius * animationProgress

      ctx.beginPath()
      ctx.moveTo(centerX, centerY)
      ctx.lineTo(x, y)
      ctx.stroke()

      // Draw labels with fade-in effect - adjusted positioning
      const labelDistance = radius + 25
      const labelX = centerX + Math.cos(angle) * labelDistance * animationProgress
      const labelY = centerY + Math.sin(angle) * labelDistance * animationProgress

      ctx.fillStyle = isDark ? `rgba(226, 232, 240, ${animationProgress})` : `rgba(30, 41, 59, ${animationProgress})`
      ctx.font = "12px Arial"
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      // Adjust label position to prevent clipping
      const labelText = chartData[i].topic
      const textWidth = ctx.measureText(labelText).width

      // Adjust horizontal position for labels near the edges
      let adjustedX = labelX
      if (labelX < textWidth / 2 + 5) {
        adjustedX = textWidth / 2 + 5
      } else if (labelX > containerWidth - textWidth / 2 - 5) {
        adjustedX = containerWidth - textWidth / 2 - 5
      }

      ctx.fillText(labelText, adjustedX, labelY)
    }

    // Draw data with animation
    ctx.beginPath()
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = (chartData[i].percentage / 100) * animationProgress // Animate the value
      const x = centerX + Math.cos(angle) * radius * value
      const y = centerY + Math.sin(angle) * radius * value

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.closePath()
    ctx.fillStyle = isDark
      ? `rgba(96, 165, 250, ${0.3 * animationProgress})`
      : `rgba(59, 130, 246, ${0.3 * animationProgress})`
    ctx.fill()
    ctx.strokeStyle = isDark ? "#60a5fa" : "#3b82f6"
    ctx.lineWidth = 2
    ctx.stroke()

    // Draw data points with hover effect
    for (let i = 0; i < numPoints; i++) {
      const angle = i * angleStep - Math.PI / 2
      const value = (chartData[i].percentage / 100) * animationProgress
      const x = centerX + Math.cos(angle) * radius * value
      const y = centerY + Math.sin(angle) * radius * value

      // Make the point bigger if it's hovered
      const pointRadius = hoveredPoint === i ? 6 : 4

      ctx.beginPath()
      ctx.arc(x, y, pointRadius, 0, Math.PI * 2)
      ctx.fillStyle =
        hoveredPoint === i
          ? isDark
            ? "#93c5fd"
            : "#2563eb" // Brighter color when hovered
          : isDark
            ? "#60a5fa"
            : "#3b82f6"
      ctx.fill()

      // Store point coordinates for hover detection
      chartData[i].x = x
      chartData[i].y = y
    }

    // Position tooltip if a point is hovered
    if (hoveredPoint !== null && mousePosition && tooltipRef.current) {
      const tooltip = tooltipRef.current
      tooltip.style.display = "block"
      tooltip.style.left = `${mousePosition.x + 10}px`
      tooltip.style.top = `${mousePosition.y + 10}px`
    } else if (tooltipRef.current) {
      tooltipRef.current.style.display = "none"
    }
  }

  // Handle mouse move for hover effects
  const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setMousePosition({ x: e.clientX, y: e.clientY })

    // Check if mouse is over any data point
    let hoveredIndex = null
    for (let i = 0; i < chartData.length; i++) {
      const point = chartData[i]
      if (point.x !== undefined && point.y !== undefined) {
        const distance = Math.sqrt(Math.pow(x - point.x, 2) + Math.pow(y - point.y, 2))
        if (distance <= 10) {
          // Slightly larger than the point for easier hovering
          hoveredIndex = i
          break
        }
      }
    }

    setHoveredPoint(hoveredIndex)
  }

  const handleMouseLeave = () => {
    setHoveredPoint(null)
  }

  // Use useEffect to ensure the component only renders on the client
  useEffect(() => {
    setMounted(true)

    if (mounted) {
      drawRadarChart()

      // Redraw on window resize
      const handleResize = () => {
        drawRadarChart()
      }

      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [mounted, isDark, chartData, animationProgress, hoveredPoint, mousePosition])

  if (!mounted) {
    return <div className="w-full h-[400px] flex items-center justify-center">Loading chart...</div>
  }

  // Update the return JSX to adjust the container height and add more space for the chart
  return (
    <div className="w-full h-[450px] relative">
      <canvas
        ref={canvasRef}
        className="w-full h-[400px] cursor-pointer"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      ></canvas>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="absolute hidden bg-white dark:bg-slate-800 p-2 rounded shadow-lg border border-gray-200 dark:border-slate-700 z-10 pointer-events-none"
        style={{ minWidth: "150px" }}
      >
        {hoveredPoint !== null && chartData[hoveredPoint] && (
          <>
            <div className="font-medium text-black dark:text-white">{chartData[hoveredPoint].topic}</div>
            <div className="text-sm text-gray-600 dark:text-gray-300">Section {chartData[hoveredPoint].section}</div>
            <div className="text-sm font-medium text-black dark:text-white">
              Score: {chartData[hoveredPoint].percentage}%
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              {chartData[hoveredPoint].correct} of {chartData[hoveredPoint].total} correct
            </div>
          </>
        )}
      </div>

      {/* Fallback text display - with responsive grid */}
      {chartData.length > 0 && (
        <div className="absolute bottom-0 left-0 right-0 bg-white dark:bg-slate-800 p-2 border-t border-gray-200 dark:border-slate-700 h-[50px] overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 text-xs">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1 flex-shrink-0"
                  style={{ backgroundColor: isDark ? "#60a5fa" : "#3b82f6" }}
                ></div>
                <span className="text-black dark:text-white truncate">
                  {item.topic}: {item.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

