import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import RegisterContainer from "../components/RegisterContainer";
import "./Tab1.css";
import Header from "../components/Header";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <Header title="Start Menu" />
      <IonContent>
        <RegisterContainer name="S'enregistrer" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
