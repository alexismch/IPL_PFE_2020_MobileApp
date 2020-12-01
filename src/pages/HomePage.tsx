import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButtons,
  IonButton,
} from "@ionic/react";
import QrCodeList from "../components/QrCodeList";
import { qrCodeOutline, notificationsOutline } from "ionicons/icons";

const HomePage: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>BlockCovid</IonTitle>
          <IonButtons slot="primary">
            <IonButton color="dark" routerLink="/notifications">
              <IonIcon slot="icon-only" icon={notificationsOutline} />
            </IonButton>
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <QrCodeList />
        <IonFab vertical="bottom" horizontal="end" slot="fixed">
          <IonFabButton routerLink="/scanner">
            <IonIcon icon={qrCodeOutline} />
          </IonFabButton>
        </IonFab>
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
