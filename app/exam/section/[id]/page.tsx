import { Suspense } from "react"
import SectionClientPage from "./SectionClientPage"

export default async function SectionPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params before accessing its properties
  const resolvedParams = await params

  // Log the params to verify they exist
  console.log("SectionPage: Received params:", resolvedParams)

  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 text-black dark:text-white">
          Loading...
        </div>
      }
    >
      <SectionClientPage id={resolvedParams.id} />
    </Suspense>
  )
}

// Add this to ensure the page is properly generated for all sections
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }]
}

