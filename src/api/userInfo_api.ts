import axios from "axios";
import { InfoDataType } from "../types";

const token = import.meta.env.VITE_APP_TOKEN;

export async function getUserInfo(
  username: string,
  category: string,
  pageNumber?: number
) {
  let result: InfoDataType = { total_count: 0, items: [] };
  let pageResult: string = "";

  try {
    let config = {};
    if (token) {
      config = {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      };
    } else {
      config = {};
    }

    if (pageNumber) {
      pageResult = `&page=${pageNumber}`;
    }

    const response = await axios.get(
      `https://api.github.com/search/${category}?q=${username}${pageResult}&per_page=10&`,
      config
    );

    result = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных с сервера", error);
    alert("Возможно превышен лимит запросов, повторите чуть позже");
  }

  return result;
}
