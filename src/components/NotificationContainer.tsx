import React from 'react';
import {IonItem, IonList} from '@ionic/react';
import { useState, useEffect } from 'react'
import axios from 'axios'
import NotificationService from "../services/api/notification";
import Notification from "../@types/Notification";


const NotificationContainer: React.FC = () => {
    const [notifs, setNotifs] = useState<Notification[]>([])
    const hook = () => {
        NotificationService.getAll().then((notifications: Notification[]) => {
            setNotifs(notifications);
        });
    }
    useEffect(hook, [])
    console.log('Notifications', notifs)

    return (
        <div className="container">

        </div>
    );
};

export default NotificationContainer;
