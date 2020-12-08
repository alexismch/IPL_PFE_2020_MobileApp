import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import {
  faNotesMedical,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCodeType from "../@types/QrCodeType";

const HistoryEntry: React.FC<{
  name: string;
  type: string;
  datetime: string;
  id: string;
}> = ({ name, type, datetime, id }) => {
  return (
    <IonItem button={true} routerLink={`/history/${id}`}>
      <IonAvatar slot="start">
        {type === QrCodeType.DOCTOR ? (
          <FontAwesomeIcon icon={faNotesMedical} size="2x" />
        ) : (
          <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
        )}
      </IonAvatar>
      <IonLabel>
        <h2>{name}</h2>
        <p>{datetime}</p>
      </IonLabel>
    </IonItem>
  );
};

export default HistoryEntry;
