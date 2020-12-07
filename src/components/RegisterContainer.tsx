import React from "react";
import "./RegisterContainer.css";
import { IonButton } from "@ionic/react";
import firebase from "../firebase";
import { useAuthContext } from "../contexts/AuthContext";
import {useToast} from "@agney/ir-toast";

const RegisterContainer: React.FC = () => {
  const [tokenFirebase, setTokenFirebase] = React.useState<string>();
  const { register } = useAuthContext();
  const Toast = useToast();

  React.useEffect(() => {
    const msg = firebase.messaging();
    Notification.requestPermission()
      .then(() => {
        return msg.getToken();
      })
      .then((data) => {
        setTokenFirebase(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  console.log("data envoyer = " + tokenFirebase);

  const sendRegisterData = () => {
    if(tokenFirebase){
      console.log("notif activée")
      const data = {
        fcmToken: tokenFirebase,
      };
      register(data);
    }else
      Toast.error("Veuillez activer les notifications pour utiliser l'application");


  };

  return (
    <>
      <IonButton onClick={sendRegisterData}>S'enregistrer</IonButton>
      <h1>Enregister vous pour utiliser l'application</h1>
    </>
  );
};

export default RegisterContainer;
