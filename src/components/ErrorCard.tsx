import { IonText } from "@ionic/react";
import React from "react";

const ErrorCard: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <div className="Error">
      <IonText color="danger">
        <p>{message}</p>
      </IonText>
    </div>
  );
};

export default ErrorCard;
