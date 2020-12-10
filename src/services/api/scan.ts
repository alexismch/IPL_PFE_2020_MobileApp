import Axios from "axios";
import Auth from "./auth";
import logger from "../logger";
import Doctor from "../../@types/Doctor";
import Location from "../../@types/Location";
import Id from "../../@types/Id";
import runtimeEnv from "@mars/heroku-js-runtime-env";

const { REACT_APP_API_BASE_URL } = runtimeEnv();

const getDoctorDetails = async (
  id: Id,
  unauthorizedHandler: () => void
): Promise<Doctor | undefined> => {
  try {
    const resp = await Axios.get(`${REACT_APP_API_BASE_URL}/doctors/${id}`, {
      headers: Auth.getAuthHeader(),
    });
    return resp.data;
  } catch (err) {
    logger.error(err);
    if (err?.request?.status === 401) {
      unauthorizedHandler();
    }
    if (err?.request?.status === 404 || err?.request?.status === 400) {
      throw Error("scan.error.doctor_404");
    }
  }
};

const getLocationDetails = async (
  id: Id,
  unauthorizedHandler: () => void
): Promise<Location | undefined> => {
  try {
    const resp = await Axios.get(`${REACT_APP_API_BASE_URL}/locations/${id}`, {
      headers: Auth.getAuthHeader(),
    });
    return resp.data;
  } catch (err) {
    logger.error(err);
    if (err?.request?.status === 401) {
      unauthorizedHandler();
    }
    if (err?.request?.status === 404 || err?.request?.status === 400) {
      throw Error("scan.error.location_404");
    }
  }
};

export default {
  getDoctorDetails,
  getLocationDetails,
};
