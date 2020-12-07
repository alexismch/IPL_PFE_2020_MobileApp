import React from "react";
import "./RegisterContainer.css";
import { IonButton } from "@ionic/react";
import axios from "axios";
import { useLocation } from "react-router";
import firebase from "../firebase";
import Auth from "../services/api/auth";

const RegisterContainer: React.FC = () => {
  const [ID, setID] = React.useState<string>();
  const [tokenFirebase, setTokenFirebase] = React.useState<string>();
  React.useEffect(() => {
    const msg = firebase.messaging();
    Notification.requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        console.warn("token", data);
        setTokenFirebase(data);
      })
      .catch((error) => {
        console.log(error);
      });
    msg.onMessage((payload) => {
      console.log("Message received. ", payload);
      // const { title, ...options } = payload.notification;
    });
  }, []);
  console.log("data envoyer = " + tokenFirebase);

  const sendRegisterData = () => {
    const data = {
      fcmToken: tokenFirebase,
    };
    Auth.register(data).then((success) => {
      if (success) {
        //@ts-ignore
        setID(localStorage.getItem("token").token);
      }
    });
    axios
      .post("https://ipl-pfe-2020-dev.herokuapp.com/api/citizens", data)
      .then((r) => {
        console.log("POST success", r.data);
        setID(r.data["token"]);
        localStorage.setItem("UID", r.data["token"]);
      });
  };
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
        <IonButton routerLink={location.pathname}>
          Continuer vers la page
        </IonButton>
        <h1>Vous êtes connecté</h1>
        <p>Votre ID personnel : {ID}</p>
      </>
    );
  }
};

export default RegisterContainer;
