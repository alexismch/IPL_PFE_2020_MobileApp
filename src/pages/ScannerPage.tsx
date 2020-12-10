import React, { useContext } from "react";
import Scanner from "../components/Scanner";
import Page from "./Page";
import { useToast } from "@agney/ir-toast";
import { NavContext } from "@ionic/react";
import { useTranslation } from "react-i18next";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const ScannerPage: React.FC = () => {
  const { t } = useTranslation();

  const navContext = useContext(NavContext);
  const Toast = useToast();

  const handleScan = (result: string) => {
    const { REACT_APP_QR_CODE_BASE_URL: qrRouteBase } = runtimeEnv();

    const qrRoute = "/qr/";
    const qrRouteFull = qrRouteBase + qrRoute;

    if (qrRouteFull && result.startsWith(qrRouteFull)) {
      const qrUuid = result.replace(qrRouteFull, "");

      if (qrUuid) {
        navContext.navigate(qrRoute + qrUuid);
      }
    } else {
      Toast.error(t("ScannerPage.error.unsupportedQrCode"));
    }
  };

  return (
    <Page title={t("ScannerPage.pageTitle")} className="ScannerPage">
      <div className="container">
        <div className="scanner-container">
          <Scanner enableOnlyOnRoute="/scanner" onScan={handleScan} />
        </div>
        <div className="message-container fill-available">
          <p>{t("ScannerPage.tip")}</p>
        </div>
      </div>
    </Page>
  );
};

export default ScannerPage;
