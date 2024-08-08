import axios from "axios";
import { RepoType } from "../types";

export async function getReposOfUser(username: string) {
  let result: RepoType[] = [];

  try {
    const token = "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";
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await axios.get(
      `https://api.github.com/search/repositories?q=${username}/`,
      config
    );

    result = response.data;
  } catch (error) {
    console.error("Ошибка при получении данных с сервера", error);
  }

  return result;
}
