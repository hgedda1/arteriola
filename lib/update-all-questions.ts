import { updateQuestionMetadata } from "./update-question-metadata"

/**
 * This utility function updates all questions in localStorage with proper metadata
 * It can be called from the browser console or integrated into the app
 */
export function updateAllQuestionsInLocalStorage(): void {
  console.log("Starting update of all questions in localStorage...")

  // Process each section
  for (let sectionId = 1; sectionId <= 4; sectionId++) {
    try {
      // Get questions from localStorage
      const storedQuestions = localStorage.getItem(`section${sectionId}-questions`)
      if (!storedQuestions) {
        console.log(`No questions found for section ${sectionId}`)
        continue
      }

      // Parse questions
      const questions = JSON.parse(storedQuestions)
      if (!Array.isArray(questions)) {
        console.log(`Invalid questions format for section ${sectionId}`)
        continue
      }

      console.log(`Processing ${questions.length} questions for section ${sectionId}...`)

      // Update each question with metadata
      const updatedQuestions = questions.map((question) => updateQuestionMetadata(question))

      // Save back to localStorage
      localStorage.setItem(`section${sectionId}-questions`, JSON.stringify(updatedQuestions))

      console.log(`Successfully updated ${updatedQuestions.length} questions for section ${sectionId}`)

      // Log metadata statistics
      const stats = {
        withFoundationalConcept: updatedQuestions.filter((q) => q.foundationalConcept).length,
        withContentCategory: updatedQuestions.filter((q) => q.contentCategory).length,
        withDisciplines: updatedQuestions.filter((q) => q.disciplines && q.disciplines.length > 0).length,
        withSubtopics: updatedQuestions.filter((q) => q.subtopics && q.subtopics.length > 0).length,
        withDifficulty: updatedQuestions.filter((q) => q.difficulty).length,
        withSkillsTested: updatedQuestions.filter((q) => q.skillsTested && q.skillsTested.length > 0).length,
      }

      console.log(`Metadata statistics for section ${sectionId}:`, stats)
    } catch (error) {
      console.error(`Error updating questions for section ${sectionId}:`, error)
    }
  }

  console.log("Completed update of all questions in localStorage")
}

// Add a function to run the update when the app loads
export function setupMetadataUpdate(): void {
  // Check if we've already run the update
  const metadataUpdateComplete = localStorage.getItem("metadataUpdateComplete")

  if (!metadataUpdateComplete) {
    console.log("First-time metadata update running...")
    updateAllQuestionsInLocalStorage()
    localStorage.setItem("metadataUpdateComplete", "true")
    console.log("Metadata update complete and flagged as done")
  }
}

