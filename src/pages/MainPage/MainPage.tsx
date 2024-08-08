import { useEffect, useState } from "react";
import { UserType } from "../../types";
import { getUsers } from "../../api/user_api";
import { GlobalStyle } from "../../styled/global/Global.styled";
import Search from "../../components/Search/Search";
import UserList from "../../components/UserList/UserList";
import UserInfo from "../../components/UserInfo/UserInfo";
import ButtonBlock from "../../components/ButtonBlock/ButtonBlock";
import Header from "../../components/Header/Header";

export default function MainPage() {
  const [username, setUsername] = useState<string>("");
  // const [repos, setRepos] = useState<RepoType[]>([]);
  const [users, setUsers] = useState<UserType[]>([]);
  // const [pageCount, setPageCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sort, setSort] = useState<string>("");

  useEffect(() => {
    if (username) {
      getUsers(username, currentPage, sort).then((data) => {
        setUsers(data.items);
        // setPageCount(data.total_count);
        console.log(data);
      });
    }
  }, [username, currentPage, sort]);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Header />
        <Search username={username} setUsername={setUsername} />
        <ButtonBlock
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setSort={setSort}
        />
        <UserList users={users} />
        <UserInfo />
      </div>
    </>
  );
}
