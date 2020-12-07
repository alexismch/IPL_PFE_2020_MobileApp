import React from 'react';
import {IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel} from '@ionic/react';
import {calendarOutline,} from 'ionicons/icons';

const LocationCard: React.FC<{
    name: string;
    desc: string;
    date: string;
}> = ({name,desc,date}) => {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>{name}</IonCardTitle>
                <IonCardSubtitle>{desc}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>
                <IonItem>
                    <IonIcon icon={calendarOutline} slot="start" />
                    <IonLabel>{date}</IonLabel>
                </IonItem>
            </IonCardContent>
        </IonCard>

    );
};

export default LocationCard;
