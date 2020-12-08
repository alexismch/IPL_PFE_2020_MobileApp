import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import {
  faNotesMedical,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import QrCodeType from "../@types/QrCodeType";
import {faExclamation} from "@fortawesome/free-solid-svg-icons/faExclamation";

const ListEntry: React.FC<{
  mainTitle: string;
  type: string;
  desc: string;
  id?: string;
}> = ({ mainTitle, type, desc, id }) => {
  return (
    <IonItem button={true} routerLink={`/history/${id}`}>
      <IonAvatar slot="start">
        {type === QrCodeType.DOCTOR ? (
          <FontAwesomeIcon icon={faNotesMedical} size="2x" />
        ) : (
            type === QrCodeType.LOCATION ? (
                <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
            ) : (
                <FontAwesomeIcon icon={faExclamation} size="2x" />
            )
        )}
      </IonAvatar>
      <IonLabel>
        <h2>{mainTitle}</h2>
        <p>{desc}</p>
      </IonLabel>
    </IonItem>
  );
};

export default ListEntry;
