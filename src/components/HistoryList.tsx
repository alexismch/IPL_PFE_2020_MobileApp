import React, { useEffect } from "react";
import {IonItem, IonLabel, IonList, IonListHeader} from "@ionic/react";
import HistoryEntry from "./HistoryEntry";
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
          <IonListHeader>
              Historique des QR codes scannés
          </IonListHeader>
        {history.length > 0 ? (
          history.map((qrCode) => (
              <>
                {qrCode.type === QrCodeType.DOCTOR && (
                  <HistoryEntry
                    name={qrCode.doctor_firstName + " " + qrCode.doctor_lastName}
                    type={"Docteur"}
                    datetime={qrCode.scanDate}
                    id={qrCode.id}

                  />
                )}
                {qrCode.type === QrCodeType.LOCATION && (
                  <HistoryEntry
                    name={qrCode.location_name}
                    type={"Lieu"}
                    datetime={qrCode.scanDate}
                    id={qrCode.id}
                  />
                )}
              </>
          ))
        ) : (
          <div>Pas encore de QRCode scannés</div>
        )}
      </IonList>
    </div>
  );
};

export default HistoryList;
