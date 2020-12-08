import React, { useEffect } from "react";
import { IonList, IonListHeader } from "@ionic/react";
import ListEntry from "./ListEntry";
import { useHistoryContext } from "../contexts/HistoryContext";
import QrCodeType from "../@types/QrCodeType";

const HistoryList: React.FC = () => {
  const { initialize, history } = useHistoryContext();
  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div>
      <IonList>
        <IonListHeader>Historique des QR codes scannés</IonListHeader>
        {history.length > 0 ? (
          history.map((qrCode) => (
            <ListEntry
              key={qrCode.id}
              mainTitle={
                qrCode.type === QrCodeType.DOCTOR
                  ? qrCode.doctor_firstName + " " + qrCode.doctor_lastName
                  : qrCode.type === QrCodeType.LOCATION
                  ? qrCode.owner_name
                  : ""
              }
              type={qrCode.type}
              desc={qrCode.scanDate}
              id={qrCode.id}
            />
          ))
        ) : (
          <div>Pas encore de QRCode scannés</div>
        )}
      </IonList>
    </div>
  );
};

export default HistoryList;
