import React, {useEffect, useState} from "react";
import {IonItem, IonLabel, IonList, IonSelect, IonSelectOption} from "@ionic/react";
import axios from "axios";
import QrCodeDetails from "./QrCodeDetails";

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
    console.log('LISTE = ', list)
    const [sort, setSort] = useState<string>();
    switch (sort){
        case "nom":
            list.sort((a, b) => a['name'] < b['name'] ? -1 : a['name'] > b['name'] ? 1 : 0)
            break;
        case "type":
            list.sort((a, b) => a['type'] < b['type'] ? -1 : a['type'] > b['type'] ? 1 : 0)
            break;
        case "date":
            console.log("tri par date");
            break;
    }


    return (
        <div className="container">
            <IonItem>
                <IonLabel>Trier par</IonLabel>
                <IonSelect value={sort} placeholder="Select One" onIonChange={e => setSort(e.detail.value)}  interface="popover">
                    <IonSelectOption value="nom" >Nom</IonSelectOption>
                    <IonSelectOption value="type">Type</IonSelectOption>
                    <IonSelectOption value="date">Date</IonSelectOption>
                </IonSelect>
            </IonItem>
                <IonList>
                {list.map(qrCode => (
                        <IonItem key={qrCode["UUID"]} button={true} routerLink={'/qr/'+qrCode['UUID']} >
                            <IonLabel>
                                <QrCodeDetails name = {qrCode["name"]} type ={qrCode["type"]} datetime={qrCode["datetime"]} />
                            </IonLabel>
                        </IonItem>
                ))}
                </IonList>
        </div>
    );
};


export default QrCodeList;
