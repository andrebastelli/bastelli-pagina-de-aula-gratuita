declare global {
  interface Window {
    dataLayer: unknown[]
    gtag: (...args: unknown[]) => void
    fbq: (...args: unknown[]) => void
  }
}

const GA4_ID = import.meta.env.VITE_GA4_ID
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID
const GTM_ID = import.meta.env.VITE_GTM_ID

export function initAnalytics() {
  // Initialize dataLayer
  window.dataLayer = window.dataLayer || []

  // GTM
  if (GTM_ID && GTM_ID !== 'GTM-XXXXXXX') {
    const gtmScript = document.createElement('script')
    gtmScript.async = true
    gtmScript.src = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`
    document.head.appendChild(gtmScript)
  }

  // GA4
  if (GA4_ID && GA4_ID !== 'G-XXXXXXXXXX') {
    const ga4Script = document.createElement('script')
    ga4Script.async = true
    ga4Script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`
    document.head.appendChild(ga4Script)

    window.gtag = function gtag() {
      window.dataLayer.push(arguments)
    }
    window.gtag('js', new Date())
    window.gtag('config', GA4_ID)
  }

  // Meta Pixel
  if (META_PIXEL_ID && META_PIXEL_ID !== 'XXXXXXXXXXXXXXXX') {
    const fbqScript = document.createElement('script')
    fbqScript.innerHTML = `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${META_PIXEL_ID}');
      fbq('track', 'PageView');
    `
    document.head.appendChild(fbqScript)
  }
}

export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  // GA4 / GTM
  if (window.gtag) {
    window.gtag('event', eventName, params)
  }
  
  // Push to dataLayer for GTM
  window.dataLayer?.push({
    event: eventName,
    ...params,
  })

  // Meta Pixel
  if (window.fbq) {
    window.fbq('track', eventName, params)
  }

  console.log('[Analytics]', eventName, params)
}

// Eventos específicos da página
export const events = {
  pageView: () => trackEvent('page_view'),
  vslPlayClick: () => trackEvent('vsl_play_click'),
  ctaClick: (ctaText: string) => trackEvent('cta_click', { cta_text: ctaText }),
  checkoutClick: () => trackEvent('checkout_click'),
  lead: (source?: string) => trackEvent('lead', { source }),
  beginCheckout: () => trackEvent('begin_checkout'),
  orderBumpClick: () => trackEvent('order_bump_click'),
}
