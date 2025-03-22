"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Textarea } from "@/components/ui/textarea"

interface ScratchPadDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ScratchPadDialog({ open, onOpenChange }: ScratchPadDialogProps) {
  const [notes, setNotes] = useState("")

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl dark:bg-slate-800">
        <DialogHeader>
          <DialogTitle className="text-lg font-normal dark:text-white">Scratch Pad</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 dark:text-slate-300">
            Use this space for notes. Content will be cleared when you complete this section.
          </p>
          <Textarea
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
            className="min-h-[200px] font-mono dark:bg-slate-700 dark:text-white dark:border-slate-600"
            placeholder="Type your notes here..."
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}

