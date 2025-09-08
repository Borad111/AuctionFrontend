export const env={
    BACKEND_URL:process.env.NEXT_PUBLIC_BACKEND_URL,
    NODE_ENV:process.env.NODE_ENV,
    SENTRY_DSN:process.env.NEXT_PUBLIC_SENTRY_DSN,
    STORAGE_KEY:process.env.NEXT_PUBLIC_STORAGE_KEY || 'fallback-key'
}