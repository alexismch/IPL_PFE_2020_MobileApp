import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkedAlt } from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";
import {
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonSkeletonText,
} from "@ionic/react";
import Location from "../@types/Location";

const LocationCard: React.FC<{
  location?: Location;
}> = ({ location }) => {
  if (!location) {
    return (
      <div className="LocationCard">
        <IonCardHeader>
          <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
          <IonCardSubtitle style={{ width: "100%", padding: "0 25%" }}>
            <IonSkeletonText animated style={{ height: "1em" }} />
          </IonCardSubtitle>
          <IonCardTitle style={{ width: "100%", padding: "0 15%" }}>
            <IonSkeletonText animated style={{ height: "1em" }} />
          </IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <p style={{ height: "1em" }}>
            <IonSkeletonText animated />
            <IonSkeletonText animated />
            <IonSkeletonText animated />
            <IonSkeletonText animated />
            <IonSkeletonText animated />
          </p>
        </IonCardContent>
      </div>
    );
  }

  return (
    <div className="LocationCard">
      <IonCardHeader>
        <FontAwesomeIcon icon={faMapMarkedAlt} size="3x" />
        <IonCardSubtitle>{location?.owner_name}</IonCardSubtitle>
        <IonCardTitle>{location?.name}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>{location?.description}</p>
      </IonCardContent>
    </div>
  );
};

export default LocationCard;
