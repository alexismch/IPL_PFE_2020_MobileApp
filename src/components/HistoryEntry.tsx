import React from "react";
import {IonAvatar, IonBadge, IonIcon, IonItem, IonLabel} from "@ionic/react";
import {person,pin} from "ionicons/icons";
import {faNotesMedical} from "@fortawesome/free-solid-svg-icons/faNotesMedical";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkedAlt} from "@fortawesome/free-solid-svg-icons/faMapMarkedAlt";


const HistoryEntry: React.FC<{
    name: string;
    type: string;
    datetime: string;
    id:string
}> = ({name,type,datetime,id}) => {
    return (
        <IonItem
            key={id}
            button={true}
            routerLink={`/history/${id}`}
        >
            <IonAvatar slot="start" style={{

                padding: "3px",
                color: "white",
                textAlign:"center"}} >
                {
                    type === "Docteur"?<FontAwesomeIcon icon={faNotesMedical} size="2x"/>:
                        <FontAwesomeIcon icon={faMapMarkedAlt} size="2x" />
                }
            </IonAvatar>
                <IonLabel>
                    <h2>{name}</h2>
                    <p>{datetime}</p>

                </IonLabel>
        </IonItem>
    );
};

export default HistoryEntry;
