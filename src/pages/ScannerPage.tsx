import React from "react";
import Scanner from "../components/Scanner";
import Page from "./Page";
import { useHistory } from "react-router";
import { navigate } from "../services/history-utils";

const ScannerPage: React.FC = () => {
  //const [result, setResult] = useState<string | null>(null);

  const history = useHistory();

  const handleScan = (result: string) => {
    const { REACT_APP_QR_CODE_BASE_URL: qrRouteBase } = process.env;
    //setResult(result);

    const qrRoute = "/qr/";
    const qrRouteFull = qrRouteBase + qrRoute;

    if (qrRouteFull && result.startsWith(qrRouteFull)) {
      const qrUuid = result.replace(qrRouteFull, "");

      if (qrUuid) {
        navigate(history, qrRoute + qrUuid);
      }
    }
  };

  return (
    <Page title="Scanner">
      <Scanner enableOnlyOnRoute="/scanner" onScan={handleScan} />
    </Page>
  );
};

export default ScannerPage;
