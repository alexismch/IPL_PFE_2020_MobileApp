import React, {useEffect, useState} from "react";
import {IonItem, IonLabel, IonList, IonSelect, IonSelectOption} from "@ionic/react";
import axios from "axios";
import HistoryEntry from "./HistoryEntry";
import {Link} from "react-router-dom";

const HistoryList: React.FC = () => {
    const [list, setList] = useState([])
    const hook = () => {
        const config = {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer "+localStorage.getItem("UID")
            }
        };
        axios
            .get('https://ipl-pfe-2020-dev.herokuapp.com/api/citizens/history',config)
            .then(response => {
                setList(response.data)
            })
    }

    useEffect(hook, [])
    const [sort, setSort] = useState<string>();
    switch (sort){
        case "nom":
            list.sort((a, b) => a['name'] < b['name'] ? -1 : a['name'] > b['name'] ? 1 : 0)
            break;
        case "type":
            list.sort((a, b) => a['type'] < b['type'] ? -1 : a['type'] > b['type'] ? 1 : 0)
            break;
        case "date":
            list.sort((a, b) => a['scanDate'] < b['scanDate'] ? -1 : a['scanDate'] > b['scanDate'] ? 1 : 0)
            break;
    }


    return (
        <div >
            <IonItem>
                <IonLabel>Trier par</IonLabel>
                <IonSelect value={sort} placeholder="Select One" onIonChange={e => setSort(e.detail.value)}  interface="popover">
                    <IonSelectOption value="nom" >Nom</IonSelectOption>
                    <IonSelectOption value="type">Type</IonSelectOption>
                    <IonSelectOption value="date">Date</IonSelectOption>
                </IonSelect>
            </IonItem>
                <IonList>
                {list.length >0 ?
                    list.map(qrCode => (

                            <IonItem key={qrCode["id"]} button ={true} >
                                <Link to={{
                                    pathname:'/historyDetails',
                                    state: qrCode
                                }}>
                                <IonLabel>
                                    <HistoryEntry name = {qrCode["doctor_firstName"]? qrCode["doctor_firstName"] :qrCode["location_name"] }
                                                  type ={qrCode["doctor_id"]? "Docteur" : "Location"}
                                                  datetime={qrCode["scanDate"]} />


                                </IonLabel>
                                </Link>
                            </IonItem>


                    ))
                    :
                <div>Pas encore de QRCode scannés</div>
                }
                </IonList>
        </div>
    );
};

const goToDetailPage = () => {

}


export default HistoryList;
