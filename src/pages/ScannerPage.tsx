import React from "react";
import Scanner from "../components/Scanner";
import Page from "./Page";
import { useHistory } from "react-router";
import { navigate } from "../services/history-utils";
import { useToast } from "@agney/ir-toast";

const ScannerPage: React.FC = () => {
  //const [result, setResult] = useState<string | null>(null);

  const history = useHistory();
  const Toast = useToast();

  const handleScan = (result: string) => {
    const { REACT_APP_QR_CODE_BASE_URL: qrRouteBase } = process.env;
    //setResult(result);

    console.log(result);

    const qrRoute = "/qr/";
    const qrRouteFull = qrRouteBase + qrRoute;

    if (qrRouteFull && result.startsWith(qrRouteFull)) {
      const qrUuid = result.replace(qrRouteFull, "");

      if (qrUuid) {
        navigate(history, qrRoute + qrUuid);
      }
    } else {
      Toast.error("Le qr code scanné n'est pas valide");
    }
  };

  return (
    <Page title="Scanner">
      <Scanner enableOnlyOnRoute="/scanner" onScan={handleScan} />
    </Page>
  );
};

export default ScannerPage;
