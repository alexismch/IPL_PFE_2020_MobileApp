import React from 'react';
import {  IonCard, IonCardHeader,  IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel } from '@ionic/react';
import { warning, personOutline, calendarOutline} from 'ionicons/icons';

const DoctorCard: React.FC<{
    firstname: string;
    lastname:string;
    date: string;
}> = ({firstname,lastname,date}) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Dr {lastname}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem >
                    <IonIcon icon={personOutline} slot="start"/>
                    <IonLabel>{firstname} {lastname}</IonLabel>
                </IonItem>

                <IonItem >
                    <IonIcon icon={calendarOutline} slot="start" />
                    <IonLabel>{date}</IonLabel>
                </IonItem>

                <IonItem >
                    <IonIcon icon={warning} slot="start" />
                    <IonLabel>Positif</IonLabel>
                </IonItem>
            </IonCardContent>
        </IonCard>

    );
};

export default DoctorCard;
