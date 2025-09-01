import { en } from "zod/locales";
import { env } from "./env";

export const config={
    api:{
        baseUrl:env.BACKEND_URL,
       authApi:`${env.BACKEND_URL}/auth`
    },
    sentry_Dsn:env.SENTRY_DSN,
}