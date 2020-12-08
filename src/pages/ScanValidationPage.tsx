import { IonButton, IonIcon, NavContext } from "@ionic/react";
import { checkmarkCircleOutline, closeCircleOutline } from "ionicons/icons";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import Id from "../@types/Id";
import QrCodeType from "../@types/QrCodeType";
import Location from "../@types/Location";
import LocationCard from "../components/LocationCard";
import NotFoundPage from "./NotFoundPage";
import Page from "./Page";
import ScanService from "../services/api/scan";
import Doctor from "../@types/Doctor";
import DoctorCard from "../components/DoctorCard";
import ErrorCard from "../components/ErrorCard";

const ScanValidationPage: React.FC = () => {
  const { type, id } = useParams<{ type: string; id: Id }>();
  const [scan, setScan] = useState<Doctor | Location | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const navContext = useContext(NavContext);

  useEffect(() => {
    if (type === QrCodeType.DOCTOR) {
      ScanService.getDoctorDetails(id)
        .then((doctor) => {
          setScan(doctor);
        })
        .catch((err) => {
          setError(err.message);
        });
    }
    if (type === QrCodeType.LOCATION) {
      ScanService.getLocationDetails(id)
        .then((location) => {
          setScan(location);
        })
        .catch((err) => {
          setError(err.message);
        });
    }

    return () => {
      setScan(undefined);
    };
  }, [type, id]);

  const replaceHistory = (type: string) => {
    setTimeout(() =>
      navContext.navigate(`/qr/${type}/${id}`, "none", "replace")
    );
    return <></>;
  };

  if (type === "l") {
    return replaceHistory(QrCodeType.LOCATION);
  }
  if (type === "d") {
    return replaceHistory(QrCodeType.DOCTOR);
  }

  if (type !== QrCodeType.DOCTOR && type !== QrCodeType.LOCATION)
    return <NotFoundPage />;

  const handleValidate = () => {
    navContext.navigate("/", "back");
  };

  const handleCancel = () => {
    navContext.goBack("/scanner");
  };

  return (
    <Page
      title="QR Code"
      backUrl="/scanner"
      className="ScanValidationPage container"
    >
      <div className={"fill-available" + (error ? " container-center" : "")}>
        {error && <ErrorCard message={error} />}
        {!error && type === QrCodeType.DOCTOR && (
          <DoctorCard doctor={scan as Doctor | undefined} />
        )}
        {!error && type === QrCodeType.LOCATION && (
          <LocationCard location={scan as Location | undefined} />
        )}
      </div>
      <p className="confirm-question">Êtes-vous bien passé à cet endroit ?</p>
      <div className="btn-container">
        <IonButton
          color="success"
          expand="block"
          size="large"
          strong
          disabled={scan === undefined}
          onClick={handleValidate}
        >
          <IonIcon icon={checkmarkCircleOutline} slot="start" />
          Confirmer
        </IonButton>
        <IonButton
          color="danger"
          expand="block"
          size="large"
          disabled={scan === undefined && error === undefined}
          onClick={handleCancel}
        >
          <IonIcon icon={closeCircleOutline} slot="start" />
          Annuler
        </IonButton>
      </div>
    </Page>
  );
};

export default ScanValidationPage;
