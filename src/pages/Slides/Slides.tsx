import React from "react";
import { IonSlides, IonContent } from "@ionic/react";
import RegisterButton from "./RegisterButton";
import Slide from "./Slide";
import { useTranslation } from "react-i18next";

export const Slides: React.FC = () => {
  const { t } = useTranslation();

  return (
    <IonContent className="Slides">
      <IonSlides pager={true}>
        <Slide
          title={t("Sildes.Silde1.title")}
          message={t("Sildes.Silde1.description")}
          imagesSrc="assets/images/slide1.png"
        />
        <Slide
          title={t("Sildes.Silde2.title")}
          message={t("Sildes.Silde2.description")}
          imagesSrc="assets/images/slide2.png"
        />
        <Slide
          title={t("Sildes.Silde3.title")}
          message={t("Sildes.Silde3.description")}
          imagesSrc="assets/images/slide3.png"
        >
          <RegisterButton />
        </Slide>
      </IonSlides>
    </IonContent>
  );
};

export default Slides;
