import React, { useEffect, useState } from "react";
import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import { useAuthContext } from "../../contexts/AuthContext";
import { arrowForwardOutline } from "ionicons/icons";
import { useInAppNotification } from "../../contexts/InAppNotification";

const RegisterContainer: React.FC = () => {
  const {
    fcmToken,
    hasPermissions,
    requestFirebaseNotificationPermission,
  } = useInAppNotification();
  const { register } = useAuthContext();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fcmTokenPending, setFcmTokenPending] = useState<boolean>(false);

  useEffect(() => {
    if (fcmToken) {
      const data = {
        fcmToken,
      };
      register(data);
    }
  }, [fcmToken, register]);

  useEffect(() => {
    if (fcmTokenPending && hasPermissions) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [fcmTokenPending, hasPermissions]);

  if (isLoading) return <IonSpinner />;

  const sendRegisterData = () => {
    setFcmTokenPending(true);
    requestFirebaseNotificationPermission();
  };

  return (
    <IonButton
      onClick={sendRegisterData}
      fill="clear"
      size="large"
      shape="round"
      style={{ marginTop: "1em" }}
    >
      S'enregistrer
      <IonIcon icon={arrowForwardOutline} slot="end" />
    </IonButton>
  );
};

export default RegisterContainer;
