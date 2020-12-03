import React from 'react';
import './RegisterContainer.css';
import {IonButton} from "@ionic/react";
import axios from "axios";


const RegisterContainer: React.FC = () => {
    const [ID, setID] = React.useState<string>();

    const sendRegisterData =() => {
        let UID = Math.random().toString(36).substring(7);
        const data = {
            device: UID
        }
        axios
            .post('https://ipl-pfe-2020-dev.herokuapp.com/api/citizens', data)
            .then(r => {
                console.log("POST success")
                setID(r.data['device'])
                localStorage.setItem("UID", data['device'])
        });
    }

    if (!ID) {
        return (
            <>
                <IonButton onClick={sendRegisterData}>S'enregistrer</IonButton>
                <h1>Enregister vous pour accéder a la fonctionalité de scan</h1>
            </>
        );
    } else {
        return (
            <>
                <IonButton routerLink="/home">Retour page d'acceuil</IonButton>
                <h1>Vous êtes connecté</h1>
                <p>Votre ID personnel : {ID}</p>
            </>
        );
    }
};



export default RegisterContainer;
