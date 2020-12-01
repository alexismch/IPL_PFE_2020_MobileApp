import React, {useState} from 'react';
import './RegisterContainer.css';
import {IonButton} from "@ionic/react";
import axios from "axios";

interface ContainerProps {
  name: string;
}


const RegisterContainer: React.FC<ContainerProps> = ({ name }) => {
    const [txt, setTxt] = useState([])


  return (
    <div className="container">
        <p><IonButton color="warning" onClick={sendPostData}><strong>{name}</strong></IonButton></p>
        <h1>Enregister vous pour accéder a la fonctionalité de scan</h1>
        <p></p>
    </div>
  );
};

const sendPostData =() => {
    let ID = '123456789sssssssss'
    const data = {
        content: ID,
        date: new Date(),
        important: Math.random() < 0.5,
    }

    axios
        .post('http://localhost:3001/notes', data)
        .then(response => {
            console.log("Connexion")
        })
}

export default RegisterContainer;
