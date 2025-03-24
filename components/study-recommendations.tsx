"use client"

import { formatTopicName, sectionTitles } from "@/lib/score-utils"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface StudyRecommendationsProps {
  recommendations: Record<number, Record<string, string[]>>
}

export function StudyRecommendations({ recommendations }: StudyRecommendationsProps) {
  // Check if there are any recommendations
  const hasRecommendations = Object.values(recommendations || {}).some(
    (sectionRecs) => Object.keys(sectionRecs).length > 0,
  )

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

  // Group recommendations by type (foundational concepts, content categories, topics)
  const groupRecommendations = (sectionRecs: Record<string, string[]>) => {
    const grouped: Record<string, Record<string, string[]>> = {
      "Foundational Concepts": {},
      "Content Categories": {},
      Topics: {},
    }

    Object.entries(sectionRecs).forEach(([key, recommendations]) => {
      if (key.startsWith("Foundational Concept")) {
        grouped["Foundational Concepts"][key] = recommendations
      } else if (key.startsWith("Content Category")) {
        grouped["Content Categories"][key] = recommendations
      } else {
        grouped["Topics"][key] = recommendations
      }
    })

    return grouped
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
                Focus on these areas to improve your performance in this section.
              </p>
            </div>

            {!recommendations[sectionId] || Object.keys(recommendations[sectionId]).length === 0 ? (
              <p className="text-green-600 dark:text-green-400">
                You're performing well in this section! Continue with your current study approach.
              </p>
            ) : (
              <div className="space-y-6">
                {/* Group recommendations by type */}
                {Object.entries(groupRecommendations(recommendations[sectionId])).map(
                  ([groupType, groupRecs]) =>
                    Object.keys(groupRecs).length > 0 && (
                      <div key={groupType} className="space-y-4">
                        <h5 className="font-medium text-black dark:text-white border-b pb-1">{groupType}</h5>
                        <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                          {Object.entries(groupRecs).map(([topic, tips]) => {
                            // Extract the concept number if it's a foundational concept
                            const conceptMatch = topic.match(/Foundational Concept (\d+)/)
                            const categoryMatch = topic.match(/Content Category (\w+)/)

                            return (
                              <Card key={topic} className="dark:bg-slate-700 dark:border-slate-600">
                                <CardHeader className="pb-2">
                                  <CardTitle className="text-base text-black dark:text-white flex items-center gap-2">
                                    {topic.startsWith("Foundational Concept") && conceptMatch && (
                                      <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-100 text-xs px-2 py-1 rounded">
                                        FC {conceptMatch[1]}
                                      </span>
                                    )}
                                    {topic.startsWith("Content Category") && categoryMatch && (
                                      <span className="inline-block bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-100 text-xs px-2 py-1 rounded">
                                        CC {categoryMatch[1]}
                                      </span>
                                    )}
                                    <span>
                                      {topic.startsWith("Foundational Concept") || topic.startsWith("Content Category")
                                        ? topic
                                        : formatTopicName(topic)}
                                    </span>
                                  </CardTitle>
                                </CardHeader>
                                <CardContent>
                                  <ul className="list-disc list-inside text-sm space-y-1 text-black dark:text-slate-300">
                                    {tips.map((tip, index) => (
                                      <li key={index}>{tip}</li>
                                    ))}
                                  </ul>
                                </CardContent>
                              </Card>
                            )
                          })}
                        </div>
                      </div>
                    ),
                )}
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

