import BreakPageClient from "./BreakPageClient"

// This function is required for static site generation with dynamic routes
export function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }]
}

export default async function BreakPage({ params }: { params: Promise<{ id: string }> }) {
  // Await the params before accessing its properties
  const resolvedParams = await params

  // Log the params to verify they exist
  console.log("BreakPage: Received params:", resolvedParams)

  return <BreakPageClient id={resolvedParams.id} />
}

