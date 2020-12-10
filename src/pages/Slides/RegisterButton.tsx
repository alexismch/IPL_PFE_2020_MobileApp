import React, { useEffect, useState } from "react";
import { IonButton, IonIcon, IonSpinner } from "@ionic/react";
import { useAuthContext } from "../../contexts/AuthContext";
import { arrowForwardOutline } from "ionicons/icons";
import { useInAppNotification } from "../../contexts/InAppNotification";
import { useTranslation } from "react-i18next";

const RegisterButton: React.FC = () => {
  const { t } = useTranslation();
  const {
    fcmToken,
    fcmTokenPending,
    requestFirebaseNotificationPermission,
  } = useInAppNotification();
  const { register } = useAuthContext();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (fcmToken) {
      const data = {
        fcmToken,
      };
      register(data);
    }
  }, [fcmToken, register]);

  useEffect(() => {
    if (fcmTokenPending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [fcmTokenPending]);

  if (isLoading) return <IonSpinner />;

  const handleClick = () => {
    requestFirebaseNotificationPermission();
  };

  return (
    <IonButton
      onClick={handleClick}
      fill="clear"
      size="large"
      shape="round"
      style={{ marginTop: "1em" }}
    >
      {t("RegisterButton.text")}
      <IonIcon icon={arrowForwardOutline} slot="end" />
    </IonButton>
  );
};

export default RegisterButton;
