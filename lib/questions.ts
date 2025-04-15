import {
  section1Questions,
  section2Questions,
  section3Questions,
  section4Questions,
  section1Passages,
  section3Passages,
  section4Passages,
  sectionTopicWeightage,
  sectionQuestionTypeConfig,
  type Question,
  type Passage,
} from "./exam-data"

import { updateQuestionMetadata, updateSectionQuestions } from "./update-question-metadata"
import { getBasePath } from "./client-utils"
import { shuffleArray } from "./utils"

const basePath = getBasePath()

function extractQuestionsFromPassages(passages: Passage[]): Question[] {
  const questions: Question[] = []

  if (!passages || !Array.isArray(passages)) {
    console.warn("No passages provided or passages is not an array")
    return []
  }

  passages.forEach((passage) => {
    if (passage && passage.questions && Array.isArray(passage.questions)) {
      const imagePath: string | undefined =
        typeof passage.image === "string"
          ? `${basePath}/${passage.image.trim().replace(/^\/+/g, '')}`
          : undefined

      passage.questions.forEach((question, index) => {
        const questionImagePath =
          typeof question.image === "string"
            ? `${basePath}/${question.image.trim().replace(/^\/+/g, '')}`
            : undefined

        if (index === 0) {
          questions.push({
            ...question,
            passage: typeof passage.text === "string" ? passage.text : undefined,
            ...(imagePath && { image: imagePath }),
          })
        } else {
          questions.push({
            ...question,
            ...(questionImagePath && { image: questionImagePath }),
          })
        }
      })
    }
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
  // Ensure we have valid arrays
  if (!baseQuestions) baseQuestions = []
  if (!basePassages) basePassages = []
  if (!topicWeightage) topicWeightage = {}

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
  const discreteBaseQuestions = baseQuestions.filter((q) => q && q.type === "discrete")

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
    if (question && question.topic && discreteQuestionsByTopic[question.topic]) {
      discreteQuestionsByTopic[question.topic].push(question)
    }
  })

  // Group passage questions by passageId and topic
  passageQuestions.forEach((question) => {
    if (question && question.topic && question.type === "passage" && question.passageId) {
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
      if (questions && questions.length > 0 && remainingPassageCount > 0) {
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
            image: "placeholder.svg?height=300&width=300",
          }),
        })
      }

      remainingPassageCount -= passageQuestionCount
    }
  })

  // Then add discrete questions for each topic
  Object.entries(discreteQuestionsByTopic).forEach(([topic, questions]) => {
    if (!questions) questions = []
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
          image: "placeholder.svg?height=300&width=300",
        }),
      })
    }
  })

  // Ensure exact question count
  const shuffled = shuffleArray(result)
  return shuffled.slice(0, totalCount)
}

// Add this function to group questions by passage
function groupQuestionsByPassage(questions: Question[]): Question[] {
  // Handle null or undefined questions
  if (!questions || !Array.isArray(questions)) {
    console.warn("No questions provided or questions is not an array")
    return []
  }

  // First, separate passage and discrete questions
  const passageQuestions: Question[] = []
  const discreteQuestions: Question[] = []
  const processedPassageIds = new Set<string>()

  // Group questions by passageId
  const passageGroups: Record<string, Question[]> = {}

  questions.forEach((question) => {
    if (!question) return

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
    if (group && Array.isArray(group)) {
      passageQuestions.push(...group)
    }
  })

  // Combine passage questions and discrete questions
  return [...passageQuestions, ...discreteQuestions]
}

// Modify the getSectionQuestions function to update metadata
export function getSectionQuestions(sectionId: number): Question[] {
  let questions: Question[] = []
  let targetCount: number

  try {
    console.log(`Loading questions for section ${sectionId}...`)

    switch (sectionId) {
      case 1:
        // Chem/Phys - 59 questions, mix of passage and discrete
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
        // CARS - 59 questions passage
        targetCount = 53
        questions = generateQuestionsWithWeightage(
          section2Questions,
          section1Passages,
          2,
          targetCount,
          sectionTopicWeightage[2],
        )
        break
      case 3:
        // Bio/Biochem - 59 questions, mix of passage and discrete
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
        // Psych/Soc - 59 questions, mix of passage and discrete
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
            question: `Default question for section (test, skip, answer A) ${sectionId}?`,
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

    // Update metadata for all questions
    questions = updateSectionQuestions(questions)

    console.log(`Successfully loaded ${questions.length} questions for section ${sectionId}`)

    // Store the generated questions in localStorage to ensure consistency
    try {
      localStorage.setItem(`section${sectionId}-questions`, JSON.stringify(questions))
    } catch (err) {
      console.error("Error storing questions in localStorage:", err)
    }

    return questions
  } catch (error) {
    console.error(`Error loading questions for section ${sectionId}:`, error)

    // Try to load questions from localStorage first
    try {
      const storedQuestions = localStorage.getItem(`section${sectionId}-questions`)
      if (storedQuestions) {
        const parsedQuestions = JSON.parse(storedQuestions)
        console.log(`Loaded ${parsedQuestions.length} questions from localStorage for section ${sectionId}`)
        return parsedQuestions
      }
    } catch (err) {
      console.error("Error loading questions from localStorage:", err)
    }

    // Return some default questions as a fallback
    const defaultQuestions: Question[] = []
    const targetCount = sectionId === 2 ? 53 : 59

    // Get topics for this section
    const sectionTopics = Object.keys(sectionTopicWeightage[sectionId as keyof typeof sectionTopicWeightage] || {})
    const defaultTopic = sectionTopics[0] || "general"

    // Create themed questions based on section
    const questionTemplates = {
      1: [
        {
          q: "Which organelle is responsible for protein synthesis?",
          a: ["Ribosome", "Mitochondria", "Golgi apparatus", "Lysosome"],
        },
        {
          q: "What is the primary function of DNA?",
          a: ["Store genetic information", "Protein synthesis", "Energy production", "Cell signaling"],
        },
        {
          q: "Which of the following is NOT a nucleotide found in DNA?",
          a: ["Uracil", "Adenine", "Guanine", "Thymine"],
        },
        {
          q: "Which enzyme catalyzes the hydrolysis of peptide bonds?",
          a: ["Peptidase", "Amylase", "Lipase", "DNA polymerase"],
        },
        {
          q: "What is the main function of the mitochondria?",
          a: ["ATP production", "Protein synthesis", "Lipid metabolism", "Cell division"],
        },
      ],
      2: [
        { q: "What is the SI unit of force?", a: ["Newton", "Joule", "Watt", "Pascal"] },
        {
          q: "Which law states that energy cannot be created or destroyed?",
          a: ["First law of thermodynamics", "Second law of thermodynamics", "Ohm's law", "Boyle's law"],
        },
        { q: "What is the pH of a neutral solution at 25°C?", a: ["7", "0", "14", "1"] },
        {
          q: "Which of the following is an example of a polar molecule?",
          a: ["Water", "Methane", "Oxygen", "Nitrogen"],
        },
        { q: "What is the charge of an electron?", a: ["Negative", "Positive", "Neutral", "Variable"] },
      ],
      3: [
        {
          q: "Who is known for classical conditioning experiments with dogs?",
          a: ["Pavlov", "Skinner", "Freud", "Jung"],
        },
        {
          q: "What is the term for a person's awareness of their own identity?",
          a: ["Self-concept", "Persona", "Archetype", "Superego"],
        },
        {
          q: "Which theory focuses on how people learn by observing others?",
          a: ["Social learning theory", "Psychoanalytic theory", "Behaviorism", "Humanism"],
        },
        { q: "What is the smallest unit of social organization?", a: ["Family", "Individual", "Community", "Society"] },
        {
          q: "Which part of the brain is primarily responsible for emotions?",
          a: ["Limbic system", "Cerebellum", "Medulla", "Corpus callosum"],
        },
      ],
      4: [
        {
          q: "What is the main purpose of a thesis statement in an essay?",
          a: [
            "State the main argument",
            "Provide background information",
            "Summarize the conclusion",
            "List supporting evidence",
          ],
        },
        {
          q: "Which of the following is an example of a logical fallacy?",
          a: ["Ad hominem", "Deductive reasoning", "Syllogism", "Empirical evidence"],
        },
        {
          q: "What is the difference between correlation and causation?",
          a: [
            "Correlation doesn't imply causation",
            "They are synonymous",
            "Causation is weaker than correlation",
            "Correlation only applies to qualitative data",
          ],
        },
        {
          q: "Which approach to ethics focuses on the outcomes of actions?",
          a: ["Consequentialism", "Deontology", "Virtue ethics", "Divine command theory"],
        },
        {
          q: "What is the purpose of a control group in an experiment?",
          a: [
            "Provide a baseline for comparison",
            "Maximize the effect of the treatment",
            "Eliminate all variables",
            "Increase sample size",
          ],
        },
      ],
    }

    // Generate questions using templates and random variations
    for (let i = 0; i < targetCount; i++) {
      // Select a topic for this question
      const topic = sectionTopics[i % sectionTopics.length] || defaultTopic

      // Get templates for this section
      const templates = questionTemplates[sectionId as keyof typeof questionTemplates] || []

      // Select a template, cycling through them
      const template = templates[i % templates.length]

      // Create a variation of the template question
      const variation = i < templates.length ? "" : ` (Variation ${Math.floor(i / templates.length) + 1})`

      const question: Question = {
        id: `section${sectionId}-fallback-${i}`,
        type: "discrete",
        question: template ? `${template.q}${variation}` : `Fallback question ${i + 1} for section ${sectionId}?`,
        options: template ? [...template.a] : ["Option A", "Option B", "Option C", "Option D"],
        correctAnswer: template ? template.a[0] : "Option A",
        topic: topic,
        explanation: `This is a fallback question. The correct answer is ${template ? template.a[0] : "Option A"}.`,
        ...(Math.random() > 0.7 && {
          image: "placeholder.svg?height=300&width=300",
        }),
      }

      // Add metadata to the question
      defaultQuestions.push(updateQuestionMetadata(question))
    }

    // Store the fallback questions in localStorage
    try {
      localStorage.setItem(`section${sectionId}-questions`, JSON.stringify(defaultQuestions))
    } catch (err) {
      console.error("Error storing fallback questions in localStorage:", err)
    }

    return defaultQuestions
  }
}

// Also update the getAllSectionQuestions function to use groupQuestionsByPassage
export function getAllSectionQuestions(): Record<number, Question[]> {
  const result: Record<number, Question[]> = {}

  for (let sectionId = 1; sectionId <= 4; sectionId++) {
    // Try to load questions from localStorage first
    try {
      const storedQuestions = localStorage.getItem(`section${sectionId}-questions`)
      if (storedQuestions) {
        const parsedQuestions = JSON.parse(storedQuestions)
        console.log(
          `getAllSectionQuestions: Loaded ${parsedQuestions.length} questions from localStorage for section ${sectionId}`,
        )
        result[sectionId] = parsedQuestions
        continue
      }
    } catch (err) {
      console.error(`Error loading questions from localStorage for section ${sectionId}:`, err)
    }

    // Fall back to generating questions
    const targetCount = sectionId === 2 ? 53 : 59
    result[sectionId] = groupQuestionsByPassage(
      generateQuestionsWithWeightage(
        sectionId === 1
          ? section1Questions
          : sectionId === 2
            ? section2Questions
            : sectionId === 3
              ? section3Questions
              : section4Questions,

        sectionId === 1
          ? section1Passages
          : sectionId === 2
            ? section1Passages
            : sectionId === 3
              ? section3Passages
              : section4Passages,

        sectionId,
        targetCount,
        sectionTopicWeightage[sectionId as keyof typeof sectionTopicWeightage],
      ),
    )
  }

  return result
}

// Group questions by passage
export function groupQuestionsByPassage_old(questions: Question[]): Record<string, Question[]> {
  if (!questions || !Array.isArray(questions)) {
    return {}
  }

  const groupedQuestions: Record<string, Question[]> = {}

  questions.forEach((question) => {
    if (!question) return

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
  if (!question) return undefined

  if (question.passage) {
    return question.passage
  }

  if (question.type === "passage" && question.passageId && Array.isArray(questions)) {
    // Find the first question in the group that has the passage text
    const questionWithPassage = questions.find((q) => q && q.passageId === question.passageId && q.passage)

    return questionWithPassage?.passage
  }

  return undefined
}

