// Safe localStorage access functions
export const getLocalStorage = (key: string): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem(key)
  }
  return null
}

export const setLocalStorage = (key: string, value: string): void => {
  if (typeof window !== "undefined") {
    localStorage.setItem(key, value)
  }
}

export const removeLocalStorage = (key: string): void => {
  if (typeof window !== "undefined") {
    localStorage.removeItem(key)
  }
}

// Base path helper
export const getBasePath = (): string => {
  if (typeof window !== "undefined") {
    // Check if we're on GitHub Pages with the /arteriola path
    if (window.location.hostname.includes("github.io")) {
      return "/arteriola"
    }

    // For local development when testing with the path
    if (process.env.NODE_ENV === "development" && window.location.pathname.startsWith("/arteriola")) {
      return "/arteriola"
    }
  }

  // Default to empty string for local development without the path
  return ""
}

