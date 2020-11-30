import React from 'react';
import './RegisterContainer.css';
import { IonList, IonItem, IonLabel, IonInput, IonToggle, IonRadio, IonCheckbox, IonItemSliding, IonItemOption, IonItemOptions, IonContent } from '@ionic/react';


interface ContainerProps {
    name: string;
}

const NotificationContainer: React.FC<ContainerProps> = ({ name }) => {
    return (
        <div className="container">
            <IonList>
                <IonItem>
                    <IonLabel>Pokémon Yellow</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Mega Man X</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>The Legend of Zelda</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Pac-Man</IonLabel>
                </IonItem>
                <IonItem>
                    <IonLabel>Super Mario World</IonLabel>
                </IonItem>
            </IonList>
        </div>
    );
};

export default NotificationContainer;
