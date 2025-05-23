"use client"

// Called when user starts an exam
export function trackExamStart(sectionId: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exam_start", {
      section_id: sectionId,
      event_category: "Exam",
      event_label: `Started Section ${sectionId}`,
    })
  }
}

// Called when user completes an exam section
export function trackSectionComplete(
  sectionId: number,
  score: number,
  timeSpent: number,
  answeredCount: number,
  totalQuestions: number,
) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "section_complete", {
      section_id: sectionId,
      score,
      time_spent: timeSpent,
      answered_count: answeredCount,
      total_questions: totalQuestions,
      completion_rate: Math.round((answeredCount / totalQuestions) * 100),
      event_category: "Exam",
      event_label: `Completed Section ${sectionId}`,
    })
  }
}

// Called when user completes the entire exam
export function trackExamComplete(score: number, mcatScore: number, timeSpent: number, endedEarly: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "exam_complete", {
      score,
      mcat_score: mcatScore,
      time_spent: timeSpent,
      ended_early: endedEarly,
      timestamp: new Date().toISOString(),
    })
  }
}

// Called when user answers a question
export function trackQuestionAnswered(sectionId: number, questionId: string, questionNumber: number, topic: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "question_answered", {
      section_id: sectionId,
      question_id: questionId,
      question_number: questionNumber,
      topic,
      event_category: "Question Interaction",
      event_label: `Section ${sectionId} - Question ${questionNumber}`,
    })
  }
}

// Called when user marks a question for review
export function trackQuestionMarked(sectionId: number, questionId: string, questionNumber: number, isMarked: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "question_marked", {
      section_id: sectionId,
      question_id: questionId,
      question_number: questionNumber,
      is_marked: isMarked,
      event_category: "Question Interaction",
      event_label: `${isMarked ? "Marked" : "Unmarked"} Question ${questionNumber} in Section ${sectionId}`,
    })
  }
}

// Called when user navigates between questions
export function trackQuestionNavigation(sectionId: number, fromQuestion: number, toQuestion: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "question_navigation", {
      section_id: sectionId,
      from_question: fromQuestion,
      to_question: toQuestion,
      direction: toQuestion > fromQuestion ? "forward" : "backward",
      event_category: "Navigation",
      event_label: `Section ${sectionId}: ${fromQuestion} → ${toQuestion}`,
    })
  }
}

// Called when user takes a break
export function trackBreakStart(afterSection: number, breakDuration: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "break_start", {
      after_section: afterSection,
      break_duration: breakDuration,
      timestamp: new Date().toISOString(),
    })
  }
}

// Called when user ends a break
export function trackBreakEnd(afterSection: number, actualDuration: number, skipped: boolean) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "break_end", {
      after_section: afterSection,
      actual_duration: actualDuration,
      skipped,
      timestamp: new Date().toISOString(),
    })
  }
}

// Called when user ends exam early
export function trackEndEarly(sectionId: number, answeredCount: number, totalQuestions: number, timeRemaining: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "end_early", {
      section_id: sectionId,
      answered_count: answeredCount,
      total_questions: totalQuestions,
      completion_rate: Math.round((answeredCount / totalQuestions) * 100),
      time_remaining: timeRemaining,
      event_category: "Exam",
      event_label: `Ended Early in Section ${sectionId}`,
    })
  }
}

// Called when user uses tools like highlight, strikethrough, etc.
export function trackToolUsage(sectionId: number, toolName: string) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "tool_usage", {
      section_id: sectionId,
      tool_name: toolName,
      event_category: "Tools",
      event_label: `Used ${toolName} in Section ${sectionId}`,
    })
  }
}

// Called when user views review page
export function trackReviewPageView(sectionId: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "review_page_view", {
      section_id: sectionId,
      timestamp: new Date().toISOString(),
    })
  }
}

// Called when user downloads results
export function trackResultsDownload(score: number, mcatScore: number) {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", "results_download", {
      score,
      mcat_score: mcatScore,
      timestamp: new Date().toISOString(),
    })
  }
}
