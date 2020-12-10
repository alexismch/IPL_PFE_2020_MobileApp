import React, { useEffect } from "react";
import { IonList, IonListHeader } from "@ionic/react";
import ListItem from "./ListItem";
import { useHistoryContext } from "../contexts/HistoryContext";
import QrCodeType from "../@types/QrCodeType";
import {
  faNotesMedical,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
import SkeletonItem from "./SkeletonItem";
import EmptyListItem from "./EmptyListItem";
import { useTranslation } from "react-i18next";

const HistoryList: React.FC = () => {
  const { t } = useTranslation();
  const { initialize, history, loading } = useHistoryContext();
  useEffect(() => {
    initialize();
  }, [initialize]);

  return (
    <div>
      <IonList>
        <IonListHeader>{t("HistoryList.title")}</IonListHeader>
        {history.length > 0 ? (
          history.map((qrCode) => (
            <ListItem
              key={qrCode.id}
              title={
                qrCode.type === QrCodeType.DOCTOR
                  ? qrCode.doctor_firstName + " " + qrCode.doctor_lastName
                  : qrCode.type === QrCodeType.LOCATION
                  ? qrCode.owner_name
                  : ""
              }
              faIcon={
                qrCode.type === QrCodeType.DOCTOR
                  ? faNotesMedical
                  : faMapMarkedAlt
              }
              description={t("HistoryList.scanDate", {
                date: qrCode.scanDate,
                interpolation: { escapeValue: false },
              })}
              routerLink={`/history/${qrCode.type}/${qrCode.id}`}
            />
          ))
        ) : loading ? (
          Array.apply(null, Array(5)).map((elem, keyIndex) => (
            <SkeletonItem key={keyIndex} />
          ))
        ) : (
          <EmptyListItem message={t("HistoryList.empty")} />
        )}
      </IonList>
    </div>
  );
};

export default HistoryList;
