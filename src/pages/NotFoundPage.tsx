import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import Page from "./Page";

const NotFoundPage: React.FC = () => {
  return (
    <Page title="404 Not Found" className="NotFoundPage">
      <h1>404</h1>
      <p>Not found</p>
      <img src="assets/images/virus.png" alt="virus-icon" />
      <IonButton color="primary" routerLink="/" routerDirection="back">
        <IonIcon icon={arrowBackOutline} /> Go to home page
      </IonButton>
    </Page>
  );
};

export default NotFoundPage;
