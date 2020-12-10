import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import HistoryEntry from "../@types/HistoryEntry";
import Id from "../@types/Id";
import { useHistoryContext } from "../contexts/HistoryContext";
import Page from "./Page";
import DoctorCard from "../components/DoctorCard";
import LocationCard from "../components/LocationCard";
import QrCodeType from "../@types/QrCodeType";
import Doctor from "../@types/Doctor";
import Location from "../@types/Location";
import NotFoundPage from "./NotFoundPage";
import DoctorHistoryEntry from "../@types/DoctorHistoryEntry";
import LocationHistoryEntry from "../@types/LocationHistoryEntry";
import formatDate from "../services/date";

const HistoryDetailsPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: Id }>();
  const { history, findById, initialize } = useHistoryContext();
  const [historyEntry, setHistoryEntry] = useState<HistoryEntry | undefined>();

  useEffect(() => {
    initialize();
  }, [initialize]);

  useEffect(() => {
    setHistoryEntry(findById(id));

    return () => {
      setHistoryEntry(undefined);
    };
  }, [id, history, findById]);

  if (type !== QrCodeType.DOCTOR && type !== QrCodeType.LOCATION)
    return <NotFoundPage />;

  const doctor = (): Doctor | undefined => {
    if (historyEntry === undefined) return undefined;
    if (type !== QrCodeType.DOCTOR) return undefined;

    const doctorHistoryEntry = historyEntry as DoctorHistoryEntry;

    return {
      id: doctorHistoryEntry.doctor_id,
      firstName: doctorHistoryEntry.doctor_firstName,
      lastName: doctorHistoryEntry.doctor_lastName,
    };
  };
  const location = (): Location | undefined => {
    if (historyEntry === undefined) return undefined;
    if (type !== QrCodeType.LOCATION) return undefined;

    const locationHistoryEntry = historyEntry as LocationHistoryEntry;

    return {
      id: locationHistoryEntry.location_id,
      name: locationHistoryEntry.location_name,
      description: locationHistoryEntry.location_description,
      owner_id: locationHistoryEntry.owner_id,
      owner_name: locationHistoryEntry.owner_name,
    };
  };

  return (
    <Page title="QR Code" className="HistoryDetailsPage container">
      {historyEntry?.type === QrCodeType.DOCTOR && (
        <>
          <div className="fill-available">
            <DoctorCard doctor={doctor()} />
          </div>
          <p>Fait à la date du</p>
        </>
      )}
      {historyEntry?.type === QrCodeType.LOCATION && (
        <>
          <div className="fill-available">
            <LocationCard location={location()}></LocationCard>
          </div>
          <p>Vous avez scanné ce lieu</p>
        </>
      )}
      <p>{formatDate(historyEntry?.scanDate, true)}</p>
    </Page>
  );
};

export default HistoryDetailsPage;
