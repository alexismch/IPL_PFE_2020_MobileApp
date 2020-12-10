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
import formatDate from "../services/date";

const NotificationList: React.FC = () => {
  const { t } = useTranslation();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    NotificationService.getAll().then((notifications: Notification[]) => {
      setNotifications(notifications);
      setIsLoading(false);
    });
  }, []);

  return (
    <IonList>
      {notifications.length > 0 ? (
        notifications.map((notif) => (
          <ListItem
            key={notif.id}
            title={"Recue : " + formatDate(notif.date, false)}
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
