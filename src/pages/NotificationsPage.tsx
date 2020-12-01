import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import NotificationContainer from "../components/NotificationContainer";
import Header from "../components/Header";

const NotificationsPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Notifications" />
      <IonContent>
        <NotificationContainer name="Notif" />
      </IonContent>
    </IonPage>
  );
};

export default NotificationsPage;
