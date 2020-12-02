import React from "react";
import NotificationContainer from "../components/NotificationContainer";
import Page from "./Page";

const NotificationsPage: React.FC = () => {
  return (
    <Page title="Notifications">
      <NotificationContainer />
    </Page>
  );
};

export default NotificationsPage;
