import Axios from "axios";
import Auth from "./auth";
import Notification from "../../@types/NotificationFromAPI";
import logger from "../logger";

const { REACT_APP_API_BASE_URL } = process.env;
const NOTIFICATION_ENDPOINT =
  REACT_APP_API_BASE_URL + "/citizens/notifications";

const getAll = async (): Promise<Notification[]> => {
  try {
    const resp = await Axios.get(NOTIFICATION_ENDPOINT, {
      headers: Auth.getAuthHeader(),
    });
    console.log(resp);
    return resp.data;
  } catch (err) {
    logger.error(err);
  }
  return [];
};

export default {
  getAll,
};
