import React from "react";
import { IonSlide } from "@ionic/react";

export const Slide: React.FC<{
  title: string;
  message: string;
  imagesSrc: string;
}> = ({ title, message, imagesSrc, children }) => (
  <IonSlide>
    <div className="slide">
      <img src={imagesSrc} alt={title} />
      <h2>{title}</h2>
      <p>{message}</p>
      {children}
    </div>
  </IonSlide>
);

export default Slide;
