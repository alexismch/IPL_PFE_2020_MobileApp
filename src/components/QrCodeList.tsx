import React, {useEffect, useState} from "react";
import {IonItem, IonLabel, IonList} from "@ionic/react";
import axios from "axios";

const QrCodeList: React.FC = () => {
    const [list, setList] = useState([])
    const hook = () => {
        console.log('effect')
        axios
            .get('http://localhost:3001/qrCodesHistory')
            .then(response => {
                console.log('promise fulfilled')
                setList(response.data)
            })
    }
    useEffect(hook, [])
    console.log('render', list, 'notes')

    return (
        <div className="container">
                <IonList>
                {list.map(qrCode => (
                        <IonItem key={qrCode["UUID"]} >
                            <IonLabel>
                                <h2>Nom : {qrCode["name"]}</h2>
                                <h3>Type : {qrCode["origin"]}</h3>
                                <p>Date : {qrCode["datetime"]}</p>
                            </IonLabel>
                        </IonItem>
                ))}
                </IonList>
        </div>
    );
};

export default QrCodeList;
