import React from "react";
import { IonSlides, IonContent } from "@ionic/react";
import RegisterButton from "./RegisterButton";
import Slide from "./Slide";

export const Slides: React.FC = () => (
  <IonContent className="Slides">
    <IonSlides pager={true}>
      <Slide
        title="Bienvenue sur BlockCovid"
        message="L'application de tracage avec QR Code"
        imagesSrc="assets/images/virus.png"
      />
      <Slide
        title="Comment ça fonctionne ?"
        message="Grâce à la magie du QR Code, nous savons quel appareil est passé par
            la. Une notification vous sera envoyé en cas de possibles
            contaminations"
        imagesSrc="assets/images/virus.png"
      />
      <Slide
        title="S'enregister"
        message="L'application de tracage avec QR Code"
        imagesSrc="assets/images/virus.png"
      >
        <RegisterButton />
      </Slide>
    </IonSlides>
  </IonContent>
);

export default Slides;
