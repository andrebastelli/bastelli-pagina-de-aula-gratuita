// Analytics utility functions for tracking events
// Integrates with GA4, Meta Pixel, and GTM

type EventParams = Record<string, string | number | boolean>

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    fbq?: (...args: unknown[]) => void
    dataLayer?: unknown[]
  }
}

export function trackEvent(eventName: string, params?: EventParams) {
  // Google Analytics 4
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", eventName, params)
  }

  // Meta Pixel
  if (typeof window !== "undefined" && window.fbq) {
    window.fbq("track", eventName, params)
  }

  // Google Tag Manager dataLayer
  if (typeof window !== "undefined" && window.dataLayer) {
    window.dataLayer.push({
      event: eventName,
      ...params,
    })
  }

  // Log in development
  if (process.env.NODE_ENV === "development") {
    console.log(`[Analytics] Event: ${eventName}`, params)
  }
}

export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
  })
}

export function trackConversion(conversionType: string, value?: number) {
  trackEvent(conversionType, {
    value: value || 0,
    currency: "BRL",
  })
}
