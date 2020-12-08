import Axios from "axios";
import Auth from "./auth";
import logger from "../logger";
import Doctor from "../../@types/Doctor";
import Location from "../../@types/Location";
import Id from "../../@types/Id";

const { REACT_APP_API_BASE_URL } = process.env;

const getDoctorDetails = async (id: Id): Promise<Doctor | undefined> => {
  try {
    const resp = await Axios.get(`${REACT_APP_API_BASE_URL}/doctors/${id}`, {
      headers: Auth.getAuthHeader(),
    });
    return resp.data;
  } catch (err) {
    logger.error(err);
    if (err?.request?.status === 404 || err?.request?.status === 400) {
      throw Error(
        "Le QR Code scanné est invalide. Ce docteur n'existe pas ou à été supprimé"
      );
    }
  }
};

const getLocationDetails = async (id: Id): Promise<Location | undefined> => {
  try {
    const resp = await Axios.get(`${REACT_APP_API_BASE_URL}/locations/${id}`, {
      headers: Auth.getAuthHeader(),
    });
    return resp.data;
  } catch (err) {
    logger.error(err);
    if (err?.request?.status === 404 || err?.request?.status === 400) {
      throw Error(
        "Le QR Code scanné est invalide. Ce lieu n'existe pas ou à été supprimé"
      );
    }
  }
};

export default {
  getDoctorDetails,
  getLocationDetails,
};
