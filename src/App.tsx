import React from "react";
import { Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ToastProvider } from "@agney/ir-toast";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ScannerPage from "./pages/ScannerPage";
import NotificationsPage from "./pages/NotificationsPage";
import QrCodeDetailPage from "./pages/QrCodeDetailPage";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

import firebase from "./firebase";

const App: React.FC = () => {
  React.useEffect(()=>{
    const msg=firebase.messaging();
    msg.requestPermission().then(()=>{
      return msg.getToken();
    }).then((data)=>{
       console.warn("token",data)
    }).catch(error => {console.log(error)})
    msg.onMessage((payload) => {
      console.log("Message received. ", payload);
      const { title, ...options } = payload.notification;
    });},[])
    return(
  <IonApp>
    <ToastProvider value={{ duration: 2000 }}>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route
            path="/notifications"
            component={NotificationsPage}
            exact={true}
          />
          <Route path="/scanner" component={ScannerPage} exact={true} />
          <Route path="/qr/:id" component={QrCodeDetailPage} exact={true} />
          <Route path="/" component={HomePage} exact={true} />
          <Route component={NotFoundPage} />
        </IonRouterOutlet>
      </IonReactRouter>
    </ToastProvider>
  </IonApp>
)}

export default App;
