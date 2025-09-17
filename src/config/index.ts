import { env } from "./env";

export const config={
    api:{
        baseUrl:env.BACKEND_URL,
        auth:"/auth",
        auction:"/auction",       
    },
    sentry_Dsn:env.SENTRY_DSN,
    storage_key:env.STORAGE_KEY
}