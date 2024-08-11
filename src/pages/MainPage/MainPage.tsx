import { useEffect, useState } from "react";
import { UserType } from "../../types";
import { getUsers } from "../../api/users_api";
import { GlobalStyle } from "../../styled/global/Global.styled";
import Search from "../../components/Search/Search";
import UserList from "../../components/UserList/UserList";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";
import Header from "../../components/Header/Header";
import * as S from "./MainPage.styled.ts";
import { pagesCalculator } from "../../utils/pagesCalculator.ts";
import Loading from "../../components/Loading/Loading.tsx";

export default function MainPage() {
  const [username, setUsername] = useState<string>("");

  const [users, setUsers] = useState<UserType[]>([]);
  const [resultCount, setResultCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("");
  const [perPage, setPerPage] = useState<number>(10);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [maxPage, setMaxPage] = useState<number>(1);

  useEffect(() => {
    setMaxPage(pagesCalculator(resultCount, perPage));
  }, [perPage, resultCount]);

  useEffect(() => {
    if (username) {
      setIsLoading(true);
      getUsers(username, perPage, currentPage, sort)
        .then((data) => {
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
          setUsers(data.items);
          setResultCount(data.total_count || 0);
        })
        .catch(() => {
          setIsLoading(true);
        });
    }
  }, [username, currentPage, sort, perPage]);

  return (
    <>
      <GlobalStyle />
      <S.MainPageContainer>
        <Header />
        <Search
          username={username}
          setUsername={setUsername}
          resultCount={resultCount}
          setPerPage={setPerPage}
        />
        <ButtonBlock
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSort={setSort}
          sort={sort}
          maxPage={maxPage}
        />
        {isLoading ? <Loading /> : username && <UserList users={users} />}
      </S.MainPageContainer>
    </>
  );
}
