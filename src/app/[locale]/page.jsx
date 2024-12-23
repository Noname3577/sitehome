import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import ImageSlider from "@/components/image_slider/image-slider.jsx";

export default function IndexPage({ locale }) {
  setRequestLocale(locale);
  const t = useTranslations("HomePage");

  return (
    <div>
      <div>
        <ImageSlider />
      </div>
      <div>
        <h1>{t("title")}</h1>
      </div>
    </div>
  );
}
