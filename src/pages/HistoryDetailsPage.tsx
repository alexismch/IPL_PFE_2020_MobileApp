import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HistoryEntry from "../@types/HistoryEntry";
import Id from "../@types/Id";
import { useHistoryContext } from "../contexts/HistoryContext";
import Page from "./Page";
import DoctorCard from "../components/DoctorCard";
import LocationCard from "../components/LocationCard";
import QrCodeType from "../@types/QrCodeType";

const HistoryDetailsPage: React.FC = () => {
  const { id } = useParams<{ id: Id }>();
  const { history, findById, initialize } = useHistoryContext();
  const [historyEntry, setHistoryEntry] = useState<HistoryEntry | undefined>();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    console.log(history);
    setHistoryEntry(findById(id));
    console.log(historyEntry);
  }, [id, history, findById]);

  return (
    <Page title="QR Code" className="HistoryDetailsPage container">
      {historyEntry?.type === QrCodeType.DOCTOR && (
        <>
          <div className="fill-available">
            <DoctorCard
              firstname={historyEntry.doctor_firstName}
              lastname={historyEntry.doctor_lastName}
            />
          </div>
          <p>Fait à la date du</p>
        </>
      )}
      {historyEntry?.type === QrCodeType.LOCATION && (
        <>
          <div className="fill-available">
            <LocationCard
              name={historyEntry.location_name}
              description={historyEntry.location_description}
              ownerName={historyEntry.owner_name}
            ></LocationCard>
          </div>
          <p>Vous avez scanné ce lieu à la date du</p>
        </>
      )}
      <p>{historyEntry?.scanDate}</p>
    </Page>
  );
};

export default HistoryDetailsPage;
