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

// Update the analyzeTopicPerformance function to use the new metadata
export function analyzeTopicPerformance(
  answers: Record<number, Record<string, string>>,
  questions: Record<number, any[]>,
): {
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>
  foundationalConceptScores: Record<string, { correct: number; total: number; percentage: number }>
  contentCategoryScores: Record<string, { correct: number; total: number; percentage: number }>
  disciplineScores: Record<string, { correct: number; total: number; percentage: number }>
  strengths: string[]
  weaknesses: string[]
  sectionScores: Record<number, { correct: number; total: number; percentage: number }>
} {
  const topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }> = {}
  const foundationalConceptScores: Record<string, { correct: number; total: number; percentage: number }> = {}
  const contentCategoryScores: Record<string, { correct: number; total: number; percentage: number }> = {}
  const disciplineScores: Record<string, { correct: number; total: number; percentage: number }> = {}
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
      const { id, topic, correctAnswer, foundationalConcept, contentCategory, disciplines } = question

      // Initialize topic if not exists
      if (!topicScores[topic]) {
        topicScores[topic] = {
          correct: 0,
          total: 0,
          percentage: 0,
          section: topicToSectionMap[topic] || sectionId, // Use the map or default to current section
        }
      }

      // Initialize foundational concept if not exists and if it exists in the question
      if (foundationalConcept && !foundationalConceptScores[foundationalConcept]) {
        foundationalConceptScores[foundationalConcept] = {
          correct: 0,
          total: 0,
          percentage: 0,
        }
      }

      // Initialize content category if not exists and if it exists in the question
      if (contentCategory && !contentCategoryScores[contentCategory]) {
        contentCategoryScores[contentCategory] = {
          correct: 0,
          total: 0,
          percentage: 0,
        }
      }

      // Initialize disciplines if not exists and if they exist in the question
      if (disciplines && Array.isArray(disciplines)) {
        disciplines.forEach((discipline) => {
          if (!disciplineScores[discipline]) {
            disciplineScores[discipline] = {
              correct: 0,
              total: 0,
              percentage: 0,
            }
          }
        })
      }

      // Increment total for this topic
      topicScores[topic].total++
      sectionScores[sectionId].total++

      // Increment total for foundational concept if it exists
      if (foundationalConcept) {
        foundationalConceptScores[foundationalConcept].total++
      }

      // Increment total for content category if it exists
      if (contentCategory) {
        contentCategoryScores[contentCategory].total++
      }

      // Increment total for disciplines if they exist
      if (disciplines && Array.isArray(disciplines)) {
        disciplines.forEach((discipline) => {
          disciplineScores[discipline].total++
        })
      }

      // Check if answer is correct
      if (sectionAnswers[id] === correctAnswer) {
        topicScores[topic].correct++
        sectionScores[sectionId].correct++

        // Increment correct for foundational concept if it exists
        if (foundationalConcept) {
          foundationalConceptScores[foundationalConcept].correct++
        }

        // Increment correct for content category if it exists
        if (contentCategory) {
          contentCategoryScores[contentCategory].correct++
        }

        // Increment correct for disciplines if they exist
        if (disciplines && Array.isArray(disciplines)) {
          disciplines.forEach((discipline) => {
            disciplineScores[discipline].correct++
          })
        }
      }
    })
  })

  // Calculate percentages
  Object.keys(topicScores).forEach((topic) => {
    const { correct, total } = topicScores[topic]
    topicScores[topic].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(foundationalConceptScores).forEach((concept) => {
    const { correct, total } = foundationalConceptScores[concept]
    foundationalConceptScores[concept].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(contentCategoryScores).forEach((category) => {
    const { correct, total } = contentCategoryScores[category]
    contentCategoryScores[category].percentage = total > 0 ? (correct / total) * 100 : 0
  })

  Object.keys(disciplineScores).forEach((discipline) => {
    const { correct, total } = disciplineScores[discipline]
    disciplineScores[discipline].percentage = total > 0 ? (correct / total) * 100 : 0
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

  return {
    topicScores,
    foundationalConceptScores,
    contentCategoryScores,
    disciplineScores,
    strengths,
    weaknesses,
    sectionScores,
  }
}

// Mock data for topic recommendations
const topicRecommendations: Record<string, string[]> = {
  biology: [
    "Review cellular structures and functions.",
    "Study genetics and heredity principles.",
    "Focus on evolutionary biology concepts.",
  ],
  biochemistry: [
    "Master enzyme kinetics and mechanisms.",
    "Understand metabolic pathways and regulation.",
    "Study protein structure and function.",
  ],
  organicChemistry: [
    "Review functional groups and nomenclature.",
    "Practice reaction mechanisms and synthesis.",
    "Focus on stereochemistry and spectroscopy.",
  ],
  generalChemistry: [
    "Understand atomic structure and bonding.",
    "Study stoichiometry and chemical reactions.",
    "Focus on thermodynamics and equilibrium.",
  ],
  physics: [
    "Review mechanics and motion principles.",
    "Study electricity and magnetism.",
    "Focus on optics and wave phenomena.",
  ],
  psychology: [
    "Understand cognitive processes and memory.",
    "Study social psychology and behavior.",
    "Focus on developmental psychology stages.",
  ],
  sociology: [
    "Review social structures and institutions.",
    "Study cultural influences on behavior.",
    "Focus on demographic factors and health.",
  ],
  criticalThinking: [
    "Practice analyzing arguments and evidence.",
    "Develop logical reasoning skills.",
    "Focus on identifying biases and fallacies.",
  ],
  ethics: [
    "Understand ethical principles and theories.",
    "Study ethical dilemmas in healthcare.",
    "Focus on patient autonomy and informed consent.",
  ],
  scientificHistory: [
    "Review major scientific discoveries and figures.",
    "Study the evolution of scientific thought.",
    "Focus on the impact of science on society.",
  ],
}

// Mock data for section-specific recommendations
const sectionSpecificRecommendations: Record<number, Record<string, string[]>> = {
  1: {
    biology: ["Focus on molecular biology techniques."],
    biochemistry: ["Study enzyme regulation in metabolic pathways."],
  },
  2: {
    physics: ["Review fluid dynamics in biological systems."],
    organicChemistry: ["Study reactions relevant to biological molecules."],
  },
  3: {
    psychology: ["Focus on psychological disorders and treatments."],
    sociology: ["Study social determinants of health."],
  },
  4: {
    criticalThinking: ["Practice analyzing scientific articles."],
    ethics: ["Study ethical considerations in research."],
  },
}

// Update the getStudyRecommendations function to use foundational concepts and content categories
export function getStudyRecommendations(
  weaknesses: string[],
  topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>,
  foundationalConceptScores?: Record<string, { correct: number; total: number; percentage: number }>,
  contentCategoryScores?: Record<string, { correct: number; total: number; percentage: number }>,
): Record<number, Record<string, string[]>> {
  // Organize recommendations by section
  const recommendations: Record<number, Record<string, string[]>> = {
    1: {},
    2: {},
    3: {},
    4: {},
  }

  // Add recommendations based on weak foundational concepts
  if (foundationalConceptScores) {
    const weakFoundationalConcepts = Object.entries(foundationalConceptScores)
      .filter(([_, data]) => data.percentage < 70)
      .map(([concept]) => concept)
      .slice(0, 3) // Focus on top 3 weakest concepts

    weakFoundationalConcepts.forEach((concept) => {
      // Determine which section this concept belongs to
      let section = 1 // Default to section 1
      const conceptNum = Number.parseInt(concept)
      if (conceptNum >= 1 && conceptNum <= 3) section = 1
      else if (conceptNum >= 4 && conceptNum <= 5) section = 3
      else if (conceptNum >= 6 && conceptNum <= 10) section = 2

      // Add concept-specific recommendations
      if (!recommendations[section][`Foundational Concept ${concept}`]) {
        recommendations[section][`Foundational Concept ${concept}`] = []
      }

      // Add recommendations based on the foundational concept
      switch (concept) {
        case "1":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review structure and function of biomolecules",
            "Study protein structure and enzyme kinetics",
            "Focus on bioenergetics and metabolism",
          )
          break
        case "2":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review cell structure and function",
            "Study cellular processes and division",
            "Focus on prokaryotic and eukaryotic differences",
          )
          break
        case "3":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review organ systems and their integration",
            "Study homeostasis and feedback mechanisms",
            "Focus on endocrine and nervous system coordination",
          )
          break
        case "4":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review physics principles in biological systems",
            "Study fluid dynamics and circulation",
            "Focus on electrical circuits and neural transmission",
          )
          break
        case "5":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review chemical interactions in biological systems",
            "Study intermolecular forces and solutions",
            "Focus on thermodynamics and reaction kinetics",
          )
          break
        case "6":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review perception and cognition processes",
            "Study sensory systems and information processing",
            "Focus on emotional responses and regulation",
          )
          break
        case "7":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review factors influencing behavior",
            "Study learning theories and motivation",
            "Focus on behavior change mechanisms",
          )
          break
        case "8":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review self-identity development",
            "Study social cognition and attribution",
            "Focus on group dynamics and social interactions",
          )
          break
        case "9":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review social structures and institutions",
            "Study cultural influences on behavior",
            "Focus on demographic factors and health",
          )
          break
        case "10":
          recommendations[section][`Foundational Concept ${concept}`].push(
            "Review social inequality and stratification",
            "Study access to resources and healthcare",
            "Focus on social determinants of health",
          )
          break
      }
    })
  }

  // Add recommendations based on weak content categories
  if (contentCategoryScores) {
    const weakContentCategories = Object.entries(contentCategoryScores)
      .filter(([_, data]) => data.percentage < 70)
      .map(([category]) => category)
      .slice(0, 5) // Focus on top 5 weakest categories

    weakContentCategories.forEach((category) => {
      // Determine which section this category belongs to
      let section = 1 // Default to section 1
      const conceptNum = Number.parseInt(category.charAt(0))
      if (conceptNum >= 1 && conceptNum <= 3) section = 1
      else if (conceptNum >= 4 && conceptNum <= 5) section = 3
      else if (conceptNum >= 6 && conceptNum <= 10) section = 2

      // Add category-specific recommendations
      if (!recommendations[section][`Content Category ${category}`]) {
        recommendations[section][`Content Category ${category}`] = []
      }

      // Add specific recommendations based on content category
      // This would be expanded with specific recommendations for each category
      recommendations[section][`Content Category ${category}`].push(
        `Focus on mastering the content in category ${category}`,
        `Review practice questions specifically targeting ${category}`,
        `Create flashcards for key concepts in ${category}`,
      )
    })
  }

  // Add topic-specific recommendations (from the original function)
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
    case "Foundational Concept 1":
    case "Foundational Concept 2":
    case "Foundational Concept 3":
    case "Foundational Concept 4":
    case "Foundational Concept 5":
    case "Foundational Concept 6":
    case "Foundational Concept 7":
    case "Foundational Concept 8":
    case "Foundational Concept 9":
    case "Foundational Concept 10":
      return topic
    case "Content Category 1A":
    case "Content Category 1B":
    case "Content Category 1C":
    case "Content Category 1D":
    case "Content Category 2A":
    case "Content Category 2B":
    case "Content Category 2C":
    case "Content Category 3A":
    case "Content Category 3B":
    case "Content Category 4A":
    case "Content Category 4B":
    case "Content Category 4C":
    case "Content Category 4D":
    case "Content Category 4E":
    case "Content Category 5A":
    case "Content Category 5B":
    case "Content Category 5C":
    case "Content Category 5D":
    case "Content Category 5E":
    case "Content Category 6A":
    case "Content Category 6B":
    case "Content Category 6C":
    case "Content Category 7A":
    case "Content Category 7B":
    case "Content Category 7C":
    case "Content Category 8A":
    case "Content Category 8B":
    case "Content Category 8C":
    case "Content Category 9A":
    case "Content Category 9B":
    case "Content Category 10A":
    case "Content Category 10B":
      return topic
    case "General":
      return "General Recommendations"
    default:
      return topic.charAt(0).toUpperCase() + topic.slice(1)
  }
}

