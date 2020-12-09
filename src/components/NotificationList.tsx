import React from "react";
import { IonList } from "@ionic/react";
import { useState, useEffect } from "react";
import NotificationService from "../services/api/notification";
import Notification from "../@types/NotificationFromAPI";
import ListItem from "./ListItem";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import SkeletonItem from "./SkeletonItem";
import EmptyListItem from "./EmptyListItem";

const NotificationList: React.FC = () => {
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
            title={notif.date}
            description={notif.message}
            faIcon={faExclamation}
          />
        ))
      ) : isLoading ? (
        Array.apply(null, Array(5)).map((elem, keyIndex) => (
          <SkeletonItem key={keyIndex} />
        ))
      ) : (
        <EmptyListItem message="Aucune notification reçue" />
      )}
    </IonList>
  );
};

export default NotificationList;
