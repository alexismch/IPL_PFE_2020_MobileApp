import React from 'react';
import './RegisterContainer.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';


interface ContainerProps {
    name: string;
}

const NotificationContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <IonList >
                <IonItem >
                    <IonLabel>Notification 1</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Notification 2</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Notification 3</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Notification 4</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Notification 5</IonLabel>
                </IonItem>
            </IonList>
        </div>
    );
};

export default NotificationContainer;
