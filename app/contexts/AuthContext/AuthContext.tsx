import { createContext } from "react";
import { RequestStatus, Account, SignUpCredentials } from "~/types";

type AuthContextProps = {
  me: Account | null;
  loading: boolean;
  error: Error | null;
  status: RequestStatus;
  login: () => void;
  sign_up: (account: SignUpCredentials) => void;
  log_out: () => void;
  fetch: () => void;
  renew: () => void;
};

export const AuthContext = createContext<AuthContextProps>({
  me: null,
  loading: false,
  error: null,
  status: "idle",
  login: () => {
    console.log("f: noop");
  },
  sign_up: (account: SignUpCredentials) => {
    console.log("f: noop", account);
  },
  log_out: () => {
    console.log("f: noop");
  },
  fetch: () => {
    console.log("f: noop");
  },
  renew: () => {
    console.log("f: noop");
  },
});
