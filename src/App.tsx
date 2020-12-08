import React from "react";
import { IonApp } from "@ionic/react";
import { ToastProvider } from "@agney/ir-toast";
import { HistoryContextProvider } from "./contexts/HistoryContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./router/Router";
import "./theme/theme.scss";
import {NotificationContextProvider} from "./contexts/NotificationContext";

const App: React.FC = () => {
  return (
    <IonApp>
      <ToastProvider value={{ duration: 2000 }}>
        <HistoryContextProvider>
            <NotificationContextProvider>
                <AuthContextProvider>
                    <Router />
                </AuthContextProvider>
            </NotificationContextProvider>
        </HistoryContextProvider>
      </ToastProvider>
    </IonApp>
  );
};

export default App;
