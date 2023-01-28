import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

export default defineNuxtPlugin((nuxtApp)=>{
    
    const app=nuxtApp.vueApp
    const router=useRouter()
    Sentry.init({
        app,
        dsn: "https://75baa9c30f774556bea5fa35ea35c6d9@o4504583063666688.ingest.sentry.io/4504583122780160",
        integrations: [
            new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: ["localhost", "try-nuxt3-sentry.pages.dev", /^\//],
            }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
})