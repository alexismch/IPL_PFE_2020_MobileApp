import React from "react";
import { IonItem, IonLabel } from "@ionic/react";

const EmptyListItem: React.FC<{
  message: string;
}> = ({ message }) => {
  return (
    <IonItem className="EmptyListItem">
      <IonLabel className="ion-text-wrap">
        <p className="big-margin">{message}</p>
      </IonLabel>
    </IonItem>
  );
};

export default EmptyListItem;
