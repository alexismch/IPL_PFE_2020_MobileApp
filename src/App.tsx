import React from "react";
import { IonApp } from "@ionic/react";
import { ToastProvider } from "@agney/ir-toast";
import { HistoryContextProvider } from "./contexts/HistoryContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./router/Router";
import "./theme/theme.scss";
import { InAppNotificationProvider } from "./contexts/InAppNotification";

const App: React.FC = () => {
  return (
    <IonApp>
      <ToastProvider value={{ duration: 2000 }}>
        <AuthContextProvider>
          <InAppNotificationProvider>
            <HistoryContextProvider>
              <Router />
            </HistoryContextProvider>
          </InAppNotificationProvider>
        </AuthContextProvider>
      </ToastProvider>
    </IonApp>
  );
};

export default App;
