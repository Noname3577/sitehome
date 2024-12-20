import { useTranslations } from "next-intl"
import { setRequestLocale } from "next-intl/server"
import Header_top from "@/components/Header_top"


export default function IndexPage({ locale }) {
    setRequestLocale(locale)
    const t = useTranslations("HomePage")

    return (
        <div>
            < Header_top />
        </div>
    )
}
