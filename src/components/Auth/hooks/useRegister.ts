/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";

import type { AxiosResponseType } from "../types";

const useRegister = () => {
  const signUp = async (
    email: string,
    password: string,
  ): Promise<AxiosResponseType> => {
    try {
      const res = await client.post("/auth/signup", {
        email,
        password,
      });
      alert("회원가입에 성공했습니다. 로그인 페이지로 이동합니다.");
      return { data: res.data, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        alert(e.response?.data.message);
      }
      return { data: null, error: e };
    }
  };

  return [signUp];
};

export default useRegister;
