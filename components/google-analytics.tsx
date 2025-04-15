// app/components/google-analytics.tsx
"use client"

import Script from "next/script"
import { usePathname, useSearchParams } from "next/navigation"
import { useEffect, Suspense } from "react"

const GA_MEASUREMENT_ID = "G-ZPZY4654R9"

function InnerAnalytics() {
  const pathname = usePathname()
  const searchParams = useSearchParams()

  useEffect(() => {
    if (pathname && window.gtag) {
      // Track page views
      window.gtag("event", "page_view", {
        page_path: pathname + (searchParams?.toString() ? `?${searchParams.toString()}` : ""),
        page_title: document.title,
        page_location: window.location.href,
        send_to: GA_MEASUREMENT_ID,
        timestamp: new Date().toISOString(),
      })

      // Track user engagement
      const engagementTime = 0
      const startTime = new Date().getTime()

      // Track time spent on page
      const interval = setInterval(() => {
        if (document.visibilityState === "visible") {
          const currentTime = new Date().getTime()
          const timeSpent = Math.floor((currentTime - startTime) / 1000)

          // Send engagement ping every 30 seconds
          if (timeSpent % 30 === 0 && timeSpent > 0) {
            window.gtag("event", "engagement", {
              page_path: pathname,
              engagement_time_seconds: timeSpent,
              timestamp: new Date().toISOString(),
            })
          }
        }
      }, 1000)

      return () => {
        clearInterval(interval)
      }
    }
  }, [pathname, searchParams])

  return null
}

export default function GoogleAnalytics() {
  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
              cookie_flags: 'SameSite=None;Secure',
              cookie_domain: window.location.hostname,
              transport_type: 'beacon'
            });
          `,
        }}
      />
      <Suspense>
        <InnerAnalytics />
      </Suspense>
    </>
  )
}
