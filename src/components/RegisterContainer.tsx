import React from 'react';
import './RegisterContainer.css';
import {IonButton} from "@ionic/react";
import axios from "axios";
import {useLocation} from "react-router";


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
    const location = useLocation();

    if (!ID) {
        return (
            <>
                <IonButton onClick={sendRegisterData}>S'enregistrer</IonButton>
                <h1>Enregister vous pour utiliser l'application</h1>
            </>
        );
    } else {
        return (
            <>
                <IonButton routerLink={location.pathname}>Continuer vers la page</IonButton>
                <h1>Vous êtes connecté</h1>
                <p>Votre ID personnel : {ID}</p>
            </>
        );
    }
};



export default RegisterContainer;
