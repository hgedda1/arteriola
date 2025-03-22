"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Flag } from "lucide-react"

interface NavigatorDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  questions: Array<{
    id: string
    number: number
    question: string
  }>
  answers: Record<string, string>
  markedQuestions: string[]
  onReviewQuestion: (index: number) => void
}

export function NavigatorDialog({
  open,
  onOpenChange,
  questions,
  answers,
  markedQuestions,
  onReviewQuestion,
}: NavigatorDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl dark:bg-slate-800">
        <DialogHeader>
          <DialogTitle className="text-lg font-normal dark:text-white">Question Navigator</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[60vh]">
          <Table>
            <TableHeader>
              <TableRow className="dark:border-slate-700">
                <TableHead className="w-24 dark:text-slate-300">QUESTION</TableHead>
                <TableHead className="dark:text-slate-300">TITLE</TableHead>
                <TableHead className="w-32 dark:text-slate-300">STATUS</TableHead>
                <TableHead className="w-32 dark:text-slate-300">FLAGGED</TableHead>
                <TableHead className="w-24 dark:text-slate-300"></TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {questions.map((question, index) => (
                <TableRow key={question.id} className="dark:border-slate-700">
                  <TableCell className="text-black dark:text-white">{question.number}</TableCell>
                  <TableCell className="text-black dark:text-white">Multiple Choice</TableCell>
                  <TableCell>
                    <span
                      className={`px-2 py-1 text-xs rounded ${
                        answers[question.id]
                          ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                          : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                      }`}
                    >
                      {answers[question.id] ? "Complete" : "Incomplete"}
                    </span>
                  </TableCell>
                  <TableCell className="text-black dark:text-white">
                    {markedQuestions.includes(question.id) ? (
                      <div className="flex items-center">
                        <Flag className="h-4 w-4 text-yellow-500 mr-1" />
                        Yes
                      </div>
                    ) : (
                      "No"
                    )}
                  </TableCell>
                  <TableCell>
                    <button
                      onClick={() => {
                        onReviewQuestion(index)
                        onOpenChange(false)
                      }}
                      className="text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      Review
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </DialogContent>
    </Dialog>
  )
}

