import React from "react";
import NotificationList from "../components/NotificationList";
import Page from "./Page";

const NotificationsPage: React.FC = () => {
  return (
    <Page title="Notifications">
      <NotificationList />
    </Page>
  );
};

export default NotificationsPage;
