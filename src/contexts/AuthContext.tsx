import React, { useEffect, useState } from "react";
import { createCtx } from "./utils";
import Citizen from "../@types/Citizen";
import AuthService from "../services/api/auth";

interface AuthContext {
  register: (citizen: Citizen) => void;
  isRegistered: boolean;
}

const [useAuthContext, CtxProvider] = createCtx<AuthContext>();

const AuthContextProvider: React.FC = ({ children }) => {
  const [isRegistered, setRegistered] = useState<boolean>(false);

  useEffect(() => {
    console.log({ isRegistered });
  }, [isRegistered]);

  useEffect(() => {
    setRegistered(!!localStorage.getItem("token"));
  }, []);

  const register = (citizen: Citizen): void => {
    AuthService.register(citizen).then((success) => {
      if (success) {
        setRegistered(true);
      }
    });
  };

  const exposed = {
    register,
    isRegistered,
  };

  return <CtxProvider value={exposed}>{children}</CtxProvider>;
};

export { useAuthContext, AuthContextProvider };
