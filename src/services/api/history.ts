import Axios from "axios";
import ScanData from "../../@types/ScanData";
import HistoryEntry from "../../@types/HistoryEntry";
import Auth from "./auth";
import logger from "../logger";

const { REACT_APP_API_BASE_URL } = process.env;
const HISTORY_ENDPOINT = REACT_APP_API_BASE_URL + "/api/citizens/history";

const getAll = async (): Promise<HistoryEntry[]> => {
  try {
    const resp = await Axios.get(HISTORY_ENDPOINT, {
      headers: Auth.getAuthHeader(),
    });
    console.log(resp)
    return resp.data;
  } catch (err) {
    logger.error(err);
  }
  return [];
};

const add = async (historyEntry: ScanData): Promise<HistoryEntry | null> => {
  try {
    const resp = await Axios.post(HISTORY_ENDPOINT, historyEntry);
    return resp.data;
  } catch (err) {
    logger.error(err);
  }
  return null;
};

export default {
  getAll,
  add,
};
