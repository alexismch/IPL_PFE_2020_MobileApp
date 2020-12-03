import React, {useState} from "react";
import {IonFab, IonFabButton, IonIcon, IonButton, IonModal, IonContent} from "@ionic/react";
import QrCodeList from "../components/QrCodeList";
import { qrCodeOutline, notificationsOutline} from "ionicons/icons";
import Page from "./Page";
import RegisterContainer from "../components/RegisterContainer";

const HomePage: React.FC = () => {
  const [isRegister, setIsRegister] = useState(!!localStorage.getItem("UID"));
  const headerEndButtons = (
    <>
      <IonButton color="dark" routerLink="/notifications">
        <IonIcon slot="icon-only" icon={notificationsOutline} />
      </IonButton>
    </>
  );
  async function closeModal() {
    await setIsRegister(true);
  }

  return (
    <Page
      title="BlockCovid"
      headerEndButtons={headerEndButtons}
      backButton={false}
    >
      {isRegister?
          <QrCodeList />
          :
          <IonContent>
            <IonModal isOpen={!isRegister} cssClass='my-custom-class'>
              <IonContent>
                <RegisterContainer closeAction={closeModal}/>
              </IonContent>
            </IonModal>
          </IonContent>
      }

      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton routerLink="/scanner">
          <IonIcon icon={qrCodeOutline} />
        </IonFabButton>
      </IonFab>
    </Page>
  );
};

export default HomePage;
