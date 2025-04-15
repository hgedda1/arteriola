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
  // First check for environment variable
  if (process.env.NEXT_PUBLIC_BASE_PATH) {
    return process.env.NEXT_PUBLIC_BASE_PATH
  }

  if (typeof window !== "undefined") {
    // Check if we're on GitHub Pages with the /arteriola path
    if (window.location.hostname.includes("github.io") || window.location.pathname.startsWith("/arteriola")) {
      return "/arteriola"
    }
  }

  // Default to empty string for local development without the path
  return ""
}

// Helper function to prepend base path to image URLs
export const getImagePath = (path: string): string => {
  // If path is already absolute URL, return as is
  if (path.startsWith("http://") || path.startsWith("https://")) {
    return path
  }

  // If path is a data URL, return as is
  if (path.startsWith("data:")) {
    return path
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.substring(1) : path

  // Prepend base path
  const basePath = getBasePath()
  return `${basePath}/${cleanPath}`
}
// Function to get absolute URLs for images in HTML export
export const getAbsoluteImageUrl = (imagePath: string): string => {
  // If it's already an absolute URL, return it as is
  if (imagePath.startsWith("http://") || imagePath.startsWith("https://")) {
    return imagePath
  }

  // If it's a placeholder, convert it to an absolute URL
  if (imagePath.startsWith("/placeholder.svg")) {
    // Get the current origin
    const origin = typeof window !== "undefined" ? window.location.origin : ""
    const basePath = getBasePath()
    return `${origin}${basePath}${imagePath}`
  }

  // Otherwise, create a full absolute URL
  const origin = typeof window !== "undefined" ? window.location.origin : ""
  const basePath = getBasePath()

  // Ensure the path starts with a slash
  const normalizedPath = imagePath.startsWith("/") ? imagePath : `/${imagePath}`

  return `${origin}${basePath}${normalizedPath}`
}