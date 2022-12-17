/* eslint-disable @typescript-eslint/ban-types */
export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string): void => {
  if (typeof window === 'undefined' || typeof window?.gtag !== 'function')
    return

  window.gtag('config', GA_TRACKING_ID, {
    page_path: url,
  })
}

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = (
  { action, category, label, value },
  options: Object = null,
): void => {
  if (typeof window === 'undefined' || typeof window?.gtag !== 'function')
    return

  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value,
    ...options,
  })
}
