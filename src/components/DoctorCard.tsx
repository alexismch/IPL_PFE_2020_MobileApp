import React from "react";
import { IonCardHeader, IonCardTitle, IonCardContent } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNotesMedical } from "@fortawesome/free-solid-svg-icons";

const DoctorCard: React.FC<{
  firstname: string;
  lastname: string;
}> = ({ firstname, lastname }) => {
  return (
    <div className="DoctorCard">
      <IonCardHeader>
        <FontAwesomeIcon icon={faNotesMedical} size="3x" />
        <IonCardTitle>
          Dr. {firstname} {lastname}
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <p>
          Vous avez été diagnostiqué positif au coronavirus par Dr. {lastname}
        </p>
      </IonCardContent>
    </div>
  );
};

export default DoctorCard;
