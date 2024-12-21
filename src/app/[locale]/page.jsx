import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Header_top from "@/components/Header_top";
import BHeader_center from "@/components/BHeader_center";

export default function IndexPage({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return (
    <div>
      <div>
        <Header_top />
      </div>
      <div>
        <BHeader_center />
      </div>
    </div>
  );
}
