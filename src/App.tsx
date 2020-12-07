import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { ToastProvider } from "@agney/ir-toast";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import ScannerPage from "./pages/ScannerPage";
import NotificationsPage from "./pages/NotificationsPage";
import QrCodeValidationPage from "./pages/QrCodeValidationPage";

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
import HistoryEntryDetailsPage from "./pages/HistoryEntryDetailsPage";
import { HistoryContextProvider } from "./contexts/HistoryContext";

const App: React.FC = () => {
  return (
    <IonApp>
      <ToastProvider value={{ duration: 2000 }}>
        <HistoryContextProvider>
          <IonReactRouter>
            <IonRouterOutlet>
              <Route
                path="/notifications"
                component={NotificationsPage}
                exact={true}
                strict={true}
              />
              <Route
                path="/scanner"
                component={ScannerPage}
                exact={true}
                strict={true}
              />
              <Route
                path="/history/:id"
                component={HistoryEntryDetailsPage}
                exact={true}
                strict={true}
              />
              <Route
                path="/qr/:type/:id"
                component={QrCodeValidationPage}
                exact={true}
                strict={true}
              />
              <Route path="/" component={HomePage} exact={true} strict={true} />
              <Route
                path="/404"
                component={NotFoundPage}
                exact={true}
                strict={true}
              />
              <Redirect to="/404" />
            </IonRouterOutlet>
          </IonReactRouter>
        </HistoryContextProvider>
      </ToastProvider>
    </IonApp>
  );
};

export default App;
