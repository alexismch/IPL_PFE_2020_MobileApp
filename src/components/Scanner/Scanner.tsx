import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-reader";
import logger from "../../services/logger";
import { useLocation } from "react-router";
import { IonSpinner, IonButton, IonIcon } from "@ionic/react";
import { usePageVisibility } from "react-page-visibility";
import { cloudUpload } from "ionicons/icons";
import "./Scanner.css";

const Scanner: React.FC<{
  enableOnlyOnRoute?: string;
  onScan: (result: string) => void;
}> = ({ enableOnlyOnRoute, onScan }) => {
  const [enableCamera, setEnableCamera] = useState(false);
  const [loading, setLoading] = useState(true);
  const [legacy, setLegacy] = useState<boolean>(false);

  const location = useLocation();
  const isVisible = usePageVisibility();
  const ref = useRef<QrReader>(null);

  useEffect(() => {
    if (
      isVisible &&
      (!enableOnlyOnRoute || enableOnlyOnRoute === location.pathname)
    ) {
      setLoading(true);
      setEnableCamera(true);
    } else {
      setLoading(false);
      setEnableCamera(false);
    }
  }, [location, isVisible, enableOnlyOnRoute]);

  const handleScan = (data: string | null) => {
    setLoading(false);
    if (data) {
      setLoading(false);
      onScan(data);
    }
  };

  const handleError = (err: any) => {
    logger.error(err);

    // error = no cam
    setLoading(false);
    setLegacy(true);
  };

  const handleLoad = () => {
    setLoading(false);
  };

  const handleLegacyLoad = () => {
    setLoading(true);
  };

  const openImageDialog = () => {
    try {
      ref.current?.openImageDialog();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <div>
      {loading && (
        <div className="loading-container">
          <IonSpinner />
        </div>
      )}
      {!loading && legacy && (
        <div className="legacy-container">
          <div>
            <p>Impossible d'acceder à la camera.</p>
            <IonButton type="button" onClick={openImageDialog}>
              <IonIcon icon={cloudUpload} slot="start" />
              Ajouter une photo
            </IonButton>
          </div>
        </div>
      )}
      {enableCamera && (
        <QrReader
          className="qr-scanner"
          ref={ref}
          delay={300}
          onError={handleError}
          onScan={handleScan}
          onLoad={handleLoad}
          onImageLoad={handleLegacyLoad}
          legacyMode={legacy}
          style={{ opacity: legacy ? 0 : 1 }}
        />
      )}
    </div>
  );
};

export default Scanner;
