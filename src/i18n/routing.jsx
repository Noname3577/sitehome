import { createNavigation } from "next-intl/navigation"
import { defineRouting } from "next-intl/routing"

export const routing = defineRouting({
    locales: ["en", "th"],
    defaultLocale: "th",
    pathnames: {
        "/": "/",
        "/pathnames": {
            en: "/pathnames",
            th: "/pfadnamen"
        }
    }
})

export const {
    Link,
    getPathname,
    redirect,
    usePathname,
    useRouter
} = createNavigation(routing)
