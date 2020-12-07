import React from "react";
import { IonButton } from "@ionic/react";
import firebase from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";

const RegisterContainer: React.FC = () => {
  const [tokenFirebase, setTokenFirebase] = React.useState<string>();
  const { register } = useAuthContext();

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
    register(data);
  };

  return (
    <>
      <IonButton onClick={sendRegisterData}>S'enregistrer</IonButton>
      <h1>Enregister vous pour utiliser l'application</h1>
    </>
  );
};

export default RegisterContainer;
