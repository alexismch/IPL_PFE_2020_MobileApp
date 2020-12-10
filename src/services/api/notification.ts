import Axios from "axios";
import Auth from "./auth";
import Notification from "../../@types/NotificationFromAPI";
import logger from "../logger";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const { REACT_APP_API_BASE_URL } = runtimeEnv();
const NOTIFICATION_ENDPOINT =
  REACT_APP_API_BASE_URL + "/citizens/notifications";

const getAll = async (
  unauthorizedHandler: () => void
): Promise<Notification[]> => {
  try {
    const resp = await Axios.get(NOTIFICATION_ENDPOINT, {
      headers: Auth.getAuthHeader(),
    });
    return resp.data;
  } catch (err) {
    logger.error(err);
    if (err?.request?.status === 401) {
      unauthorizedHandler();
    }
  }
  return [];
};

export default {
  getAll,
};
