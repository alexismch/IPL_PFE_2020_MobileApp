import React from 'react';
import {IonList} from '@ionic/react';
import { useState, useEffect } from 'react'
import NotificationService from "../services/api/notification";
import Notification from "../@types/NotificationFromAPI";
import ListItem from "./ListItem";
import {faExclamation} from "@fortawesome/free-solid-svg-icons/faExclamation";
import SkeletonItem from "./SkeletonItem";


const NotificationList: React.FC = () => {
  const [notifs, setNotifs] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const hook = () => {
    NotificationService.getAll().then((notifications: Notification[]) => {
      setNotifs(notifications);
      setIsLoading(false)
    });
  }
  useEffect(hook, [])
  console.log('Notifications', notifs)

  return (
      <IonList>
        {notifs.length > 0 ? (
            notifs.map((notif) => (
                <ListItem
                    key = {notif.id}
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
            <div>Pas encore de notifications recues</div>
        )}
      </IonList>
  );
};

export default NotificationList;