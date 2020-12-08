import React from 'react';
import {IonItem, IonList, IonListHeader} from '@ionic/react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import NotificationService from "../services/api/notification";
import Notification from "../@types/Notification";
import ListEntry from "./ListEntry";
import QrCodeType from "../@types/QrCodeType";


const NotificationList: React.FC = () => {
    const [notifs, setNotifs] = useState<Notification[]>([])
    const hook = () => {
        NotificationService.getAll().then((notifications: Notification[]) => {
            setNotifs(notifications);
        });
    }
    useEffect(hook, [])
    console.log('Notifications', notifs)

    return (
        <IonList>
            {notifs.length > 0 ? (
                notifs.map((notif) => (
                    <ListEntry
                        mainTitle={notif.date}
                        type={"notification"}
                        desc={notif.message}
                    />
                ))
            ) : (
                <div>Pas encore de notifications recues</div>
            )}
        </IonList>
    );
};

export default NotificationList;
