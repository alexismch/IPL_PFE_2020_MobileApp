import React from 'react';
import './RegisterContainer.css';
import {IonButton} from "@ionic/react";
import axios from "axios";




const RegisterContainer: React.FC = () => {
    const [ID, setID] = React.useState<string>();

    const sendRegisterData =() => {
        let UID = '123456654135012ddd'
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
            <div className="container">
                <p><IonButton color="warning" onClick={sendRegisterData}><strong>S'enregistrer</strong></IonButton></p>
                <h1>Enregister vous pour accéder a la fonctionalité de scan</h1>
            </div>
        );
    } else {
        return (
            <div className="container">
                <h1>Vous êtes connecté</h1>
                <p>Votre ID personnel : {ID}</p>
            </div>
        );

    }


};



export default RegisterContainer;
