import axios, { AxiosResponse } from "axios";
import { FC, ReactNode, useEffect, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { API_URL, AUTH_URL, APP_ID } from "~/constants";
import { AuthContext } from "./AuthContext";
import { V1SuccessResponse } from "~/types";
import { Credentials } from "~/constants/credentials";
import { Account, LoginCredentials, SignUpCredentials } from "~/types/account";
import { AuthState } from "./Auth.types";

const withCredentials = { withCredentials: true };

type AuthProviderProps = {
  children: ReactNode;
};

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [state, setState] = useState<AuthState>({
    me: null,
    error: null,
    loading: true,
    status: "idle",
  });

  const login_mutation = useMutation({
    mutationFn: ({ email, password }: LoginCredentials) =>
      axios.post(`${AUTH_URL}/v1/login`, { email, password, app_id: APP_ID }, withCredentials),
    onSuccess: () => {
      refetch();
    },
    onError: () => { },
  });

  const sign_up_mutation = useMutation({
    mutationFn: (account: SignUpCredentials) =>
      axios.post(`${API_URL}/v1/auth/signup`, account, withCredentials),
    onSuccess: () => {
      refetch();
    },
    onError: () => { },
  });

  const renew_token_mutation = useMutation({
    mutationFn: () =>
      axios.get(`${API_URL}/v1/auth/renew`, withCredentials),
    onSuccess: () => {
      refetch();
    },
    onError: (err) => {
      let error_message = "something went wrong";
      // @ts-ignore
      if (err.status === 401) {
        error_message = "token expired";
      }

      setState({
        ...state,
        loading: false,
        status: "error",
        error: Error(error_message),
      });
    },
  });

  const { data, error, status, refetch } = useQuery({
    queryKey: ["me"],
    queryFn: (): Promise<AxiosResponse<V1SuccessResponse<Account>>> =>
      axios.get(`${API_URL}/v1/account/me`, withCredentials),
    retry: false,
  });

  const login_fn = () => {
    setState({ ...state, loading: true, status: "pending" });
    login_mutation.mutate(Credentials.Me);
  };

  const sign_up_fn = (account: SignUpCredentials) => {
    setState({ ...state, loading: true, status: "pending" });
    sign_up_mutation.mutate(account);
  };

  const renew_fn = () => {
    setState({ ...state, loading: true, status: "pending" });
    renew_token_mutation.mutate();
  };

  const fetch_fn = () => { refetch(); };

  const log_out_fn = () => {
    setState({ ...state, loading: true });
  };

  useEffect(() => {
    if (data?.data.success && data?.data.result) {
      setState({
        ...state,
        loading: false,
        error: null,
        me: data.data.result,
      });
    }
  }, [data]);

  useEffect(() => {
    // @ts-ignore
    if (status === "error" && error && error.status === 401) {
      renew_token_mutation.mutate();
    }
  }, [status, error]);

  return (
    <AuthContext.Provider
      value={{
        ...state,
        login: login_fn,
        sign_up: sign_up_fn,
        renew: renew_fn,
        fetch: fetch_fn,
        log_out: log_out_fn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
