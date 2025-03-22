"use client"

import type * as React from "react"
import {
  Bar,
  BarChart as RechartsBarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart as RechartsLineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

// Chart
interface ChartProps {
  data: any[]
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

function Chart({ data, children, className, ...props }: ChartProps) {
  return (
    <div className={className} {...props}>
      <ResponsiveContainer width="100%" height="100%">
        {/* @ts-ignore - Recharts types are not fully compatible with React 18 */}
        {children}
      </ResponsiveContainer>
    </div>
  )
}

// Bar Chart
interface ChartBarProps {
  dataKey: string
  radius?: [number, number, number, number]
  fill?: string | ((entry: any) => string)
}

function ChartBar({ dataKey, radius = [4, 4, 0, 0], fill = "#3b82f6" }: ChartBarProps) {
  return (
    <RechartsBarChart>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <Bar
        dataKey={dataKey}
        radius={radius}
        fill={typeof fill === "function" ? undefined : fill}
        fillOpacity={0.9}
        isAnimationActive={true}
        animationDuration={500}
        barSize={40}
      />
    </RechartsBarChart>
  )
}

// Line Chart
interface ChartLineProps {
  dataKey: string
  stroke?: string
  strokeWidth?: number
}

function ChartLine({ dataKey, stroke = "#3b82f6", strokeWidth = 2 }: ChartLineProps) {
  return (
    <RechartsLineChart>
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <Line
        type="monotone"
        dataKey={dataKey}
        stroke={stroke}
        strokeWidth={strokeWidth}
        dot={{ r: 4 }}
        activeDot={{ r: 6 }}
        isAnimationActive={true}
        animationDuration={500}
      />
    </RechartsLineChart>
  )
}

// X Axis
interface ChartXAxisProps {
  dataKey: string
  tickLine?: boolean
  axisLine?: boolean
}

function ChartXAxis({ dataKey, tickLine = true, axisLine = true }: ChartXAxisProps) {
  return <XAxis dataKey={dataKey} tickLine={tickLine} axisLine={axisLine} />
}

// Y Axis
interface ChartYAxisProps {
  tickLine?: boolean
  axisLine?: boolean
  domain?: number[]
  tickFormatter?: (value: number) => string
}

function ChartYAxis({ tickLine = true, axisLine = true, domain, tickFormatter }: ChartYAxisProps) {
  return <YAxis tickLine={tickLine} axisLine={axisLine} domain={domain} tickFormatter={tickFormatter} />
}

// Tooltip
interface ChartTooltipProps {
  content?: React.ComponentType<any>
}

function ChartTooltip({ content }: ChartTooltipProps) {
  // @ts-ignore - Recharts types are not fully compatible with React 18
  return <Tooltip content={content} />
}

// Legend
type ChartLegendProps = {}

function ChartLegend({}: ChartLegendProps) {
  return <Legend />
}

// Radar Chart
interface ChartRadarProps {
  name: string
  dataKey: string
  stroke: string
  fill: string
  fillOpacity: number
}

function ChartRadar({ name, dataKey, stroke, fill, fillOpacity }: ChartRadarProps) {
  return (
    <RechartsRadarChart>
      <Radar
        name={name}
        dataKey={dataKey}
        stroke={stroke}
        fill={fill}
        fillOpacity={fillOpacity}
        isAnimationActive={true}
        animationDuration={500}
      />
    </RechartsRadarChart>
  )
}

// Polar Grid
type ChartPolarGridProps = {}

function ChartPolarGrid({}: ChartPolarGridProps) {
  return <PolarGrid />
}

// Polar Angle Axis
interface ChartPolarAngleAxisProps {
  dataKey: string
}

function ChartPolarAngleAxis({ dataKey }: ChartPolarAngleAxisProps) {
  return <PolarAngleAxis dataKey={dataKey} />
}

// Polar Radius Axis
interface ChartPolarRadiusAxisProps {
  angle: number
  domain: number[]
}

function ChartPolarRadiusAxis({ angle, domain }: ChartPolarRadiusAxisProps) {
  return <PolarRadiusAxis angle={angle} domain={domain} />
}

export {
  Chart,
  ChartBar,
  ChartLine,
  ChartXAxis,
  ChartYAxis,
  ChartTooltip,
  ChartLegend,
  ChartRadar,
  ChartPolarGrid,
  ChartPolarAngleAxis,
  ChartPolarRadiusAxis,
}

