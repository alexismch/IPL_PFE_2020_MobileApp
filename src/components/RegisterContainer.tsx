import React from 'react';
import './RegisterContainer.css';
import {IonButton} from "@ionic/react";
import sendPostData from '../Utils/UtilsAPI'

interface ContainerProps {
  name: string;
}


const RegisterContainer: React.FC<ContainerProps> = ({ name }) => {
    const [items, setItems] = React.useState([]);

    const sendRegisterData =() => {
        let UID = '123456654135012631'
        const data = {
            token: UID
        }
        sendPostData(data);
    }

  return (
    <div className="container">
        <p><IonButton color="warning" onClick={sendRegisterData}><strong>{name}</strong></IonButton></p>
        <h1>Enregister vous pour accéder a la fonctionalité de scan</h1>
    </div>
  );
};



export default RegisterContainer;
