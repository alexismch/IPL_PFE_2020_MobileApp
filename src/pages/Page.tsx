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
import Slides from "./Slides";
import { useAuthContext } from "../contexts/AuthContext";

const Page: React.FC<{
  title: string;
  backUrl?: string;
  backButton?: boolean;
  headerEndButtons?: React.ReactNode;
}> = ({
  title,
  backButton = true,
  backUrl = "/",
  headerEndButtons,
  children,
}) => {
  const { isRegistered } = useAuthContext();
  return (
    <>
      {isRegistered ? (
        <IonPage>
          <IonHeader>
            <IonToolbar color="primary">
              <IonTitle>{title}</IonTitle>
              {backButton && (
                <IonButtons slot="start">
                  <IonBackButton defaultHref={backUrl} />
                </IonButtons>
              )}
              {headerEndButtons && (
                <IonButtons slot="end">{headerEndButtons}</IonButtons>
              )}
            </IonToolbar>
          </IonHeader>
          <IonContent>{children}</IonContent>
        </IonPage>
      ) : (
        <Slides />
      )}
    </>
  );
};

export default Page;
