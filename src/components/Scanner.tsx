import React, { useState } from "react";
import QrReader from "react-qr-reader";
import logger from "../services/logger";
import { useHistory } from "react-router";

const Scanner: React.FC = () => {
  const [result, setResult] = useState<string | null>(null);
  const history = useHistory();

  const handleScan = (data: string | null) => {
    if (data) {
      const routeBase = window.location.origin;
      const qrRoute = "/qr/";
      const qrRouteBase = routeBase + qrRoute;
      console.log("qrROPUTE" + qrRouteBase)
      setResult(data);

      if (data.startsWith(qrRouteBase)) {
        const qrUuid = data.replace(qrRouteBase, "");
        history.push(qrRoute + qrUuid);
      }
    }
  };
  const handleError = (err: any) => {
    logger.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{result}</p>
    </div>
  );
};

export default Scanner;
