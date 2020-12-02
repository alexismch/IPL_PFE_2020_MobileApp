import React from "react";
import { IonFab, IonFabButton, IonIcon, IonButton } from "@ionic/react";
import QrCodeList from "../components/QrCodeList";
import { qrCodeOutline, notificationsOutline,logInOutline} from "ionicons/icons";
import Page from "./Page";

const HomePage: React.FC = () => {
  const headerEndButtons = (
    <>
      <IonButton color="dark" routerLink="/notifications">
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
      <QrCodeList />
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/scanner">
          <IonIcon icon={qrCodeOutline} />
        </IonFabButton>
      </IonFab>

      <IonFab vertical="bottom" horizontal="start" slot="fixed">
        <IonFabButton routerLink="/register">
          <IonIcon icon={logInOutline} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
};

export default HomePage;
