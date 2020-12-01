import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import Scanner from "../components/Scanner";
import Header from "../components/Header";

const ScannerPage: React.FC = () => {
  return (
    <IonPage>
      <Header title="Scanner" />
      <IonContent>
        <Scanner />
      </IonContent>
    </IonPage>
  );
};

export default ScannerPage;
