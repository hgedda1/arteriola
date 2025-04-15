import { Suspense } from "react"
import SectionReviewClientPage from "./SectionReviewClientPage"

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]
}

export default async function SectionReviewPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params before accessing its properties
  const resolvedParams = await params

  // Log the params to verify they exist
  console.log("SectionReviewPage: Received params:", resolvedParams)

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
          Loading...
        </div>
      }
    >
      <SectionReviewClientPage id={resolvedParams.id} />
    </Suspense>
  )
}

