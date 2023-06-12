/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";

import type { AxiosResponseType } from "../types";

const useLogin = () => {
  const signIn = async (
    email: string,
    password: string,
  ): Promise<AxiosResponseType> => {
    try {
      const res = await client.post("/auth/signin", {
        email,
        password,
      });
      alert("로그인 성공");
      localStorage.setItem("jwt", res.data.access_token);
      return { data: res.data, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        alert(e.response?.data.message);
      }
      return { data: null, error: e };
    }
  };

  return [signIn];
};

export default useLogin;
