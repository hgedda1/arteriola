"use client"

import type React from "react"

import Link from "next/link"
import { getBasePath } from "@/lib/client-utils"

interface CustomLinkProps {
  href: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
}

export function CustomLink({ href, className, children, onClick }: CustomLinkProps) {
  const basePath = getBasePath()

  // Only prepend basePath if href is an internal link (starts with /)
  // and doesn't already include the basePath
  const fullHref = href.startsWith("/") && !href.startsWith(basePath) ? `${basePath}${href}` : href

  return (
    <Link href={fullHref} className={className} onClick={onClick}>
      {children}
    </Link>
  )
}

