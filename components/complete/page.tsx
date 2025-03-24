import CompletePageClient from "@/components/complete/complete-page-client"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Exam Complete",
  description: "Review your exam results and get personalized study recommendations.",
}

export default function CompletePage() {
  return <CompletePageClient />
}

