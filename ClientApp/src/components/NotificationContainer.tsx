import React from 'react';
import './RegisterContainer.css';
import {IonItem, IonList} from '@ionic/react';
import { useState, useEffect } from 'react'
import axios from 'axios'


interface ContainerProps {
    name: string;
}


const NotificationContainer: React.FC<ContainerProps> = ({ name }) => {
    const [notifs, setNotif] = useState([])
    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/notes')
            .then(response => {
                console.log('promise fulfilled')
                setNotif(response.data)
            })
    }
    useEffect(hook, [])
    console.log('render', notifs, 'notes')

    return (
        <div className="container">
            <div>
                {notifs.map(notif => (
                    <IonList key={notif["id"]}>
                        <IonItem >
                            {notif["content"]}
                        </IonItem>
                    </IonList>
                ))}
            </div>
        </div>
    );
};

export default NotificationContainer;
