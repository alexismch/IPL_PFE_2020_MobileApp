import React, { useContext } from "react";
import Scanner from "../components/Scanner";
import Page from "./Page";
import { useToast } from "@agney/ir-toast";
import { NavContext } from "@ionic/react";

const ScannerPage: React.FC = () => {
  //const [result, setResult] = useState<string | null>(null);

  const navContext = useContext(NavContext);
  const Toast = useToast();

  const handleScan = (result: string) => {
    const { REACT_APP_QR_CODE_BASE_URL: qrRouteBase } = process.env;

    const qrRoute = "/qr/";
    const qrRouteFull = qrRouteBase + qrRoute;

    if (qrRouteFull && result.startsWith(qrRouteFull)) {
      const qrUuid = result.replace(qrRouteFull, "");

      if (qrUuid) {
        navContext.navigate(qrRoute + qrUuid);
      }
    } else {
      Toast.error(
        "Le qr code scanné n'est pas pris en charge par l'application"
      );
    }
  };

  return (
    <Page title="Scanner" className="ScannerPage">
      <div className="container">
        <div className="scanner-container">
          <Scanner enableOnlyOnRoute="/scanner" onScan={handleScan} />
        </div>
        <div className="message-container fill-available">
          <p>Dirigez votre téléphone vers un QR code</p>
        </div>
      </div>
    </Page>
  );
};

export default ScannerPage;
