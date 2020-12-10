import Axios from "axios";
import ScanData from "../../@types/ScanData";
import HistoryEntry from "../../@types/HistoryEntry";
import Auth from "./auth";
import logger from "../logger";

const { REACT_APP_API_BASE_URL } = process.env;
const HISTORY_ENDPOINT = REACT_APP_API_BASE_URL + "/citizens/history";

const getAll = async (
  unauthorizedHandler: () => void
): Promise<HistoryEntry[]> => {
  try {
    const resp = await Axios.get(HISTORY_ENDPOINT, {
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

const add = async (
  historyEntry: ScanData,
  unauthorizedHandler: () => void
): Promise<HistoryEntry | null> => {
  try {
    const resp = await Axios.post(HISTORY_ENDPOINT, historyEntry, {
      headers: Auth.getAuthHeader(),
    });
    return resp.data;
  } catch (err) {
    logger.error(err);
    if (err?.request?.status === 401) {
      unauthorizedHandler();
    }
  }
  return null;
};

export default {
  getAll,
  add,
};
