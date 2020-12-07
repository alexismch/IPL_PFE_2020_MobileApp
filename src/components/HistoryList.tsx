import React, { useEffect } from "react";
import { IonItem, IonLabel, IonList } from "@ionic/react";
import HistoryEntry from "./HistoryEntry";
import { useHistoryContext } from "../contexts/HistoryContext";
import QrCodeType from "../@types/QrCodeType";

const HistoryList: React.FC = () => {
  const { initialize, history } = useHistoryContext();
  /* const hook = () => {
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("UID"),
      },
    };
    axios
      .get(
        "https://ipl-pfe-2020-dev.herokuapp.com/api/citizens/history",
        config
      )
      .then((response) => {
        setList(response.data);
      });
  }; */

  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div>
      {/* 
      <IonItem>
        <IonLabel>Trier par</IonLabel>
        <IonSelect
          value={sort}
          placeholder="Select One"
          onIonChange={(e) => setSort(e.detail.value)}
          interface="popover"
        >
          <IonSelectOption value="nom">Nom</IonSelectOption>
          <IonSelectOption value="type">Type</IonSelectOption>
          <IonSelectOption value="date">Date</IonSelectOption>
        </IonSelect>
      </IonItem> */}
      <IonList>
        {history.length > 0 ? (
          history.map((qrCode) => (
            <IonItem
              key={qrCode.id}
              button={true}
              routerLink={`/history/${qrCode.id}`}
            >
              <IonLabel>
                {qrCode.type === QrCodeType.DOCTOR && (
                  <HistoryEntry
                    name={
                      qrCode.doctor_firstName + " " + qrCode.doctor_lastName
                    }
                    type={"Docteur"}
                    datetime={qrCode.scanDate}
                  />
                )}
                {qrCode.type === QrCodeType.LOCATION && (
                  <HistoryEntry
                    name={qrCode.location_name}
                    type={"Lieu"}
                    datetime={qrCode.scanDate}
                  />
                )}
              </IonLabel>
            </IonItem>
          ))
        ) : (
          <div>Pas encore de QRCode scannés</div>
        )}
      </IonList>
    </div>
  );
};

export default HistoryList;
