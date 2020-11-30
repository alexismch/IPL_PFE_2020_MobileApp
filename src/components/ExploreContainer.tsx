import { IonContent, IonInput, IonButton, IonItem, IonLabel, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import './Home.css';

import { BarcodeScanner } from '@ionic-native/barcode-scanner';

class Home extends React.Component {

  state = {
    encodedText: '',
    encodeData: '',
    textToEncode: ''
  }

  handleChange = (event: any) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });

    console.log(this.state);


  };

  render() {

    const scanCode = async () => {
      const data = await BarcodeScanner.scan();
      alert(JSON.stringify(data));
      this.setState({ encodedText: data.text })
    };

    const generateCode = () => {
      BarcodeScanner.encode(BarcodeScanner.Encode.TEXT_TYPE, this.state.encodeData)
        .then(data => {
          console.log(data);
          //this.setState({ textToEncode: encodedData });
        }, err => {
          console.log("Error occured : " + err);
        });
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
            this.state.encodedText ?
              (<div>
                <p>
                  Scanned Code Text : <b></b>
                </p>
                <p>
                  Scanned Code Format : <b></b>
                </p>
              </div>) : ''
          }

          <h1>Enter Value to Create QR code</h1>

          <IonItem>
            <IonLabel>Enter Text To Generate QR CODE</IonLabel>
            <IonInput name='textToEncode' value={this.state.encodeData} placeholder="Enter Input" onIonChange={this.handleChange} clearInput></IonInput>
          </IonItem>



          <IonButton onClick={generateCode} color="success">
            Create QR
          </IonButton>

        </IonContent>
      </IonPage >
    );
  }

};

export default Home;
