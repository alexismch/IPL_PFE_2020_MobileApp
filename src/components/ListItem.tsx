import React from "react";
import { IonAvatar, IonItem, IonLabel } from "@ionic/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-common-types";

const ListItem: React.FC<{
  title?: string;
  description?: string;
  routerLink?: string;
  faIcon: IconDefinition;
}> = ({ title, description, routerLink, faIcon }) => {
  return (
    <IonItem button={routerLink !== undefined} routerLink={routerLink} >
      <IonAvatar slot="start">
        <FontAwesomeIcon icon={faIcon} size="2x" />
      </IonAvatar>
      <IonLabel className="ion-text-wrap">
        <h2>{title}</h2>
        <p>{description}</p>
      </IonLabel>
    </IonItem>
  );
};

export default ListItem;
