import React from "react";
import { IonContent, IonPage, IonButton, IonIcon } from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";
import "./NotFoundPage.css";
import Header from "../components/Header";

const NotFoundPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="BlockCovid" />
      <IonContent>
        <div className="layout-404">
          <h1>404</h1>
          <p>Not found</p>
          <img src="assets/images/virus.png" alt="virus-icon" />
          <IonButton color="primary" routerLink="/" routerDirection="back">
            <IonIcon icon={arrowBackOutline} /> Go to home page
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NotFoundPage;
