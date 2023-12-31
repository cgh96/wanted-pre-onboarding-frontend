/* eslint-disable no-alert */
import axios from "axios";
import client from "axiosInstance/client";
import type { AxiosResponseType } from "types/types";
import type { TodoType } from "../types";

const deleteTodoAPI = async (todo: TodoType): Promise<boolean> => {
  try {
    await client.delete(`/todos/${todo.id}`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
        "Content-Type": "application/json",
      },
    });
    alert("삭제 되었습니다!");
    return true;
  } catch (e) {
    if (axios.isAxiosError(e)) {
      alert(e.response?.data.message);
    }
    throw e;
  }
};

const useDeleteTodo = () => {
  const deleteTodo = async (
    todo: TodoType,
  ): Promise<AxiosResponseType<boolean>> => {
    try {
      const isSuccess = await deleteTodoAPI(todo);
      return { data: isSuccess, error: null };
    } catch (e) {
      if (axios.isAxiosError(e)) {
        return { data: null, error: e };
      }
      throw e;
    }
  };

  return [deleteTodo];
};

export default useDeleteTodo;
