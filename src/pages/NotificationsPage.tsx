import React from "react";
import NotificationList from "../components/NotificationList";
import Page from "./Page";
import { useTranslation } from "react-i18next";

const NotificationsPage: React.FC = () => {
  const { t } = useTranslation();
  return (
    <Page title={t("NotificationsPage.pageTitle")}>
      <NotificationList />
    </Page>
  );
};

export default NotificationsPage;
