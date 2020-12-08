import React from "react";
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonSkeletonText,
} from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";
import Doctor from "../@types/Doctor";

const DoctorCard: React.FC<{
  doctor?: Doctor;
}> = ({ doctor }) => {
  if (!doctor)
    return (
      <div className="DoctorCard">
        <IonCardHeader>
          <FontAwesomeIcon icon={faNotesMedical} size="3x" />
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

  return (
    <div className="DoctorCard">
      <IonCardHeader>
        <FontAwesomeIcon icon={faNotesMedical} size="3x" />
        <IonCardTitle>
          Dr. {doctor.firstName} {doctor.lastName}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          Vous avez été diagnostiqué positif au coronavirus par Dr.{" "}
          {doctor.lastName}
        </p>
      </IonCardContent>
    </div>
  );
};

export default DoctorCard;
