"use client"

import { useEffect } from "react"
import { setupMetadataUpdate } from "@/lib/update-all-questions"

export default function MetadataInitializer() {
  useEffect(() => {
    // Run the metadata update on the client side
    setupMetadataUpdate()
  }, [])

  // This component doesn't render anything
  return null
}

