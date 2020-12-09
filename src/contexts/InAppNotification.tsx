import React, { useCallback, useEffect, useState } from "react";
import { createCtx } from "./utils";
import firebase from "firebase/app";
import "firebase/messaging";
import { useAuthContext } from "./AuthContext";
import { useToast } from "@agney/ir-toast";
import { IonAlert } from "@ionic/react";

const firebaseConfig = {
  apiKey: "AIzaSyCwCk7h5A3bK430ExwNDB4gaPvPq4L76ic",
  authDomain: "ipl-pfe-2020.firebaseapp.com",
  projectId: "ipl-pfe-2020",
  storageBucket: "ipl-pfe-2020.appspot.com",
  messagingSenderId: "296580355377",
  appId: "1:296580355377:web:3c85fbce6e75afccdf8c10",
};

firebase.initializeApp(firebaseConfig);

interface InAppNotification {
  fcmToken: string | undefined;
  fcmTokenPending: boolean;
  hasPermissions: boolean;
  requestFirebaseNotificationPermission: () => Promise<void>;
}

const [useInAppNotification, CtxProvider] = createCtx<InAppNotification>();

const InAppNotificationProvider: React.FC = ({ children }) => {
  const { isRegistered } = useAuthContext();
  const Toast = useToast();

  const checkNotificationPermission = () =>
    !!("Notification" in window) && Notification.permission === "granted";

  const [messaging, setMessaging] = useState<
    firebase.messaging.Messaging | undefined
  >(undefined);
  const [firebaseError, setFirebaseError] = useState<Error | undefined>(
    undefined
  );

  const [hasPermissions, setHasPermissions] = useState<boolean>(
    checkNotificationPermission()
  );
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [fcmToken, setFcmToken] = useState<string | undefined>(undefined);
  const [fcmTokenPending, setFcmTokenPending] = useState<boolean>(false);

  useEffect(() => {
    try {
      const messaging = firebase.messaging();
      setMessaging(messaging);
    } catch (err) {
      setFirebaseError(err);
    }
  }, []);

  const toast = useCallback(() => {
    if (firebaseError) {
      Toast.error(
        "Les notifications push ne sont pas supportée par votre navigateur"
      );
    } else if (!hasPermissions) {
      Toast.error(
        "Veuillez activer les notifications pour utiliser l'application"
      );
    }
  }, [firebaseError, hasPermissions, Toast]);

  useEffect(() => {
    toast();
  }, [toast]);

  useEffect(() => {
    console.log({ fcmToken });
    if (fcmToken) {
      messaging?.onMessage((payload) => {
        console.log(payload);
        const toast = Toast.create({ message: payload });
        toast.present();
      });
    }
  }, [fcmToken, messaging, Toast]);

  const requestFirebaseNotificationPermission = useCallback(async () => {
    if (!firebaseError) {
      await Notification.requestPermission();
      const granted = checkNotificationPermission();
      console.log({ granted });
      setHasPermissions(granted);
      toast();
      if (granted) {
        console.log("waiting for token");
        setFcmTokenPending(true);
        const fcmToken = await messaging?.getToken();
        setFcmTokenPending(false);
        setFcmToken(fcmToken);
        console.log("token finally");
      } else {
        setShowPopup(true);
      }
    } else {
      toast();
    }
  }, [firebaseError, messaging, toast]);

  useEffect(() => {
    if (isRegistered && !fcmToken) {
      requestFirebaseNotificationPermission();
    }
  }, [isRegistered, fcmToken, requestFirebaseNotificationPermission]);

  const exposed = {
    fcmToken,
    fcmTokenPending,
    hasPermissions,
    requestFirebaseNotificationPermission,
  };

  return (
    <CtxProvider value={exposed}>
      {children}
      <IonAlert
        isOpen={showPopup}
        onDidDismiss={() => setShowPopup(false)}
        header={"Notification request"}
        message={
          "This app need to have access to the notifications to send you alert if you have been in contact with someone how has COVID-19"
        }
        buttons={[
          {
            text: "Dismiss",
            role: "cancel",
            cssClass: "secondary",
          },
          {
            text: "Ok, let's enable them !",
            handler: () => {
              requestFirebaseNotificationPermission();
            },
          },
        ]}
      />
    </CtxProvider>
  );
};

export { useInAppNotification, InAppNotificationProvider };
