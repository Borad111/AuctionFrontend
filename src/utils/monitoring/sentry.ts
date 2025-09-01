import * as Sentry from "@sentry/react";
import { config } from "@/config";
import { env } from "@/config/env";


export function initSentry() {
if (env.SENTRY_DSN) {
Sentry.init({ dsn:env.SENTRY_DSN, environment: process.env.NODE_ENV });
}
}