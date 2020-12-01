import React from "react";
import {
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonContent,
  IonPage,
} from "@ionic/react";

const Page: React.FC<{
  title: string;
  backButton?: boolean;
  headerEndButtons?: React.ReactNode;
}> = ({ title, backButton = false, headerEndButtons, children }) => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>{title}</IonTitle>
          {backButton && (
            <IonButtons slot="start">
              <IonBackButton />
            </IonButtons>
          )}
          {headerEndButtons && (
            <IonButtons slot="end">{headerEndButtons}</IonButtons>
          )}
        </IonToolbar>
      </IonHeader>
      <IonContent>{children}</IonContent>
    </IonPage>
  );
};

export default Page;
