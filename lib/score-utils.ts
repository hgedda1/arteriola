// Function to convert raw score percentage to MCAT score (472-528 scale)
export function calculateMCATScore(percentage: number): number {
  // MCAT scores range from 472 to 528
  // Convert percentage (0-100) to MCAT scale
  const minScore = 472
  const maxScore = 528
  const range = maxScore - minScore

  // Calculate score based on percentage
  const score = Math.round(minScore + (percentage / 100) * range)

  // Ensure score is within valid range
  return Math.max(minScore, Math.min(maxScore, score))
}

// Function to get percentile rank from MCAT score
export function getPercentileRank(score: number): number {
  const scorePercentileMap: Record<number, number> = {
    528: 100,
    527: 100,
    526: 100,
    525: 100,
    524: 100,
    523: 99,
    522: 99,
    521: 98,
    520: 97,
    519: 96,
    518: 95,
    517: 94,
    516: 92,
    515: 90,
    514: 88,
    513: 86,
    512: 83,
    511: 81,
    510: 78,
    509: 75,
    508: 72,
    507: 69,
    506: 66,
    505: 62,
    504: 59,
    503: 56,
    502: 52,
    501: 49,
    500: 46,
    499: 43,
    498: 40, // Interpolated
    497: 36,
    496: 33,
    495: 31,
    494: 28,
    493: 25,
    492: 23,
    491: 20,
    490: 18,
    489: 16,
    488: 14,
    487: 12,
    486: 11,
    485: 9,
    484: 8,
    483: 6,
    482: 5,
    481: 4,
    480: 3,
    479: 3,
    478: 2,
    477: 1,
    476: 1,
    475: 1,
    474: 0.5,
    473: 0.5,
    472: 0.5, // <1 represented as 0.5
  }

  return scorePercentileMap[score] || 0
}

// Map topics to their respective sections
export const topicToSectionMap: Record<string, number> = {
  // Section 1: Biological and Biochemical Foundations
  biology: 1,
  biochemistry: 1,
  organicChemistry: 1,
  generalChemistry: 1,

  // Section 2: Chemical and Physical Foundations
  physics: 2,
  // organicChemistry and biochemistry are also in section 2

  // Section 3: Psychological, Social, and Biological Foundations
  psychology: 3,
  sociology: 3,
  // biology is also in section 3

  // Section 4: Critical Analysis and Reasoning Skills
  criticalThinking: 4,
  ethics: 4,
  scientificHistory: 4,
}

// Section titles
export const sectionTitles: Record<number, string> = {
  1: "Biological and Biochemical Foundations of Living Systems",
  2: "Chemical and Physical Foundations of Biological Systems",
  3: "Psychological, Social, and Biological Foundations of Behavior",
  4: "Critical Analysis and Reasoning Skills",
}

// Function to analyze strengths and weaknesses by topic
export function analyzeTopicPerformance(
  answers: Record<number, Record<string, string>>,
  questions: Record<number, any[]>,
): {
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>
  strengths: string[]
  weaknesses: string[]
  sectionScores: Record<number, { correct: number; total: number; percentage: number }>
} {
  const topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }> = {}
  const sectionScores: Record<number, { correct: number; total: number; percentage: number }> = {
    1: { correct: 0, total: 0, percentage: 0 },
    2: { correct: 0, total: 0, percentage: 0 },
    3: { correct: 0, total: 0, percentage: 0 },
    4: { correct: 0, total: 0, percentage: 0 },
  }

  // Process each section
  Object.keys(questions).forEach((sectionKey) => {
    const sectionId = Number(sectionKey)
    const sectionQuestions = questions[sectionId]
    const sectionAnswers = answers[sectionId] || {}

    // Process each question in the section
    sectionQuestions.forEach((question) => {
      const { id, topic, correctAnswer } = question

      // Initialize topic if not exists
      if (!topicScores[topic]) {
        topicScores[topic] = {
          correct: 0,
          total: 0,
          percentage: 0,
          section: topicToSectionMap[topic] || sectionId, // Use the map or default to current section
        }
      }

      // Increment total for this topic
      topicScores[topic].total++
      sectionScores[sectionId].total++

      // Check if answer is correct
      if (sectionAnswers[id] === correctAnswer) {
        topicScores[topic].correct++
        sectionScores[sectionId].correct++
      }
    })
  })

  // Calculate percentages
  Object.keys(topicScores).forEach((topic) => {
    const { correct, total } = topicScores[topic]
    topicScores[topic].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(sectionScores).forEach((sectionId) => {
    const { correct, total } = sectionScores[Number(sectionId)]
    sectionScores[Number(sectionId)].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  // Identify strengths and weaknesses
  const sortedTopics = Object.entries(topicScores).sort((a, b) => b[1].percentage - a[1].percentage)

  // Top 3 topics are strengths
  const strengths = sortedTopics
    .slice(0, 3)
    .filter(([_, data]) => data.percentage >= 70) // Only include if ≥70%
    .map(([topic]) => topic)

  // Bottom 3 topics are weaknesses
  const weaknesses = sortedTopics
    .slice(-3)
    .filter(([_, data]) => data.percentage < 70) // Only include if <70%
    .map(([topic]) => topic)

  return { topicScores, strengths, weaknesses, sectionScores }
}

// Function to get study recommendations based on weaknesses
export function getStudyRecommendations(
  weaknesses: string[],
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>,
): Record<number, Record<string, string[]>> {
  // Organize recommendations by section
  const recommendations: Record<number, Record<string, string[]>> = {
    1: {},
    2: {},
    3: {},
    4: {},
  }

  // Topic-specific recommendations
  const topicRecommendations: Record<string, string[]> = {
    biology: [
      "Review cell structure and function",
      "Focus on organ systems and their integration",
      "Study genetics and molecular biology concepts",
      "Practice questions on biological processes and homeostasis",
    ],
    biochemistry: [
      "Review amino acid structures and properties",
      "Study enzyme kinetics and inhibition",
      "Focus on metabolic pathways (glycolysis, Krebs cycle, etc.)",
      "Practice questions on protein structure and function",
    ],
    organicChemistry: [
      "Review functional groups and their reactions",
      "Study reaction mechanisms in detail",
      "Practice drawing and identifying isomers",
      "Focus on acid-base chemistry and carbonyl reactions",
    ],
    generalChemistry: [
      "Review thermodynamics principles",
      "Study acid-base equilibria and buffers",
      "Practice problems on gas laws and solutions",
      "Focus on electrochemistry and redox reactions",
    ],
    physics: [
      "Review mechanics and force concepts",
      "Study circuits and electromagnetism",
      "Practice problems on fluids and pressure",
      "Focus on optics and waves",
    ],
    psychology: [
      "Review major psychological theories",
      "Study developmental psychology across the lifespan",
      "Focus on cognitive processes and biases",
      "Practice questions on social psychology concepts",
    ],
    sociology: [
      "Review social structures and stratification",
      "Study social institutions and their functions",
      "Focus on demographic factors and health disparities",
      "Practice applying sociological theories to scenarios",
    ],
    criticalThinking: [
      "Practice identifying main ideas in complex passages",
      "Study how to evaluate arguments and evidence",
      "Focus on drawing inferences from text",
      "Review strategies for analyzing rhetorical techniques",
    ],
    ethics: [
      "Review major ethical frameworks",
      "Study medical ethics principles and applications",
      "Practice analyzing ethical dilemmas",
      "Focus on understanding different perspectives on ethical issues",
    ],
    scientificHistory: [
      "Review major scientific discoveries and their impact",
      "Study the scientific method and experimental design",
      "Focus on how scientific knowledge evolves over time",
      "Practice interpreting scientific literature",
    ],
  }

  // Add section-specific recommendations for each topic
  const sectionSpecificRecommendations: Record<number, Record<string, string[]>> = {
    1: {
      // Biological and Biochemical Foundations
      biology: [
        "Focus on cellular and molecular biology concepts",
        "Review the structure and function of major organ systems",
        "Study biological regulation and homeostasis",
      ],
      biochemistry: [
        "Master enzyme kinetics and inhibition mechanisms",
        "Review the major metabolic pathways and their regulation",
        "Study protein structure and function in detail",
      ],
      organicChemistry: [
        "Focus on reactions relevant to biological systems",
        "Review stereochemistry and its biological significance",
        "Study the chemistry of carbonyl compounds",
      ],
      generalChemistry: [
        "Review acid-base chemistry and buffers in biological systems",
        "Study thermodynamics as applied to biochemical reactions",
        "Focus on solution chemistry and equilibria",
      ],
    },
    2: {
      // Chemical and Physical Foundations
      generalChemistry: [
        "Master gas laws and their applications",
        "Review electrochemistry and redox reactions",
        "Study chemical kinetics and reaction rates",
      ],
      physics: [
        "Focus on mechanics, especially forces and motion",
        "Review electricity and circuits thoroughly",
        "Study fluid dynamics and pressure concepts",
      ],
      organicChemistry: [
        "Focus on reaction mechanisms and energetics",
        "Review spectroscopy and structural determination",
        "Study separation techniques and their principles",
      ],
      biochemistry: [
        "Review bioenergetics and ATP synthesis",
        "Study membrane biochemistry and transport",
        "Focus on biochemical laboratory techniques",
      ],
    },
    3: {
      // Psychological, Social, and Biological Foundations
      psychology: [
        "Master theories of learning and memory",
        "Review developmental psychology across the lifespan",
        "Study psychological disorders and their biological basis",
      ],
      sociology: [
        "Focus on social determinants of health",
        "Review social institutions and their impact on behavior",
        "Study demographic factors and health disparities",
      ],
      biology: [
        "Review the nervous system and neurotransmitters",
        "Study the endocrine system and hormonal regulation",
        "Focus on the biological basis of behavior",
      ],
    },
    4: {
      // Critical Analysis and Reasoning Skills
      criticalThinking: [
        "Practice identifying main ideas and supporting details",
        "Review strategies for analyzing complex arguments",
        "Study how to evaluate evidence and reasoning",
      ],
      ethics: [
        "Focus on analyzing ethical dilemmas in healthcare",
        "Review different ethical frameworks and their applications",
        "Study case studies in medical ethics",
      ],
      scientificHistory: [
        "Review how scientific knowledge evolves over time",
        "Study the history of major medical discoveries",
        "Focus on understanding research methodologies",
      ],
    },
  }

  // Add recommendations for each weakness
  weaknesses.forEach((topic) => {
    // Get the section for this topic
    const section = topicScores[topic]?.section || topicToSectionMap[topic] || 4

    // Initialize the topic in the section if needed
    if (!recommendations[section][topic]) {
      recommendations[section][topic] = []
    }

    // Add general recommendations for this topic
    if (topicRecommendations[topic]) {
      recommendations[section][topic].push(...topicRecommendations[topic])
    }

    // Add section-specific recommendations if available
    if (sectionSpecificRecommendations[section]?.[topic]) {
      recommendations[section][topic].push(...sectionSpecificRecommendations[section][topic])
    }
  })

  return recommendations
}

// Function to get motivational messages
export function getMotivationalMessage(score: number): string {
  if (score >= 515) {
    return "Outstanding work! Your score is competitive for top medical schools. Keep up the excellent preparation!"
  } else if (score >= 508) {
    return "Great job! Your score is competitive for many medical schools. Continue refining your knowledge in your weaker areas."
  } else if (score >= 500) {
    return "Good effort! Your score is approaching the average for medical school matriculants. Focus on your identified areas for improvement."
  } else if (score >= 490) {
    return "You're making progress! With targeted studying in your weaker areas, you can significantly improve your score."
  } else {
    return "This is a great baseline! Everyone starts somewhere, and with dedicated study using the recommendations provided, you can make substantial improvements."
  }
}

// Function to format topic names for display
export function formatTopicName(topic: string): string {
  switch (topic) {
    case "biology":
      return "Biology"
    case "biochemistry":
      return "Biochemistry"
    case "organicChemistry":
      return "Organic Chemistry"
    case "generalChemistry":
      return "General Chemistry"
    case "physics":
      return "Physics"
    case "psychology":
      return "Psychology"
    case "sociology":
      return "Sociology"
    case "criticalThinking":
      return "Critical Analysis & Reasoning"
    case "ethics":
      return "Ethics"
    case "scientificHistory":
      return "Scientific History"
    default:
      return topic.charAt(0).toUpperCase() + topic.slice(1)
  }
}

