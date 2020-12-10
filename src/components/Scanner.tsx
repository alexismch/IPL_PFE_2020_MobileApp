import React, { useState, useRef, useEffect } from "react";
import QrReader from "react-qr-reader";
import logger from "../services/logger";
import { useLocation } from "react-router";
import { IonSpinner, IonButton, IonIcon } from "@ionic/react";
import { usePageVisibility } from "react-page-visibility";
import { cloudUpload } from "ionicons/icons";
import { useToast } from "@agney/ir-toast";
import { useTranslation } from "react-i18next";

const Scanner: React.FC<{
  enableOnlyOnRoute?: string;
  onScan: (result: string) => void;
}> = ({ enableOnlyOnRoute, onScan }) => {
  const { t } = useTranslation();
  const [enableCamera, setEnableCamera] = useState(false);
  const [loading, setLoading] = useState(true);
  const [legacy, setLegacy] = useState<boolean>(false);
  const [picturePending, setPicturePending] = useState<boolean>(false);

  const location = useLocation();
  const isVisible = usePageVisibility();
  const ref = useRef<QrReader>(null);

  const Toast = useToast();

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
    if (picturePending) {
      setPicturePending(false);

      if (!data) {
        Toast.error(t("Scanner.notAQrCode"));
      }
    }

    if (data) {
      onScan(data);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (picturePending) {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [picturePending]);

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
    setPicturePending(true);
  };

  const openImageDialog = () => {
    try {
      ref.current?.openImageDialog();
    } catch (err) {
      logger.error(err);
    }
  };

  return (
    <div className="Scanner">
      {loading && (
        <div className="loading-container">
          <IonSpinner />
        </div>
      )}
      {!loading && legacy && (
        <div className="legacy-container">
          <div>
            <p>{t("Scanner.noCameraAccess")}</p>
            <IonButton type="button" onClick={openImageDialog}>
              <IonIcon icon={cloudUpload} slot="start" />
              {t("Scanner.addPicture")}
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
