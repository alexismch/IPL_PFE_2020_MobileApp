import { IonButton, IonIcon } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import React from "react";

const QrCodeValidationDetails: React.FC<{
  name: string;
  desc: string;
}> = ({ name, desc }) => {
  return (
    <div className="QrCodeValidationDetails">
      <div className="container">
        <div className="content-container">
          <h1>{name}</h1>
          <p>{desc}</p>
        </div>
        <div className="btn-container">
          <IonButton
            color="success"
            className="validate"
            expand="block"
            size="large"
            strong
          >
            <IonIcon icon={checkmarkCircleOutline} slot="start" />
            Validate
          </IonButton>
          <IonButton color="danger" expand="block" size="large">
            <IonIcon icon={closeCircleOutline} slot="start" />
            Cancel
          </IonButton>
        </div>
      </div>
    </div>
  );
};

export default QrCodeValidationDetails;
