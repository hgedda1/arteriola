"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"

interface HelpDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function HelpDialog({ open, onOpenChange }: HelpDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="dark:bg-slate-800">
        <DialogHeader>
          <DialogTitle className="text-lg font-normal dark:text-white">Help</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <section>
            <h3 className="font-bold mb-3 text-black dark:text-white">Navigation</h3>
            <ul className="list-disc list-inside space-y-1 text-sm dark:text-slate-300">
              <li>Use Previous and Next buttons to move between questions</li>
              <li>Click Navigator to see all questions and their status</li>
              <li>Questions can be marked for review using the flag button</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold mb-3 text-black dark:text-white">Answering Questions</h3>
            <ul className="list-disc list-inside space-y-1 text-sm dark:text-slate-300">
              <li>Click the radio button next to your chosen answer</li>
              <li>You can change your answer at any time during the section</li>
              <li>All answers are automatically saved</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold mb-3 text-black dark:text-white">Tools</h3>
            <ul className="list-disc list-inside space-y-1 text-sm dark:text-slate-300">
              <li>Highlight: Select text and click Highlight to mark important information</li>
              <li>Strikethrough: Select text and click Strikethrough to cross out text</li>
              <li>Scratch Pad: Opens a notepad for temporary notes (cleared after section)</li>
            </ul>
          </section>

          <section>
            <h3 className="font-bold mb-3 text-black dark:text-white">Completing the Section</h3>
            <ul className="list-disc list-inside space-y-1 text-sm dark:text-slate-300">
              <li>Review all questions before ending the section</li>
              <li>Use the Navigator to check for unanswered questions</li>
              <li>Once you end a section, you cannot return to it</li>
            </ul>
          </section>
        </div>
      </DialogContent>
    </Dialog>
  )
}

