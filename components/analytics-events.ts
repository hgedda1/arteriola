"use client"

// Called when user starts an exam
export function trackExamStart(sectionId: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exam_start", {
      section_id: sectionId,
    })
  }
}

// Called when user completes an exam
export function trackExamComplete(sectionId: number, score: number, timeSpent: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exam_complete", {
      section_id: sectionId,
      score,
      time_spent: timeSpent,
    })
  }
}

// Called when user answers a question
export function trackQuestionAnswered(questionId: string, isCorrect: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "question_answered", {
      question_id: questionId,
      is_correct: isCorrect,
    })
  }
}
