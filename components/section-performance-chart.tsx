"use client"

import type React from "react"

import { sectionTitles } from "@/lib/score-utils"
import { useTheme } from "next-themes"
import { useEffect, useState, useRef } from "react"

interface SectionPerformanceChartProps {
  sectionScores: Record<number, { correct: number; total: number; percentage: number }>
}

export function SectionPerformanceChart({ sectionScores }: SectionPerformanceChartProps) {
  const { theme } = useTheme()
  const isDark = theme === "dark"
  const [mounted, setMounted] = useState(false)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [animationProgress, setAnimationProgress] = useState(0)
  const [hoveredBar, setHoveredBar] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number } | null>(null)
  const requestRef = useRef<number | null>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)
  const barRefs = useRef<Array<{ x: number; y: number; width: number; height: number }>>([])

  // Format data for the bar chart
  const chartData = Object.entries(sectionScores).map(([sectionId, data]) => ({
    section: `Section ${sectionId}`,
    sectionId: Number(sectionId),
    sectionName: sectionTitles[Number(sectionId)],
    percentage: Math.round(data.percentage),
    correct: data.correct,
    total: data.total,
  }))

  // Animation function
  const animate = () => {
    if (animationProgress < 1) {
      setAnimationProgress((prev) => Math.min(prev + 0.04, 1))
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

  // Update the drawBarChart function to improve scaling and positioning
  const drawBarChart = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Get the actual container dimensions
    const containerRect = canvas.parentElement?.getBoundingClientRect()
    const containerWidth = containerRect?.width || 400
    const containerHeight = (containerRect?.height || 300) - 50 // Subtract space for the legend at bottom

    // Set canvas dimensions with high-DPI support
    const dpr = window.devicePixelRatio || 1
    canvas.width = containerWidth * dpr
    canvas.height = containerHeight * dpr

    // Scale canvas back down with CSS
    canvas.style.width = `${containerWidth}px`
    canvas.style.height = `${containerHeight}px`

    // Scale all drawing operations
    ctx.scale(dpr, dpr)

    // Optimize padding for better chart display
    const leftPadding = Math.max(50, containerWidth * 0.1) // Ensure enough space for labels
    const rightPadding = Math.max(20, containerWidth * 0.05)
    const topPadding = 30
    const bottomPadding = 50

    // Chart dimensions
    const chartWidth = containerWidth - leftPadding - rightPadding
    const chartHeight = containerHeight - topPadding - bottomPadding

    // Calculate optimal bar width based on available space
    const barCount = chartData.length
    const maxBarWidth = Math.min(60, chartWidth / (barCount * 2)) // Cap maximum width
    const barWidth = Math.max(20, maxBarWidth) // Ensure minimum width
    const barSpacing = (chartWidth - barWidth * barCount) / (barCount + 1)

    // Clear canvas
    ctx.clearRect(0, 0, containerWidth, containerHeight)

    // Draw axes
    ctx.strokeStyle = isDark ? "#475569" : "#94a3b8"
    ctx.lineWidth = 1

    // Y-axis
    ctx.beginPath()
    ctx.moveTo(leftPadding, topPadding)
    ctx.lineTo(leftPadding, containerHeight - bottomPadding)
    ctx.stroke()

    // X-axis
    ctx.beginPath()
    ctx.moveTo(leftPadding, containerHeight - bottomPadding)
    ctx.lineTo(containerWidth - rightPadding, containerHeight - bottomPadding)
    ctx.stroke()

    // Draw Y-axis labels with fade-in effect
    ctx.fillStyle = isDark ? `rgba(226, 232, 240, ${animationProgress})` : `rgba(30, 41, 59, ${animationProgress})`
    ctx.font = "12px Arial"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    for (let i = 0; i <= 100; i += 20) {
      const y = containerHeight - bottomPadding - (i / 100) * chartHeight
      ctx.fillText(`${i}%`, leftPadding - 5, y)

      // Draw horizontal grid line with fade-in
      ctx.beginPath()
      ctx.moveTo(leftPadding, y)
      ctx.lineTo(containerWidth - rightPadding, y)
      ctx.strokeStyle = isDark
        ? `rgba(71, 85, 105, ${0.3 * animationProgress})`
        : `rgba(148, 163, 184, ${0.3 * animationProgress})`
      ctx.stroke()
    }

    // Reset bar references
    barRefs.current = []

    // Draw bars and X-axis labels with animation
    chartData.forEach((item, index) => {
      // Calculate bar position with even spacing
      const x = leftPadding + barSpacing + index * (barWidth + barSpacing)
      const fullBarHeight = (item.percentage / 100) * chartHeight
      // Animate the bar height
      const barHeight = fullBarHeight * animationProgress
      const y = containerHeight - bottomPadding - barHeight

      // Store bar coordinates for hover detection
      barRefs.current.push({
        x,
        y,
        width: barWidth,
        height: barHeight,
      })

      // Draw bar with hover effect
      ctx.fillStyle =
        hoveredBar === index
          ? isDark
            ? "#93c5fd"
            : "#2563eb" // Brighter color when hovered
          : isDark
            ? "#60a5fa"
            : "#3b82f6"

      // Add rounded top corners to bars
      const radius = 4
      ctx.beginPath()
      ctx.moveTo(x, y + radius)
      ctx.lineTo(x, y + barHeight - radius)
      ctx.quadraticCurveTo(x, y + barHeight, x + radius, y + barHeight)
      ctx.lineTo(x + barWidth - radius, y + barHeight)
      ctx.quadraticCurveTo(x + barWidth, y + barHeight, x + barWidth, y + barHeight - radius)
      ctx.lineTo(x + barWidth, y + radius)
      ctx.quadraticCurveTo(x + barWidth, y, x + barWidth - radius, y)
      ctx.lineTo(x + radius, y)
      ctx.quadraticCurveTo(x, y, x, y + radius)
      ctx.closePath()
      ctx.fill()

      // Draw X-axis label with fade-in - ensure it fits
      ctx.fillStyle = isDark ? `rgba(226, 232, 240, ${animationProgress})` : `rgba(30, 41, 59, ${animationProgress})`
      ctx.textAlign = "center"
      ctx.textBaseline = "top"
      ctx.font = "12px Arial"

      // Position labels centered under each bar
      ctx.save()
      ctx.translate(x + barWidth / 2, containerHeight - bottomPadding + 5)
      ctx.fillText(item.section, 0, 0)
      ctx.restore()

      // Draw percentage on top of bar with fade-in
      if (animationProgress > 0.7) {
        const fadeProgress = (animationProgress - 0.7) / 0.3 // Normalize to 0-1 for the last 30% of animation
        ctx.fillStyle = isDark ? `rgba(226, 232, 240, ${fadeProgress})` : `rgba(30, 41, 59, ${fadeProgress})`
        ctx.textAlign = "center"
        ctx.textBaseline = "bottom"
        ctx.fillText(`${item.percentage}%`, x + barWidth / 2, y - 5)
      }
    })

    // Add title with fade-in
    ctx.fillStyle = isDark ? `rgba(226, 232, 240, ${animationProgress})` : `rgba(30, 41, 59, ${animationProgress})`
    ctx.textAlign = "center"
    ctx.textBaseline = "top"
    ctx.font = "14px Arial"
    ctx.fillText("Section Performance", containerWidth / 2, 10)

    // Position tooltip if a bar is hovered
    if (hoveredBar !== null && mousePosition && tooltipRef.current) {
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

    // Check if mouse is over any bar
    let hoveredIndex = null
    for (let i = 0; i < barRefs.current.length; i++) {
      const bar = barRefs.current[i]
      if (x >= bar.x && x <= bar.x + bar.width && y >= bar.y && y <= bar.y + bar.height) {
        hoveredIndex = i
        break
      }
    }

    setHoveredBar(hoveredIndex)
  }

  const handleMouseLeave = () => {
    setHoveredBar(null)
  }

  // Use useEffect to ensure the component only renders on the client
  useEffect(() => {
    setMounted(true)

    if (mounted) {
      drawBarChart()

      // Redraw on window resize
      const handleResize = () => {
        drawBarChart()
      }

      window.addEventListener("resize", handleResize)
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }
  }, [mounted, isDark, chartData, animationProgress, hoveredBar, mousePosition])

  if (!mounted) {
    return <div className="w-full h-[300px] flex items-center justify-center">Loading chart...</div>
  }

  // Update the return JSX to improve the container structure
  return (
    <div className="w-full h-full flex flex-col relative" style={{ height: "350px" }}>
      <div className="flex-grow relative">
        <canvas
          ref={canvasRef}
          className="w-full h-full cursor-pointer absolute inset-0"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        ></canvas>
      </div>

      {/* Tooltip */}
      <div
        ref={tooltipRef}
        className="absolute hidden bg-white dark:bg-slate-800 p-2 rounded shadow-lg border border-gray-200 dark:border-slate-700 z-10 pointer-events-none"
        style={{ minWidth: "150px" }}
      >
        {hoveredBar !== null && chartData[hoveredBar] && (
          <>
            <div className="font-medium text-black dark:text-white">{chartData[hoveredBar].sectionName}</div>
            <div className="text-sm font-medium text-black dark:text-white">
              Score: {chartData[hoveredBar].percentage}%
            </div>
            <div className="text-xs text-gray-600 dark:text-gray-300">
              {chartData[hoveredBar].correct} of {chartData[hoveredBar].total} correct
            </div>
          </>
        )}
      </div>

      {/* Fallback text display - with responsive grid */}
      {chartData.length > 0 && (
        <div className="h-[50px] w-full bg-white dark:bg-slate-800 p-2 border-t border-gray-200 dark:border-slate-700 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 text-xs">
            {chartData.map((item, index) => (
              <div key={index} className="flex items-center">
                <div
                  className="w-3 h-3 rounded-full mr-1 flex-shrink-0"
                  style={{ backgroundColor: isDark ? "#60a5fa" : "#3b82f6" }}
                ></div>
                <span className="text-black dark:text-white truncate">
                  {item.section}: {item.percentage}% ({item.correct}/{item.total})
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

