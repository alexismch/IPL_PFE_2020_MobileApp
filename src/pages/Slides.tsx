import React from "react";
import { IonSlides, IonSlide, IonContent } from "@ionic/react";
import RegisterContainer from "../components/RegisterContainer";

export const Slides: React.FC = () => (
  <IonContent className="Slides">
    <IonSlides pager={true}>
      <IonSlide>
        <div className="slide">
          <img src="assets/images/virus.png" alt="virus-icon" />
          <h2>Bienvenue sur BlockCovid</h2>
          <p>L'application de tracage avec QR Code</p>
        </div>
      </IonSlide>
      <IonSlide>
        <div className="slide">
          <img src="assets/images/virus.png" alt="virus-icon" />
          <h2>Comment ça fonctionne ? </h2>
          <p>
            Grâce à la magie du QR Code, nous savons quel appareil est passé par
            la. Une notification vous sera envoyé en cas de possibles
            contaminations
          </p>
        </div>
      </IonSlide>
      <IonSlide>
        <div className="slide">
          <img src="assets/images/virus.png" alt="virus-icon" />
          <h2>S'enregister</h2>
          <RegisterContainer />
        </div>
      </IonSlide>
    </IonSlides>
  </IonContent>
);

export default Slides;
