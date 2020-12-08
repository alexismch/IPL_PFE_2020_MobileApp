import { IonButton, IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import React from "react";
import { useParams } from "react-router";
import Id from "../@types/Id";
import QrCodeType from "../@types/QrCodeType";
import LocationCard from "../components/LocationCard";
import NotFoundPage from "./NotFoundPage";
import Page from "./Page";

const ScanValidationPage: React.FC = () => {
  let { type, id } = useParams<{ type: string; id: Id }>();

  if (type === "l") type = QrCodeType.LOCATION;
  if (type === "d") type = QrCodeType.DOCTOR;
  if (type !== QrCodeType.DOCTOR && type !== QrCodeType.LOCATION)
    return <NotFoundPage />;

  return (
    <Page
      title="QR Code"
      backUrl="/scanner"
      className="ScanValidationPage container"
    >
      <div className="fill-available">
        <LocationCard
          name="Le Coriandre"
          description="Très bon restaurant situé dans le coin du balait à Boisfort"
          ownerName="QQN"
        />
      </div>
      <p className="confirm-question">Êtes-vous bien passé à cet endroit ?</p>
      <div className="btn-container">
        <IonButton color="success" expand="block" size="large" strong>
          <IonIcon icon={checkmarkCircleOutline} slot="start" />
          Confirmer
        </IonButton>
        <IonButton color="danger" expand="block" size="large">
          <IonIcon icon={closeCircleOutline} slot="start" />
          Annuler
        </IonButton>
      </div>
    </Page>
  );
};

export default ScanValidationPage;
