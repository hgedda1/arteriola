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

// Base path helper for GitHub Pages
export const getBasePath = (): string => {
  // This will return the correct base path in both development and production
  if (typeof window !== "undefined") {
    // In the browser, we can detect the base path from the current location
    if (window.location.hostname.includes("github.io")) {
      return "/mcat-sim"
    }
  }
  return process.env.NODE_ENV === "production" ? "/mcat-sim" : ""
}

