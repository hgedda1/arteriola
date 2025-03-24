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
    if (window.location.hostname.includes("github.io") && window.location.pathname.includes("/arteriola")) {
      return "/arteriola"
    }

    // For local development or other deployments
    const pathSegments = window.location.pathname.split("/")
    if (pathSegments.length > 1 && pathSegments[1] === "arteriola") {
      return "/arteriola"
    }
  }

  // Default to empty string if not on GitHub Pages or not in the arteriola path
  return ""
}

