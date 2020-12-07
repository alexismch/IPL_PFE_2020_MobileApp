import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HistoryEntry from "../@types/HistoryEntry";
import Id from "../@types/Id";
import { useHistoryContext } from "../contexts/HistoryContext";
import Page from "./Page";
import DoctorCard from "../components/DoctorCard";
import LocationCard from "../components/LocationCard";
import QrCodeType from "../@types/QrCodeType";

const HistoryEntryDetailsPage: React.FC = () => {
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
    <Page title="QR Code">
      <div className="container">
        {historyEntry?.type === QrCodeType.DOCTOR && (
            <DoctorCard firstname={historyEntry.doctor_firstName} lastname={historyEntry.doctor_lastName} date={historyEntry.scanDate}/>
        )}
        {historyEntry?.type === QrCodeType.LOCATION && (
            <LocationCard name={historyEntry.location_name} desc={historyEntry.location_description} date={historyEntry.scanDate}/>
        )}
      </div>
    </Page>
  );
};

export default HistoryEntryDetailsPage;
