import React, { useEffect, useState } from "react";
import { createCtx } from "./utils";
import NotificationService from "../services/api/notification";
import NotificationFromAPI from "../@types/NotificationFromAPI";

interface NotificationContext {
    initialize: () => void;
    loading: boolean;
    notifications: NotificationFromAPI[];
}


const [useNotificationsContext, CtxProvider] = createCtx<NotificationContext>();

const NotificationContextProvider: React.FC = ({ children }) => {
    const [notifications, changeNotifications] = useState<NotificationFromAPI[]>([]);
    const [initialized, setInitialized] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        notifications.sort((a: NotificationFromAPI, b: NotificationFromAPI) =>
            a["date"] < b["date"] ? -1 : a["date"] > b["date"] ? 1 : 0
        );
    }, [notifications]);

    const initialize = () => {
        if (!initialized) {
            NotificationService.getAll().then((notifications: NotificationFromAPI[]) => {
                changeNotifications(notifications);
                setLoading(false);
            });
            setInitialized(true);
            setLoading(true);
        }
    };

    const exposed = {
        initialize,
        loading,
        notifications,
    };

    return <CtxProvider value={exposed}>{children}</CtxProvider>;
};

export { useNotificationsContext, NotificationContextProvider };
