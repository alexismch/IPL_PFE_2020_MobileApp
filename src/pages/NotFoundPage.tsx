import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import Page from "./Page";
import { useTranslation } from "react-i18next";

const NotFoundPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t("NotFoundPage.pageTitle")} className="NotFoundPage">
      <h1>404</h1>
      <p>{t("NotFoundPage.content")}</p>
      <img src="assets/images/virus.png" alt="virus-icon" />
      <IonButton color="primary" routerLink="/" routerDirection="back">
        <IonIcon icon={arrowBackOutline} slot="start" />
        {t("NotFoundPage.back_button")}
      </IonButton>
    </Page>
  );
};

export default NotFoundPage;
