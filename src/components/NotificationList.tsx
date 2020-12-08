import React from "react";
import { IonList } from "@ionic/react";
import { useState, useEffect } from "react";
import NotificationService from "../services/api/notification";
import Notification from "../@types/Notification";
import ListItem from "./ListItem";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";

const NotificationList: React.FC = () => {
  const [notifs, setNotifs] = useState<Notification[]>([]);

  useEffect(() => {
    NotificationService.getAll().then((notifications: Notification[]) => {
      setNotifs(notifications);
    });
  }, []);

  return (
    <IonList>
      {notifs.length > 0 ? (
        notifs.map((notif) => (
          <ListItem
            key={notif.id}
            title={notif.date}
            description={notif.message}
            faIcon={faExclamation}
          />
        ))
      ) : (
        <div>Pas encore de notifications recues</div>
      )}
    </IonList>
  );
};

export default NotificationList;
