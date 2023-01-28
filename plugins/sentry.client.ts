import * as Sentry from "@sentry/vue";
import { BrowserTracing } from "@sentry/tracing";

export default defineNuxtPlugin((nuxtApp)=>{
    
    const app=nuxtApp.vueApp
    const router=useRouter()
    Sentry.init({
        app,
        dsn: "https://5332f3996b5d4d98ba3906140e3bc3b9@o4504583063666688.ingest.sentry.io/4504583091978240",
        integrations: [
            new BrowserTracing({
            routingInstrumentation: Sentry.vueRouterInstrumentation(router),
            tracePropagationTargets: ["localhost", "my-site-url.com", /^\//],
            }),
        ],
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
    });
})