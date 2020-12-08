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
