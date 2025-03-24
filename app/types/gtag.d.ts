interface Window {
    gtag: (
      command: "event" | "config" | "set" | "consent",
      action: string,
      params?: Record<string, any>
    ) => void
    dataLayer: any[]
  }
  