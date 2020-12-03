import React from 'react';
import { IonSlides, IonSlide, IonContent } from '@ionic/react';
import RegisterContainer from "../components/RegisterContainer";


export const Slides: React.FC = () => (
    <IonContent>
        <IonSlides pager={true} >
            <IonSlide>
                <div className="slide">
                    <img src="assets/images/virus.png" alt="virus-icon"/>
                    <h2>Welcome</h2>
                    <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a
                        demonstration of proper code use.</p>
                </div>
            </IonSlide>
            <IonSlide>
                <div className="slide">
                    <img src="assets/images/virus.png" alt="virus-icon"/>
                    <h2>Welcome</h2>
                    <p>The <b>ionic conference app</b> is a practical preview of the ionic framework in action, and a
                        demonstration of proper code use.</p>
                </div>
            </IonSlide>
            <IonSlide>
                <div className="slide">
                    <img src="assets/images/virus.png" alt="virus-icon"/>
                    <h2>S'enregister</h2>
                    <RegisterContainer/>
                </div>
            </IonSlide>
        </IonSlides>
    </IonContent>
);

export default Slides;