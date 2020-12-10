import React, { useEffect, useState } from "react";
import { IonButton, IonSpinner } from "@ionic/react";
import { useAuthContext } from "../../contexts/AuthContext";
import { useInAppNotification } from "../../contexts/InAppNotification";
import { useTranslation } from "react-i18next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFingerprint } from "@fortawesome/free-solid-svg-icons";

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
      <span slot="start" style={{ marginRight: "7px" }}>
        <FontAwesomeIcon icon={faFingerprint} />
      </span>
    </IonButton>
  );
};

export default RegisterButton;
