import runtimeEnv from "@mars/heroku-js-runtime-env";

interface Env {
  REACT_APP_API_BASE_URL: string;
  REACT_APP_QR_CODE_BASE_URL: string;
  REACT_APP_FORCE_DEVICE_ID?: string;
}

const env = runtimeEnv();

export let missingEnvVars: string[] = [];

if (!env || !env.REACT_APP_API_BASE_URL) {
  missingEnvVars = [...missingEnvVars, "REACT_APP_API_BASE_URL"];
}

if (!env || !env.REACT_APP_QR_CODE_BASE_URL) {
  missingEnvVars = [...missingEnvVars, "REACT_APP_QR_CODE_BASE_URL"];
}

export default env as Env;
