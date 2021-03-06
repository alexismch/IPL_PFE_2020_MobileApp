import React from "react";
import { IonList } from "@ionic/react";
import { useState, useEffect } from "react";
import NotificationService from "../services/api/notification";
import Notification from "../@types/NotificationFromAPI";
import ListItem from "./ListItem";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import SkeletonItem from "./SkeletonItem";
import EmptyListItem from "./EmptyListItem";
import { useTranslation } from "react-i18next";
import { useAuthContext } from "../contexts/AuthContext";

const NotificationList: React.FC = () => {
  const { t } = useTranslation();
  const { unregister } = useAuthContext();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    NotificationService.getAll(unregister).then(
      (notifications: Notification[]) => {
        setNotifications(notifications);
        setIsLoading(false);
      }
    );
  }, [unregister]);

  return (
    <IonList>
      {notifications.length > 0 ? (
        notifications.map((notif) => (
          <ListItem
            key={notif.id}
            title={t("NotificationList.date", {
              date: notif.date,
              interpolation: { escapeValue: false },
            })}
            description={notif.message}
            faIcon={faExclamation}
          />
        ))
      ) : isLoading ? (
        Array.apply(null, Array(5)).map((_elem, keyIndex) => (
          <SkeletonItem key={keyIndex} />
        ))
      ) : (
        <EmptyListItem message={t("NotificationList.empty")} />
      )}
    </IonList>
  );
};

export default NotificationList;
