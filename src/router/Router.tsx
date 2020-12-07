import React from "react";
import { IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Route } from "react-router";
import NotificationsPage from "../pages/NotificationsPage";
import ScannerPage from "../pages/ScannerPage";
import HistoryEntryDetailsPage from "../pages/HistoryEntryDetailsPage";
import QrCodeValidationPage from "../pages/QrCodeValidationPage";
import NotFoundPage from "../pages/NotFoundPage";
import HomePage from "../pages/HomePage";

const Router: React.FC = () => {
  return (
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
        <Route path="/" component={HomePage} exact={true} />
        <Route component={NotFoundPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  );
};

export default Router;
