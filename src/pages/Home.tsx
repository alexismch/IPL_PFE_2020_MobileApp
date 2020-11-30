import { IonButton, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React, { useState } from 'react';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import './Home.css';

const Home: React.FC = () => {

  const [encodedText, setEncodedText] = useState('');

  const scanCode = async () => {
    const data = await BarcodeScanner.scan();
    alert(JSON.stringify(data));
    setEncodedText(data.text);
  };

  return (
    <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Ionic Barcode Scanner</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">

          <h1>Click Button To Scan</h1>

          <IonButton onClick={scanCode} color="primary">
            Scan
          </IonButton>

          {
            encodedText ?
              (<div>
                <p>
                  Scanned Code Text : <b>encodedText</b>
                </p>
                <p>
                  Scanned Code Format : <b></b>
                </p>
              </div>) : ''
          }

        </IonContent>
      </IonPage >
  );
};

export default Home;
