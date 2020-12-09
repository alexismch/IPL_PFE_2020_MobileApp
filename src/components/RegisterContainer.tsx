import React from "react";
import { IonButton } from "@ionic/react";
import { useAuthContext } from "../contexts/AuthContext";
import { useToast } from "@agney/ir-toast";
import { requestFirebaseNotificationPermission } from "../firebase";

const RegisterContainer: React.FC = () => {
  const [tokenFirebase, setTokenFirebase] = React.useState<string>();
  const { register } = useAuthContext();
  const Toast = useToast();

  React.useEffect(() => {
    requestFirebaseNotificationPermission()
      .then((firebaseToken) => {
        setTokenFirebase(firebaseToken);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const sendRegisterData = () => {
    if (tokenFirebase) {
      console.log("notif activée");
      const data = {
        fcmToken: tokenFirebase,
      };
      register(data);
    } else
      Toast.error(
        "Veuillez activer les notifications pour utiliser l'application"
      );
  };

  return (
    <>
      <IonButton onClick={sendRegisterData}>S'enregistrer</IonButton>
      <h1>Enregister vous pour utiliser l'application</h1>
    </>
  );
};

export default RegisterContainer;
