"use client"

import { formatTopicName, sectionTitles } from "@/lib/score-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface StudyRecommendationsProps {
  recommendations: Record<number, Record<string, string[]>>
}

export function StudyRecommendations({ recommendations }: StudyRecommendationsProps) {
  // Check if there are any recommendations
  const hasRecommendations = Object.values(recommendations).some((sectionRecs) => Object.keys(sectionRecs).length > 0)

  if (!hasRecommendations) {
    return (
      <div className="space-y-4">
        <h3 className="text-lg font-medium dark:text-white">Study Recommendations</h3>
        <p className="text-green-600 dark:text-green-400 font-medium">
          Great job! You're performing well across all topics. Continue with your current study approach.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-medium text-black dark:text-white">Section-Specific Study Recommendations</h3>

      <Tabs defaultValue="1" className="w-full">
        <TabsList className="grid grid-cols-4 dark:bg-slate-700">
          <TabsTrigger value="1" className="dark:data-[state=active]:bg-slate-900 text-black dark:text-white">
            Section 1
          </TabsTrigger>
          <TabsTrigger value="2" className="dark:data-[state=active]:bg-slate-900 text-black dark:text-white">
            Section 2
          </TabsTrigger>
          <TabsTrigger value="3" className="dark:data-[state=active]:bg-slate-900 text-black dark:text-white">
            Section 3
          </TabsTrigger>
          <TabsTrigger value="4" className="dark:data-[state=active]:bg-slate-900 text-black dark:text-white">
            Section 4
          </TabsTrigger>
        </TabsList>

        {[1, 2, 3, 4].map((sectionId) => (
          <TabsContent key={sectionId} value={sectionId.toString()} className="pt-4">
            <div className="mb-4">
              <h4 className="font-medium text-blue-800 dark:text-blue-400">{sectionTitles[sectionId]}</h4>
              <p className="text-sm text-gray-600 dark:text-slate-300 mt-1">
                Focus on these topics to improve your performance in this section.
              </p>
            </div>

            {Object.keys(recommendations[sectionId]).length === 0 ? (
              <p className="text-green-600 dark:text-green-400">
                You're performing well in this section! Continue with your current study approach.
              </p>
            ) : (
              <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                {Object.entries(recommendations[sectionId]).map(([topic, tips]) => (
                  <Card key={topic} className="dark:bg-slate-700 dark:border-slate-600">
                    <CardHeader className="pb-2">
                      <CardTitle className="text-base text-black dark:text-white">{formatTopicName(topic)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="list-disc list-inside text-sm space-y-1 text-black dark:text-slate-300">
                        {tips.map((tip, index) => (
                          <li key={index}>{tip}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

