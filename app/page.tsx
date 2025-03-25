"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useState } from "react"
import { ThemeToggle } from "@/components/theme-toggle"
import Link from "next/link"
import { getBasePath } from "@/lib/client-utils"

export default function Home() {
  // Use client-side rendering to avoid hydration mismatch
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    // Return a minimal loading state that won't cause hydration issues
    return <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex items-center justify-center">Loading...</div>
  }

  const basePath = getBasePath()

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center p-4">
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-4xl dark:bg-slate-800">
        <CardHeader className="text-center border-b pb-6">
          <CardTitle className="text-3xl font-bold dark:text-white">MCAT Simulation Platform</CardTitle>
          <CardDescription className="text-lg mt-2 dark:text-slate-300">MCAT Exam Simulator</CardDescription>
          <div className="mt-2 text-sm text-muted-foreground dark:text-slate-400">
            <p>You can toggle between light and dark mode using the button in the top right corner.</p>
            <p className="font-medium mt-1">
              Note: Light mode is recommended for the most realistic exam simulation experience.
            </p>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2 dark:text-white">About This Exam</h2>
              <p className="text-gray-700 dark:text-slate-300">
                This exam consists of four sections designed to test your knowledge across various disciplines. Each
                section has a specific time limit and number of questions.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold dark:text-white">Exam Sections</h2>

              <div className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600">
                <h3 className="font-medium text-lg dark:text-white">
                  SECTION 1: Biological and Biochemical Foundations of Living Systems
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">59 Questions, 95 Minutes</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-slate-300">
                  <li>Biology (55%): Cells, organ systems, genetics, molecular biology</li>
                  <li>Biochemistry (25%): Proteins, enzymes, metabolism (Glycolysis, Krebs Cycle)</li>
                  <li>Organic Chemistry (15%): Functional groups, reactions</li>
                  <li>General Chemistry (5%): Acids/bases, stoichiometry</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600">
                <h3 className="font-medium text-lg dark:text-white">
                  SECTION 2: Chemical and Physical Foundations of Biological Systems
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">53 Questions, 90 Minutes</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-slate-300">
                  <li>General Chemistry (30%): Periodic trends, bonding, thermodynamics</li>
                  <li>Physics (25%): Forces, motion, fluids, electricity, sound</li>
                  <li>Organic Chemistry (15%): Reaction mechanisms</li>
                  <li>Biochemistry (25%): Amino acids, enzyme kinetics</li>
                  <li>Basic math skills (no calculator allowed)</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600">
                <h3 className="font-medium text-lg dark:text-white">
                  SECTION 3: Psychological, Social, and Biological Foundations of Behavior
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">59 Questions, 95 Minutes</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-slate-300">
                  <li>Psychology (65%): Cognition, learning, memory, behavior, emotion</li>
                  <li>Sociology (30%): Social structure, culture, inequality</li>
                  <li>Biology (5%): Brain structures, neurotransmitters</li>
                </ul>
              </div>

              <div className="border rounded-lg p-4 bg-white dark:bg-slate-700 dark:border-slate-600">
                <h3 className="font-medium text-lg dark:text-white">
                  SECTION 4: Critical Analysis and Reasoning Skills
                </h3>
                <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">59 Questions, 95 Minutes</p>
                <ul className="list-disc list-inside mt-2 text-sm text-gray-700 dark:text-slate-300">
                  <li>Comprehension of humanities and social sciences passages</li>
                </ul>
              </div>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-2 dark:text-white">Important Notes</h2>
              <ul className="list-disc list-inside text-gray-700 dark:text-slate-300">
                <li>Optional 10-minute breaks after Sections 1 and 3</li>
                <li>Optional 30-minute break after Section 2</li>
                <li>No calculator allowed</li>
                <li>Questions are randomly selected from our database</li>
                <li>Each attempt will present unique questions</li>
              </ul>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-6">
          <Link href={`${basePath}/register`}>
            <Button size="lg" className="px-8">
              Begin Exam
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </div>
  )
}

