import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function IndexPage({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return <div></div>;
}
