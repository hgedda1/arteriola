"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { AlertTriangle } from "lucide-react"

interface EndSectionDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  onConfirm: () => void
  totalQuestions: number
  answeredCount: number
  markedCount: number
}

export function EndSectionDialog({
  open,
  onOpenChange,
  onConfirm,
  totalQuestions,
  answeredCount,
  markedCount,
}: EndSectionDialogProps) {
  const hasUnanswered = answeredCount < totalQuestions
  const hasMarked = markedCount > 0

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="dark:bg-slate-800">
        <DialogHeader className="flex flex-row items-center gap-2">
          <AlertTriangle className="h-6 w-6 text-yellow-500" />
          <DialogTitle className="text-black dark:text-white">End Section</DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm text-muted-foreground dark:text-slate-300">
          <div>
            You have chosen to end this section. If you click Yes, you will NOT be able to return to this section.
          </div>

          {(hasUnanswered || hasMarked) && (
            <div className="bg-yellow-50 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 p-4 rounded-md">
              <h4 className="font-medium mb-2 dark:text-yellow-200">Warning:</h4>
              <ul className="list-disc list-inside space-y-1 text-sm dark:text-yellow-100">
                {hasUnanswered && <li>You have {totalQuestions - answeredCount} unanswered questions</li>}
                {hasMarked && <li>You have {markedCount} questions marked for review</li>}
              </ul>
            </div>
          )}

          <div>Are you sure you want to end this section?</div>
        </div>

        <div className="flex justify-end gap-2">
          <Button
            variant="outline"
            onClick={() => onOpenChange(false)}
            className="text-black dark:border-slate-600 dark:text-white"
          >
            No
          </Button>
          <Button onClick={onConfirm}>Yes</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

