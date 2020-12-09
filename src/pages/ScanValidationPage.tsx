import { IonButton, IonIcon, IonSpinner, NavContext } from "@ionic/react";
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
import { useHistoryContext } from "../contexts/HistoryContext";
import { useToast } from "@agney/ir-toast";

const ScanValidationPage: React.FC = () => {
  const { type: typeConst, id } = useParams<{ type: string; id: Id }>();
  let type = typeConst;
  const [scan, setScan] = useState<Doctor | Location | undefined>(undefined);
  const [scanDate] = useState<Date>(new Date());
  const [error, setError] = useState<string | undefined>(undefined);
  const [isValidationPending, setValidationPending] = useState<boolean>(false);
  const navContext = useContext(NavContext);
  const historyContext = useHistoryContext();
  const Toast = useToast();

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

  if (type === "l") {
    type = QrCodeType.LOCATION;
  }
  if (type === "d") {
    type = QrCodeType.DOCTOR;
  }

  if (type !== QrCodeType.DOCTOR && type !== QrCodeType.LOCATION)
    return <NotFoundPage />;

  const handleValidate = () => {
    setValidationPending(true);
    historyContext
      .addEntry({
        id,
        type: type as QrCodeType,
        scanDate: scanDate.toISOString(),
      })
      .then((submitted) => {
        if (submitted) {
          navContext.navigate("/", "back");
        } else {
          Toast.error("Impossible d'envoyer votre confirmation au serveur");
        }
        setValidationPending(false);
      });
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
          {isValidationPending ? (
            <IonSpinner
              style={{ color: "var(--ion-color-success-contrast)" }}
            />
          ) : (
            <>
              <IonIcon icon={checkmarkCircleOutline} slot="start" />
              Confirmer
            </>
          )}
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
