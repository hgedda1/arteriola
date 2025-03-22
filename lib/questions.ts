import { shuffleArray } from "./utils"
import {
  section1Questions,
  section2Questions,
  section3Questions,
  section4Questions,
  section1Passages,
  section2Passages,
  section3Passages,
  section4Passages,
  sectionTopicWeightage,
  sectionQuestionTypeConfig, // Import the new configuration
  type Question,
  type Passage,
} from "./exam-data"

// Function to extract questions from passages
function extractQuestionsFromPassages(passages: Passage[]): Question[] {
  const questions: Question[] = []

  passages.forEach((passage) => {
    // Add all questions from this passage
    passage.questions.forEach((question, index) => {
      // Only include the passage text with the first question to avoid duplication
      if (index === 0) {
        questions.push({
          ...question,
          passage: passage.text,
          ...(passage.image && { image: passage.image }), // Include passage image with first question
        })
      } else {
        questions.push(question)
      }
    })
  })

  return questions
}

// Update the question generation function to handle passage-based questions and respect type percentages
function generateQuestionsWithWeightage(
  baseQuestions: Question[],
  basePassages: Passage[],
  sectionId: number,
  totalCount: number,
  topicWeightage: Record<string, number>,
): Question[] {
  // Get the discrete vs passage configuration for this section
  const typeConfig = sectionQuestionTypeConfig[sectionId as keyof typeof sectionQuestionTypeConfig] || {
    discrete: 0.5,
    passage: 0.5,
  }

  // Calculate how many questions of each type we need
  const discreteCount = Math.round(totalCount * typeConfig.discrete)
  const passageCount = totalCount - discreteCount

  // First, extract all questions from passages
  const passageQuestions = extractQuestionsFromPassages(basePassages)

  // Separate discrete questions
  const discreteBaseQuestions = baseQuestions.filter((q) => q.type === "discrete")

  // Categorize base questions by topic
  const discreteQuestionsByTopic: Record<string, Question[]> = {}
  const passageGroupsByTopic: Record<string, Record<string, Question[]>> = {}

  // Initialize empty arrays for each topic
  Object.keys(topicWeightage).forEach((topic) => {
    discreteQuestionsByTopic[topic] = []
    passageGroupsByTopic[topic] = {}
  })

  // Add discrete questions to their respective topics
  discreteBaseQuestions.forEach((question) => {
    if (question.topic && discreteQuestionsByTopic[question.topic]) {
      discreteQuestionsByTopic[question.topic].push(question)
    }
  })

  // Group passage questions by passageId and topic
  passageQuestions.forEach((question) => {
    if (question.topic && question.type === "passage" && question.passageId) {
      if (!passageGroupsByTopic[question.topic]) {
        passageGroupsByTopic[question.topic] = {}
      }

      if (!passageGroupsByTopic[question.topic][question.passageId]) {
        passageGroupsByTopic[question.topic][question.passageId] = []
      }

      passageGroupsByTopic[question.topic][question.passageId].push(question)
    }
  })

  // Calculate how many questions we need for each topic
  const topicCounts: Record<string, { discrete: number; passage: number }> = {}
  Object.entries(topicWeightage).forEach(([topic, weight]) => {
    topicCounts[topic] = {
      discrete: Math.round(discreteCount * weight),
      passage: Math.round(passageCount * weight),
    }
  })

  // Generate questions for each topic
  const result: Question[] = []

  // First, add passage groups to maintain their integrity
  Object.entries(passageGroupsByTopic).forEach(([topic, passageGroups]) => {
    const topicPassageCount = topicCounts[topic]?.passage || 0
    let remainingPassageCount = topicPassageCount

    // Add existing passage groups first
    Object.values(passageGroups).forEach((questions) => {
      if (questions.length > 0 && remainingPassageCount > 0) {
        // Only add as many questions as we need
        const toAdd = Math.min(questions.length, remainingPassageCount)
        result.push(...questions.slice(0, toAdd))
        remainingPassageCount -= toAdd
      }
    })

    // Generate more passage groups if needed
    while (remainingPassageCount >= 4) {
      const passageId = `generated-passage-${topic}-${Math.random().toString(36).substring(2, 9)}`
      const passageQuestionCount = Math.min(remainingPassageCount, 4 + Math.floor(Math.random() * 4)) // 4-7 questions
      const passage = `This is a generated passage for ${topic}. In a real exam, this would contain relevant information about ${topic} needed to answer the questions in this group.`

      // Create the passage questions
      for (let i = 0; i < passageQuestionCount; i++) {
        const options = Array.from(
          { length: 4 },
          (_, j) => `Option ${String.fromCharCode(65 + j)} for ${topic} passage question ${i}`,
        )

        result.push({
          id: `section${sectionId}-${topic}-passage-${passageId}-q${i}`,
          type: "passage",
          passageId: passageId,
          ...(i === 0 && { passage }), // Only include passage text with the first question
          question: `Generated ${topic} passage question ${i} for section ${sectionId}?`,
          options,
          correctAnswer: options[0],
          explanation: `This is an explanation for the generated ${topic} passage question.`,
          topic,
          ...(Math.random() > 0.7 && {
            image: "/placeholder.svg?height=300&width=300",
          }),
        })
      }

      remainingPassageCount -= passageQuestionCount
    }
  })

  // Then add discrete questions for each topic
  Object.entries(discreteQuestionsByTopic).forEach(([topic, questions]) => {
    const topicDiscreteCount = topicCounts[topic]?.discrete || 0

    // Use existing discrete questions first
    const toAdd = Math.min(topicDiscreteCount, questions.length)
    result.push(...questions.slice(0, toAdd))

    // Generate more if needed
    const needToGenerate = Math.max(0, topicDiscreteCount - toAdd)

    for (let i = 0; i < needToGenerate; i++) {
      const options = Array.from(
        { length: 4 },
        (_, j) => `Option ${String.fromCharCode(65 + j)} for ${topic} question ${i}`,
      )

      result.push({
        id: `section${sectionId}-${topic}-discrete-q${i}`,
        type: "discrete",
        question: `Generated ${topic} question ${i} for section ${sectionId}?`,
        options,
        correctAnswer: options[0],
        explanation: `This is an explanation for the generated ${topic} question.`,
        topic,
        ...(Math.random() > 0.7 && {
          image: "/placeholder.svg?height=300&width=300",
        }),
      })
    }
  })

  // Ensure exact question count
  const shuffled = shuffleArray(result)
  return shuffled.slice(0, totalCount)
}

// Fix the issue with passage questions not showing all questions in a passage
// Update the getSectionQuestions function to ensure all questions from a passage are included together

// Add this function to group questions by passage
function groupQuestionsByPassage(questions: Question[]): Question[] {
  // First, separate passage and discrete questions
  const passageQuestions: Question[] = []
  const discreteQuestions: Question[] = []
  const processedPassageIds = new Set<string>()

  // Group questions by passageId
  const passageGroups: Record<string, Question[]> = {}

  questions.forEach((question) => {
    if (question.type === "passage" && question.passageId) {
      if (!passageGroups[question.passageId]) {
        passageGroups[question.passageId] = []
      }
      passageGroups[question.passageId].push(question)
    } else {
      discreteQuestions.push(question)
    }
  })

  // Add all passage groups to the result array
  Object.values(passageGroups).forEach((group) => {
    passageQuestions.push(...group)
  })

  // Combine passage questions and discrete questions
  return [...passageQuestions, ...discreteQuestions]
}

// Update the getSectionQuestions function to use the groupQuestionsByPassage function
export function getSectionQuestions(sectionId: number): Question[] {
  let questions: Question[] = []
  let targetCount: number

  try {
    console.log(`Loading questions for section ${sectionId}...`)

    switch (sectionId) {
      case 1:
        // Section 1: Bio/Biochem - 59 questions, mix of passage and discrete
        targetCount = 59
        questions = generateQuestionsWithWeightage(
          section1Questions,
          section1Passages,
          1,
          targetCount,
          sectionTopicWeightage[1],
        )
        break
      case 2:
        // Section 2: Chem/Phys - 53 questions, all passage-based
        targetCount = 53
        questions = generateQuestionsWithWeightage(
          section2Questions,
          section2Passages,
          2,
          targetCount,
          sectionTopicWeightage[2],
        )
        break
      case 3:
        // Section 3: Psych/Soc - 59 questions, mix of passage and discrete
        targetCount = 59
        questions = generateQuestionsWithWeightage(
          section3Questions,
          section3Passages,
          3,
          targetCount,
          sectionTopicWeightage[3],
        )
        break
      case 4:
        // Section 4: CARS - 59 questions, mix of passage and discrete
        targetCount = 59
        questions = generateQuestionsWithWeightage(
          section4Questions,
          section4Passages,
          4,
          targetCount,
          sectionTopicWeightage[4],
        )
        break
      default:
        questions = []
        targetCount = 0
    }

    // Group questions by passage to ensure all questions from a passage are together
    questions = groupQuestionsByPassage(questions)

    // Double-check we have exactly the right number of questions
    if (questions.length > targetCount) {
      questions = questions.slice(0, targetCount)
    } else
      while (questions.length < targetCount) {
        // Add additional questions if needed
        const lastQuestion = questions[questions.length - 1]
        if (!lastQuestion) {
          // If there are no questions at all, create a default one
          const defaultQuestion: Question = {
            id: `section${sectionId}-default-${questions.length}`,
            type: "discrete",
            question: `Default question for section ${sectionId}?`,
            options: ["Option A", "Option B", "Option C", "Option D"],
            correctAnswer: "Option A",
            topic:
              Object.keys(sectionTopicWeightage[sectionId as keyof typeof sectionTopicWeightage] || {})[0] || "general",
          }
          questions.push(defaultQuestion)
        } else {
          questions.push({
            ...lastQuestion,
            id: `${lastQuestion.id}-extra-${questions.length}`,
            question: `Additional ${lastQuestion.topic} question ${questions.length}?`,
          })
        }
      }

    console.log(`Successfully loaded ${questions.length} questions for section ${sectionId}`)
    return questions
  } catch (error) {
    console.error(`Error loading questions for section ${sectionId}:`, error)

    // Return some default questions as a fallback
    const defaultQuestions: Question[] = []
    const targetCount = sectionId === 2 ? 53 : 59

    for (let i = 0; i < targetCount; i++) {
      defaultQuestions.push({
        id: `section${sectionId}-fallback-${i}`,
        type: "discrete",
        question: `Fallback question ${i + 1} for section ${sectionId}?`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: "Option A",
        topic:
          Object.keys(sectionTopicWeightage[sectionId as keyof typeof sectionTopicWeightage] || {})[0] || "general",
      })
    }

    return defaultQuestions
  }
}

// Also update the getAllSectionQuestions function to use groupQuestionsByPassage
export function getAllSectionQuestions(): Record<number, Question[]> {
  return {
    1: groupQuestionsByPassage(
      generateQuestionsWithWeightage(section1Questions, section1Passages, 1, 59, sectionTopicWeightage[1]),
    ),
    2: groupQuestionsByPassage(
      generateQuestionsWithWeightage(section2Questions, section2Passages, 2, 53, sectionTopicWeightage[2]),
    ),
    3: groupQuestionsByPassage(
      generateQuestionsWithWeightage(section3Questions, section3Passages, 3, 59, sectionTopicWeightage[3]),
    ),
    4: groupQuestionsByPassage(
      generateQuestionsWithWeightage(section4Questions, section4Passages, 4, 59, sectionTopicWeightage[4]),
    ),
  }
}

// Group questions by passage
export function groupQuestionsByPassage_old(questions: Question[]): Record<string, Question[]> {
  const groupedQuestions: Record<string, Question[]> = {}

  questions.forEach((question) => {
    if (question.type === "passage" && question.passageId) {
      if (!groupedQuestions[question.passageId]) {
        groupedQuestions[question.passageId] = []
      }
      groupedQuestions[question.passageId].push(question)
    }
  })

  return groupedQuestions
}

// Get passage text for a question
export function getPassageTextForQuestion(question: Question, questions: Question[]): string | undefined {
  if (question.passage) {
    return question.passage
  }

  if (question.type === "passage" && question.passageId) {
    // Find the first question in the group that has the passage text
    const questionWithPassage = questions.find((q) => q.passageId === question.passageId && q.passage)

    return questionWithPassage?.passage
  }

  return undefined
}

