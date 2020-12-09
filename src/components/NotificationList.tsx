import React from "react";
import { IonList } from "@ionic/react";
import { useEffect } from "react";
import ListItem from "./ListItem";
import { faExclamation } from "@fortawesome/free-solid-svg-icons/faExclamation";
import { useNotificationsContext } from "../contexts/NotificationContext";
import SkeletonItem from "./SkeletonItem";
import EmptyListItem from "./EmptyListItem";

const NotificationList: React.FC = () => {
  const { initialize, notifications, loading } = useNotificationsContext();
  useEffect(() => {
    initialize();
  }, [initialize]);

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
      ) : loading ? (
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
