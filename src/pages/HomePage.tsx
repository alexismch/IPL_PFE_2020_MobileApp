import React from "react";
import { IonFab, IonFabButton, IonIcon, IonButton } from "@ionic/react";
import HistoryList from "../components/HistoryList";
import { qrCodeOutline, notificationsOutline } from "ionicons/icons";
import Page from "./Page";

const HomePage: React.FC = () => {
  const headerEndButtons = (
    <>
      <IonButton routerLink="/notifications">
        <IonIcon slot="icon-only" icon={notificationsOutline} />
      </IonButton>
    </>
  );

  return (
    <Page
      title="BlockCovid"
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
