import React from 'react';
import './RegisterContainer.css';
import {IonButton} from "@ionic/react";

interface ContainerProps {
  name: string;
}

const RegisterContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
        <p><IonButton color="warning"><strong>{name}</strong></IonButton></p>
        <h1>Enregister vous pour accéder a la fonctionalité de scan</h1>
    </div>
  );
};

export default RegisterContainer;
