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
import { useTranslation } from "react-i18next";

const HistoryDetailsPage: React.FC = () => {
  const { t } = useTranslation();
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
    <Page
      title={t("HistoryDetailsPage.pageTitle")}
      className="HistoryDetailsPage container"
    >
      {historyEntry?.type === QrCodeType.DOCTOR && (
        <>
          <div className="fill-available">
            <DoctorCard doctor={doctor()} />
          </div>
          <p>{t("HistoryDetailsPage.doctor_before_date_message")}</p>
          <p>
            {t("HistoryDetailsPage.doctor_date_message", {
              date: historyEntry?.scanDate,
            })}
          </p>
        </>
      )}
      {historyEntry?.type === QrCodeType.LOCATION && (
        <>
          <div className="fill-available">
            <LocationCard location={location()}></LocationCard>
          </div>
          <p>{t("HistoryDetailsPage.location_before_date_message")}</p>
          <p>
            {t("HistoryDetailsPage.location_date_message", {
              date: historyEntry?.scanDate,
            })}
          </p>
        </>
      )}
    </Page>
  );
};

export default HistoryDetailsPage;
