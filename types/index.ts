// Define the SectionResult interface for exam results
export interface SectionResult {
    id: number
    title: string
    questionCount: number
    answeredCount: number
    correctCount: number
    score: number
  }
  
  // Define the Question metadata interfaces
  export interface QuestionMetadata {
    foundationalConcept?: string
    contentCategory?: string
    discipline?: string
    subtopic?: string
    difficultyLevel?: "easy" | "medium" | "hard"
    skillsTested?: string[]
  }
  
  // Define the Question interface
  export interface Question {
    id: number
    text: string
    options: string[]
    correctAnswer: number
    explanation: string
    passage?: string
    metadata?: QuestionMetadata
  }
  
  // Define the Answer interface
  export interface Answer {
    [questionId: number]: number
  }
  
  // Define the ExamState interface
  export interface ExamState {
    currentSection: number
    completedSections: number[]
    answers: {
      [sectionId: number]: Answer
    }
    endedEarly?: boolean
    startTime?: number
    sectionStartTime?: number
    remainingTime?: number
  }
  
  // Define the User interface
  export interface User {
    firstName: string
    lastName: string
    email: string
  }
  
  // Define the TopicPerformance interface
  export interface TopicPerformance {
    topicScores: {
      [topic: string]: {
        correct: number
        total: number
        percentage: number
      }
    }
    strengths: string[]
    weaknesses: string[]
    foundationalConceptScores?: {
      [concept: string]: {
        correct: number
        total: number
        percentage: number
      }
    }
    contentCategoryScores?: {
      [category: string]: {
        correct: number
        total: number
        percentage: number
      }
    }
    disciplineScores?: {
      [discipline: string]: {
        correct: number
        total: number
        percentage: number
      }
    }
  }
  
  