import React from "react";
import { IonContent, IonPage } from "@ionic/react";
import { useParams } from "react-router";
import Header from "../components/Header";

const QrCodeDetailPage: React.FC = () => {
  const { id } = useParams();

  console.log(id);

  return (
    <IonPage>
      <Header title="QR Code" />
      <IonContent>QR: {id}</IonContent>
    </IonPage>
  );
};

export default QrCodeDetailPage;
