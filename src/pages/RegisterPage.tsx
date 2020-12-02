import React, { useState } from 'react';
import { IonModal, IonButton, IonContent } from '@ionic/react';
import RegisterContainer from "../components/RegisterContainer";

export const RegisterPage: React.FC = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <IonContent>
            <IonModal isOpen={showModal} cssClass='my-custom-class'>
                {localStorage.getItem("UID") ?
                    <div className="container">
                        <h1>Coucou {localStorage.getItem("UID")}</h1>
                    </div>
                     :
                    <RegisterContainer/>}
                <IonButton onClick={() => setShowModal(false)} routerLink="/" routerDirection="back">Vers la page d'acceuil</IonButton>
            </IonModal>
            <IonButton onClick={() => setShowModal(true)}>S'enregistrer</IonButton>
        </IonContent>
    );


};

export default RegisterPage;