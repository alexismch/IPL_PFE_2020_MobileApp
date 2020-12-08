import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
} from "@ionic/react";

const LocationCard: React.FC<{
  name: string;
  description: string;
  ownerName: string;
}> = ({ name, description, ownerName }) => {
  return (
    <div className="LocationCard">
      <IonCardHeader>
        <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
        <IonCardSubtitle>{ownerName}</IonCardSubtitle>
        <IonCardTitle>{name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{description}</p>
      </IonCardContent>
    </div>
  );
};

export default LocationCard;
