"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface MCATScoreTableProps {
  userScore: number
}

export function MCATScoreTable({ userScore }: MCATScoreTableProps) {
  const scoreData = [
    { score: "524–528", percentile: 100 },
    { score: "522–523", percentile: 99 },
    { score: "521", percentile: 98 },
    { score: "520", percentile: 97 },
    { score: "519", percentile: 96 },
    { score: "518", percentile: 95 },
    { score: "517", percentile: 94 },
    { score: "516", percentile: 92 },
    { score: "515", percentile: 90 },
    { score: "514", percentile: 88 },
    { score: "513", percentile: 86 },
    { score: "512", percentile: 83 },
    { score: "511", percentile: 81 },
    { score: "510", percentile: 78 },
    { score: "509", percentile: 75 },
    { score: "508", percentile: 72 },
    { score: "507", percentile: 69 },
    { score: "506", percentile: 66 },
    { score: "505", percentile: 62 },
    { score: "504", percentile: 59 },
    { score: "503", percentile: 56 },
    { score: "502", percentile: 52 },
    { score: "501", percentile: 49 },
    { score: "500", percentile: 46 },
    { score: "499", percentile: 43 },
    { score: "497", percentile: 36 },
    { score: "496", percentile: 33 },
    { score: "495", percentile: 31 },
    { score: "494", percentile: 28 },
    { score: "493", percentile: 25 },
    { score: "492", percentile: 23 },
    { score: "491", percentile: 20 },
    { score: "490", percentile: 18 },
    { score: "489", percentile: 16 },
    { score: "488", percentile: 14 },
    { score: "487", percentile: 12 },
    { score: "486", percentile: 11 },
    { score: "485", percentile: 9 },
    { score: "484", percentile: 8 },
    { score: "483", percentile: 6 },
    { score: "482", percentile: 5 },
    { score: "481", percentile: 4 },
    { score: "480–479", percentile: 3 },
    { score: "478", percentile: 2 },
    { score: "477–475", percentile: 1 },
    { score: "474–472", percentile: 0.5 }, // <1 represented as 0.5
  ]

  // Find the range that includes the user's score
  const isInRange = (range: string, score: number): boolean => {
    if (range.includes("–")) {
      const [min, max] = range.split("–").map((n) => Number.parseInt(n))
      return score >= min && score <= max
    } else {
      return score === Number.parseInt(range)
    }
  }

  // Find the closest score range if exact match isn't found
  const findClosestScoreRange = (score: number): number => {
    // First check for exact matches
    const exactMatchIndex = scoreData.findIndex((row) => isInRange(row.score, score))
    if (exactMatchIndex !== -1) return exactMatchIndex

    // If no exact match, find the closest lower score
    for (let i = 0; i < scoreData.length; i++) {
      const currentRange = scoreData[i].score
      let currentMax: number

      if (currentRange.includes("–")) {
        const [_, max] = currentRange.split("–").map((n) => Number.parseInt(n))
        currentMax = max
      } else {
        currentMax = Number.parseInt(currentRange)
      }

      if (score > currentMax) {
        return Math.max(0, i - 1) // Return the previous index (higher score range)
      }
    }

    return scoreData.length - 1 // Return the lowest score range if nothing else matches
  }

  const userScoreIndex = findClosestScoreRange(userScore)

  return (
    <div className="border rounded-lg overflow-hidden dark:border-slate-700">
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="bg-blue-50 dark:bg-blue-900/30">
              <TableHead className="font-bold text-black dark:text-white">MCAT Total Score</TableHead>
              <TableHead className="font-bold text-black dark:text-white">MCAT Percentile Rank</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="max-h-[300px] overflow-y-auto">
            {scoreData.map((row, index) => (
              <TableRow
                key={index}
                className={
                  index === userScoreIndex
                    ? "bg-green-100 dark:bg-green-900/30 font-bold border-l-4 border-l-green-500 dark:border-l-green-400"
                    : index % 2 === 0
                      ? "bg-gray-50 dark:bg-slate-800"
                      : "dark:bg-slate-700"
                }
              >
                <TableCell className="text-black dark:text-white">
                  {index === userScoreIndex && (
                    <span className="inline-block w-4 h-4 bg-green-500 dark:bg-green-400 rounded-full mr-2"></span>
                  )}
                  {row.score}
                </TableCell>
                <TableCell className="text-black dark:text-white">
                  {row.percentile < 1 ? "<1" : row.percentile}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

