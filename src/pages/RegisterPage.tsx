import React from 'react';
import { IonContent } from '@ionic/react';
import RegisterContainer from "../components/RegisterContainer";
import Page from "./Page";

export const RegisterPage: React.FC = () => {

    return (
        <Page
            title="S'enregistrer"
            backButton={true}
        >
            <IonContent>
                <div className="container">
                    {localStorage.getItem("UID") ?
                        <div className="container">
                            <h1>Coucou {localStorage.getItem("UID")}</h1>
                        </div>
                        :
                        <RegisterContainer/>
                    }
                </div>

            </IonContent>
        </Page>

    );


};

export default RegisterPage;