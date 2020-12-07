import Axios from "axios";
import AuthHeader from "../../@types/AuthHeader";
import Citizen from "../../@types/Citizen";
import logger from "../logger";

const { REACT_APP_API_BASE_URL } = process.env;
const REGISTER_ENDPOINT = REACT_APP_API_BASE_URL + "/citizens";

const register = async (citizen: Citizen): Promise<boolean> => {
  try {
    const resp = await Axios.post(REGISTER_ENDPOINT, citizen);
    localStorage.setItem("token", JSON.stringify(resp.data));
    return true;
  } catch (err) {
    logger.error(err);
  }
  return false;
};

const getAuthHeader = (header: any = {}): AuthHeader => {
  const tokenString = localStorage.getItem("token");
  if (!tokenString) {
    throw new Error("Not token set! please register first");
  }
  const { token } = JSON.parse(tokenString);
  if (!token) {
    throw new Error("Not token set! please register first");
  }
  return {
    ...header,
    Authorization: "Bearer " + token,
  };
};

export default {
  register,
  getAuthHeader,
};
