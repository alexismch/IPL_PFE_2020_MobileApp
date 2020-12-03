import React from "react";
import { IonLabel} from "@ionic/react";

const QrCodeDetails: React.FC<{
    name: string;
    type: string;
    datetime: string;
}> = ({name,type,datetime}) => {
    return (
        <div>
                <IonLabel>
                    <h2>Nom : {name}</h2>
                    <h3>Type : {type}</h3>
                    <p>Date : {datetime}</p>
                </IonLabel>
        </div>
    );
};

export default QrCodeDetails;
