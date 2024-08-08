import axios from "axios";
import { DataType } from "../types";
import mytoken from "../token.ts"

export async function getUsers(
  searchParams: string,
  pageNumber: number,
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

  const token = mytoken() // В dev версии через Vite не работает process.env - сюда подставляем вместо mytoken - process.env.REACT_APP_TOKEN - токен github

  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await axios.get(
      `https://api.github.com/search/users?q=${searchParams}+in:login+type:user&page=${pageNumber}${sortResult}&per_page=15&`,
      config
    );
    result = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных с сервера", error);
  }

  return result;
}
