"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface EndExamDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  completedSections: number[]
  currentSection: number
  onConfirm: () => void
}

export function EndExamDialog({
  open,
  onOpenChange,
  completedSections,
  currentSection,
  onConfirm,
}: EndExamDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="dark:bg-slate-800">
        <DialogHeader className="flex flex-row items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
          <DialogTitle className="dark:text-white">End Exam Early</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm text-muted-foreground dark:text-slate-300">
          <div>
            You have chosen to end the exam early. If you click Yes, you will NOT be able to return to any remaining
            sections.
          </div>

          <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-4 rounded-md">
            <h4 className="font-medium mb-2 dark:text-yellow-200">Current Progress:</h4>
            <ul className="list-disc list-inside space-y-1 text-sm dark:text-yellow-100">
              <li>Completed Sections: {completedSections.length} of 4</li>
              <li>Current Section: {currentSection}</li>
              <li>Remaining Sections: {4 - Math.max(completedSections.length, currentSection)}</li>
            </ul>
          </div>

          <div>Are you sure you want to end the exam now?</div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="dark:border-slate-600 dark:text-white"
          >
            No, Continue Exam
          </Button>
          <Button onClick={onConfirm} variant="destructive">
            Yes, End Exam
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

