"use client"

import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import { formatTopicName, sectionTitles } from "@/lib/score-utils"
import { getImagePath as getImagePathUtil } from "@/lib/client-utils"

// And then update the function to:
const getImagePath = (path: string): string => {
  return getImagePathUtil(path)
}

interface DownloadSummaryProps {
  userName: string
  mcatScore: number
  percentileRank: number
  totalScore: number
  results: Array<{
    id: number
    title: string
    questionCount: number
    answeredCount: number
    correctCount: number
    score: number
  }>
  topicPerformance: {
    topicScores: Record<string, { correct: number; total: number; percentage: number; section: number }>
    strengths: string[]
    weaknesses: string[]
  }
  studyRecommendations: Record<number, Record<string, string[]>>
  motivationalMessage: string
}

export function DownloadSummary({
  userName,
  mcatScore,
  percentileRank,
  totalScore,
  results,
  topicPerformance,
  studyRecommendations,
  motivationalMessage,
}: DownloadSummaryProps) {
  // Update the generateHTML function to include detailed question data
  const generateHTML = () => {
    // Create HTML content for the summary
    const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>MCAT Exam Summary - ${userName}</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          line-height: 1.6;
          color: #333;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px;
        }
        h1, h2, h3, h4 {
          color: #1a4a7a;
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
          border-bottom: 2px solid #1a4a7a;
          padding-bottom: 20px;
        }
        .score-summary {
          display: flex;
          justify-content: space-around;
          margin: 20px 0;
          padding: 15px;
          background-color: #f0f7ff;
          border-radius: 8px;
        }
        .score-box {
          text-align: center;
        }
        .score-value {
          font-size: 24px;
          font-weight: bold;
          color: #1a4a7a;
        }
        .score-label {
          font-size: 14px;
          color: #666;
        }
        .section {
          margin-bottom: 30px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 10px;
        }
        .progress-bar {
          height: 10px;
          background-color: #e0e0e0;
          border-radius: 5px;
          margin-bottom: 10px;
          overflow: hidden;
        }
        .progress-fill {
          height: 100%;
          border-radius: 5px;
        }
        .section-stats {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #666;
        }
        .topic-performance {
          margin-bottom: 30px;
        }
        .topic-row {
          margin-bottom: 10px;
        }
        .topic-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 5px;
        }
        .topic-name {
          display: flex;
          align-items: center;
        }
        .section-badge {
          font-size: 12px;
          background-color: #e0f2ff;
          color: #1a4a7a;
          padding: 2px 6px;
          border-radius: 4px;
          margin-left: 8px;
        }
        .strengths-weaknesses {
          display: flex;
          gap: 20px;
          margin-bottom: 30px;
        }
        .strengths, .weaknesses {
          flex: 1;
        }
        .strength-item, .weakness-item {
          padding: 8px;
          margin-bottom: 8px;
          border-radius: 4px;
        }
        .strength-item {
          background-color: #e6f4ea;
          border: 1px solid #ceead6;
        }
        .weakness-item {
          background-color: #feefc3;
          border: 1px solid #fde293;
        }
        .recommendations {
          margin-bottom: 30px;
        }
        .recommendation-section {
          margin-bottom: 20px;
        }
        .topic-recommendations {
          background-color: #f8f9fa;
          padding: 10px;
          border-radius: 4px;
          margin-bottom: 10px;
        }
        .message-box {
          background-color: #e6f4ff;
          border: 1px solid #b3d7ff;
          padding: 15px;
          border-radius: 8px;
          text-align: center;
          margin: 20px 0;
        }
        .footer {
          text-align: center;
          margin-top: 40px;
          padding-top: 20px;
          border-top: 1px solid #ddd;
          font-size: 14px;
          color: #666;
        }
        .question-list {
          margin-top: 30px;
        }
        .question-item {
          margin-bottom: 20px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 8px;
        }
        .question-header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px;
        }
        .question-text {
          font-weight: bold;
          margin-bottom: 10px;
        }
        .options-list {
          list-style-type: none;
          padding-left: 0;
        }
        .option-item {
          padding: 5px 0;
        }
        .correct-answer {
          color: #0d904f;
          font-weight: bold;
        }
        .incorrect-answer {
          color: #d73a49;
          font-weight: bold;
        }
        .explanation-box {
          margin-top: 10px;
          padding: 10px;
          background-color: #f8f9fa;
          border-radius: 4px;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="header">
        <h1>MCAT Exam Summary</h1>
        <p>Prepared for: ${userName}</p>
        <p>Date: ${new Date().toLocaleDateString()}</p>
      </div>
      
      <div class="score-summary">
        <div class="score-box">
          <div class="score-value">${mcatScore}</div>
          <div class="score-label">MCAT Score</div>
          <div class="score-label">${percentileRank}th Percentile</div>
        </div>
        <div class="score-box">
          <div class="score-value">${totalScore}%</div>
          <div class="score-label">Overall Percentage</div>
        </div>
      </div>
      
      <div class="message-box">
        <p>${motivationalMessage}</p>
      </div>
      
      <h2>Section Results</h2>
      ${results
        .map(
          (section) => `
        <div class="section">
          <div class="section-header">
            <h3>Section ${section.id}: ${section.title}</h3>
            <div><strong>${section.score}%</strong></div>
          </div>
          <div class="progress-bar">
            <div class="progress-fill" style="width: ${section.score}%; background-color: ${
              section.score >= 80
                ? "#22c55e"
                : section.score >= 70
                  ? "#4ade80"
                  : section.score >= 60
                    ? "#facc15"
                    : section.score >= 50
                      ? "#fb923c"
                      : "#ef4444"
            };"></div>
          </div>
          <div class="section-stats">
            <div>Questions: ${section.questionCount}</div>
            <div>Answered: ${section.answeredCount}</div>
            <div>Correct: ${section.correctCount}</div>
          </div>
        </div>
      `,
        )
        .join("")}
      
      <h2>Performance Analysis</h2>
      
      <div class="topic-performance">
        <h3>Performance by Topic</h3>
        ${Object.entries(topicPerformance.topicScores)
          .sort((a, b) => b[1].percentage - a[1].percentage)
          .map(
            ([topic, data]) => `
          <div class="topic-row">
            <div class="topic-header">
              <div class="topic-name">
                <span>${formatTopicName(topic)}</span>
                <span class="section-badge">Section ${data.section}</span>
              </div>
              <div>${data.correct}/${data.total} (${Math.round(data.percentage)}%)</div>
            </div>
            <div class="progress-bar">
              <div class="progress-fill" style="width: ${data.percentage}%; background-color: ${
                data.percentage >= 80
                  ? "#22c55e"
                  : data.percentage >= 70
                    ? "#4ade80"
                    : data.percentage >= 60
                      ? "#facc15"
                      : data.percentage >= 50
                        ? "#fb923c"
                        : "#ef4444"
              };"></div>
            </div>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <div class="strengths-weaknesses">
        <div class="strengths">
          <h3>Strengths</h3>
          ${
            topicPerformance.strengths.length > 0
              ? topicPerformance.strengths
                  .map(
                    (topic) => `
              <div class="strength-item">
                <strong>${formatTopicName(topic)}</strong>: ${Math.round(
                  topicPerformance.topicScores[topic].percentage,
                )}%
              </div>
            `,
                  )
                  .join("")
              : "<p>No particular strengths identified yet.</p>"
          }
        </div>
        
        <div class="weaknesses">
          <h3>Areas for Improvement</h3>
          ${
            topicPerformance.weaknesses.length > 0
              ? topicPerformance.weaknesses
                  .map(
                    (topic) => `
              <div class="weakness-item">
                <strong>${formatTopicName(topic)}</strong>: ${Math.round(
                  topicPerformance.topicScores[topic].percentage,
                )}%
              </div>
            `,
                  )
                  .join("")
              : "<p>No significant weaknesses identified. Great job!</p>"
          }
        </div>
      </div>
      
      <h2>Study Recommendations</h2>
      
      <div class="recommendations">
        ${Object.entries(studyRecommendations)
          .map(
            ([sectionId, sectionRecs]) => `
          <div class="recommendation-section">
            <h3>Section ${sectionId}: ${sectionTitles[Number(sectionId)]}</h3>
            ${
              Object.keys(sectionRecs).length > 0
                ? Object.entries(sectionRecs)
                    .map(
                      ([topic, tips]) => `
                  <div class="topic-recommendations">
                    <h4>${formatTopicName(topic)}</h4>
                    <ul>
                      ${tips.map((tip) => `<li>${tip}</li>`).join("")}
                    </ul>
                  </div>
                `,
                    )
                    .join("")
                : "<p>You're performing well in this section! Continue with your current study approach.</p>"
            }
          </div>
        `,
          )
          .join("")}
      </div>
      
      <h2>Detailed Question Analysis</h2>
      
      <div class="question-list">
        ${results
          .map(
            (section) => `
          <h3>Section ${section.id}: ${section.title}</h3>
          <div id="section-${section.id}-questions">
            <!-- Questions will be dynamically loaded here by JavaScript -->
            <p>Loading questions for this section...</p>
          </div>
        `,
          )
          .join("")}
      </div>
      
      <div class="message-box">
        <p><strong>Remember:</strong> The MCAT is just one part of your medical school application. Stay confident and keep working toward your goals!</p>
      </div>
      
      <div class="footer">
        <p>Generated by MCAT Exam Simulation Platform</p>
        <p>${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}</p>
      </div>
      
      <script>
        // Function to load questions for each section
        async function loadQuestions() {
          try {
            // Get exam state from localStorage
            const examState = JSON.parse(localStorage.getItem('examState') || '{}');
            const answers = examState.answers || {};
            
            // For each section, load questions
            for (let sectionId = 1; sectionId <= 4; sectionId++) {
              // Get questions from localStorage
              const questionsData = localStorage.getItem('section' + sectionId + '-questions');
              if (!questionsData) continue;
              
              const questions = JSON.parse(questionsData);
              const sectionAnswers = answers[sectionId] || {};
              
              // Generate HTML for each question
              const questionsHtml = questions.map((question, index) => {
                const userAnswer = sectionAnswers[question.id];
                const isCorrect = userAnswer === question.correctAnswer;
                const answerStatus = userAnswer 
                  ? (isCorrect ? 'correct-answer' : 'incorrect-answer')
                  : '';
                
                return \`
                  <div class="question-item">
                    <div class="question-header">
                      <div>Question \${index + 1}</div>
                      <div>Topic: \${question.topic}</div>
                    </div>
                    <div class="question-text">\${question.question}</div>
                    <ul class="options-list">
                      \${question.options.map(option => {
                        let optionClass = '';
                        if (option === question.correctAnswer) {
                          optionClass = 'correct-answer';
                        } else if (option === userAnswer && userAnswer !== question.correctAnswer) {
                          optionClass = 'incorrect-answer';
                        }
                        
                        return \`
                          <li class="option-item \${optionClass}">
                            \${option} \${option === question.correctAnswer ? '✓' : ''} 
                            \${option === userAnswer && userAnswer !== question.correctAnswer ? '✗' : ''}
                          </li>
                        \`;
                      }).join('')}
                    </ul>
                    <div class="explanation-box">
                      <strong>Explanation:</strong> \${question.explanation || 'No explanation available.'}
                      \${question.image ? \`<img src="\${getImagePath(question.image)}" alt="Question image" />\` : ''}
                    </div>
                  </div>
                \`;
              }).join('');
              
              // Update the section's questions container
              document.getElementById('section-' + sectionId + '-questions').innerHTML = 
                questions.length > 0 ? questionsHtml : '<p>No questions available for this section.</p>';
            }
          } catch (error) {
            console.error('Error loading questions:', error);
            // Update all sections with error message
            for (let sectionId = 1; sectionId <= 4; sectionId++) {
              const container = document.getElementById('section-' + sectionId + '-questions');
              if (container) {
                container.innerHTML = '<p>Error loading questions. Please try again.</p>';
              }
            }
          }
        }
        
        // Load questions when the document is ready
        document.addEventListener('DOMContentLoaded', loadQuestions);
      </script>
    </body>
    </html>
  `

    return html
  }

  const downloadSummary = () => {
    const html = generateHTML()
    const blob = new Blob([html], { type: "text/html" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `MCAT_Summary_${userName.replace(/\s+/g, "_")}_${new Date().toISOString().split("T")[0]}.html`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }

  return (
    <Button onClick={downloadSummary} className="flex items-center gap-2 text-black dark:text-white">
      <Download className="h-4 w-4" />
      Download Summary
    </Button>
  )
}

