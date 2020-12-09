import React, { Suspense } from "react";
import { IonApp, IonSpinner } from "@ionic/react";
import { ToastProvider } from "@agney/ir-toast";
import { HistoryContextProvider } from "./contexts/HistoryContext";
import { AuthContextProvider } from "./contexts/AuthContext";
import Router from "./router/Router";
import "./theme/theme.scss";
import { InAppNotificationProvider } from "./contexts/InAppNotification";

const App: React.FC = () => {
  return (
    <Suspense fallback={<IonSpinner />}>
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
    </Suspense>
  );
};

export default App;
