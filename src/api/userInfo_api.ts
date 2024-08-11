import axios from "axios";
import { InfoDataType } from "../types";

const token = import.meta.env.VITE_APP_TOKEN;

const config = {
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
};

export async function getUserInfo(username: string, category: string, pageNumber: number) {
  let result: InfoDataType = { total_count: 0, items: [] };

  try {
    const response = await axios.get(
      `https://api.github.com/search/${category}?q=${username}&page=${pageNumber}&per_page=10&`,
      config
    );

    result = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных с сервера", error);
    alert("Возможно превышен лимит запросов, повторите чуть позже");
  }

  return result;
}
