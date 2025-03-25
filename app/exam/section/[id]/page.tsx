// app/exam/section/[id]/page.tsx
import { Suspense } from "react"
import SectionClientPage from "./SectionClientPage"

export default function SectionPage({ params }: { params: { id: string } }) {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
          Loading...
        </div>
      }
    >
      <SectionClientPage id={params.id} />
    </Suspense>
  )
}

// generated for all sections
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]
}

