import axios from "axios";
import { DataType } from "../types";

const token = import.meta.env.VITE_APP_TOKEN;

export async function getUsers(
  searchParams: string,
  perPage: number,
  pageNumber?: number | null,
  sort?: string
) {
  let result: DataType = {
    items: [],
    total_count: 0,
  };

  let sortResult: string = "";

  if (sort === "descending") {
    sortResult = "&sort=repositories&order=desc";
  }

  if (sort === "ascending") {
    sortResult = "&sort=repositories&order=asc";
  }

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchParams}+in:login+type:user&page=${pageNumber}${sortResult}&per_page=${perPage}&`,
      config
    );
    result = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных с сервера", error);
    alert("Возможно превышен лимит запросов, повторите чуть позже");
  }

  return result;
}
