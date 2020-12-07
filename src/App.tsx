import React from "react";
import { IonApp } from "@ionic/react";
import { ToastProvider } from "@agney/ir-toast";
import { HistoryContextProvider } from "./contexts/HistoryContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./router/Router";

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

const App: React.FC = () => {
  return (
    <IonApp>
      <ToastProvider value={{ duration: 2000 }}>
        <HistoryContextProvider>
          <AuthContextProvider>
            <Router />
          </AuthContextProvider>
        </HistoryContextProvider>
      </ToastProvider>
    </IonApp>
  );
};

export default App;
