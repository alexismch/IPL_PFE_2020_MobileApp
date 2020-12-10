import React from "react";
import { IonFab, IonFabButton, IonIcon, IonButton } from "@ionic/react";
import HistoryList from "../components/HistoryList";
import { qrCodeOutline, notificationsOutline } from "ionicons/icons";
import Page from "./Page";
import { useTranslation } from "react-i18next";

const HomePage: React.FC = () => {
  const { t } = useTranslation();

  const headerEndButtons = (
    <>
      <IonButton routerLink="/notifications">
        <IonIcon slot="icon-only" icon={notificationsOutline} />
      </IonButton>
    </>
  );

  return (
    <Page
      title={t("appName")}
      headerEndButtons={headerEndButtons}
      backButton={false}
    >
      <HistoryList />
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/scanner">
          <IonIcon icon={qrCodeOutline} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
};

export default HomePage;
