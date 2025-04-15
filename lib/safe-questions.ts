import { getAllSectionQuestions } from "./questions"
import type { Question } from "@/lib/exam-data"
import { section2Passages } from "./exam-data"
import { extractQuestionsFromPassages } from "./questions"

// A safer wrapper around getAllSectionQuestions
export function getSafeSectionQuestions(sectionId: number): Question[] {
  try {
    console.log(`Getting safe questions for section ${sectionId}...`)

    // Get questions from the original function
    const allQuestions = getAllSectionQuestions()
    console.log(`getAllSectionQuestions returned:`, Object.keys(allQuestions))

    // Check if the section exists and has questions
    if (!allQuestions || !allQuestions[sectionId] || !Array.isArray(allQuestions[sectionId])) {
      console.error(`No valid questions found for section ${sectionId}`)

      // For section 2, let's try to directly extract questions from section2Passages
      if (sectionId === 2 && section2Passages && section2Passages.length > 0) {
        console.log(
          `Attempting to directly extract questions from section2Passages (${section2Passages.length} passages)`,
        )
        const extractedQuestions = extractQuestionsFromPassages(section2Passages)
        if (extractedQuestions && extractedQuestions.length > 0) {
          console.log(`Successfully extracted ${extractedQuestions.length} questions from section2Passages`)
          return extractedQuestions
        }
      }

      return createFallbackQuestions(sectionId)
    }

    // Filter out any invalid questions
    const validQuestions = allQuestions[sectionId].filter(
      (q) =>
        q &&
        typeof q === "object" &&
        "id" in q &&
        q.id &&
        "question" in q &&
        q.question &&
        "options" in q &&
        Array.isArray(q.options) &&
        q.options.length > 0,
    )

    if (validQuestions.length === 0) {
      console.error(`No valid questions found after filtering for section ${sectionId}`)
      return createFallbackQuestions(sectionId)
    }

    console.log(`Found ${validQuestions.length} valid questions for section ${sectionId}`)
    return validQuestions
  } catch (error) {
    console.error(`Error getting questions for section ${sectionId}:`, error)
    return createFallbackQuestions(sectionId)
  }
}

// Function to create fallback questions
function createFallbackQuestions(sectionId: number): Question[] {
  const targetCount = sectionId === 2 ? 53 : 59
  const fallbackQuestions: Question[] = []

  for (let i = 0; i < targetCount; i++) {
    fallbackQuestions.push({
      id: `section${sectionId}-fallback-${i}`,
      type: "discrete",
      question: `Fallback question ${i + 1} for section ${sectionId}?`,
      options: ["Option A", "Option B", "Option C", "Option D"],
      correctAnswer: "Option A",
      topic: "general",
    })
  }

  console.log(`Created ${fallbackQuestions.length} fallback questions for section ${sectionId}`)
  return fallbackQuestions
}

// A function to safely get a single question
export function getSafeQuestion(sectionId: number, questionIndex: number): Question | null {
  try {
    const questions = getSafeSectionQuestions(sectionId)

    if (questions.length === 0) {
      return null
    }

    // Ensure the index is within bounds
    const safeIndex = Math.min(Math.max(0, questionIndex), questions.length - 1)
    return questions[safeIndex] || null
  } catch (error) {
    console.error(`Error getting question at index ${questionIndex}:`, error)
    return null
  }
}

