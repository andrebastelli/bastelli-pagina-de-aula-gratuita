/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_CHECKOUT_URL: string
  readonly VITE_WHATSAPP_NUMBER: string
  readonly VITE_WHATSAPP_MESSAGE: string
  readonly VITE_GA4_ID: string
  readonly VITE_META_PIXEL_ID: string
  readonly VITE_GTM_ID: string
  readonly VITE_CANONICAL_URL: string
  readonly VITE_VSL_URL: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
