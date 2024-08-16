import { useEffect, useState } from "react";
import { UserInfoType, UserType } from "../../types";
import UserInfo from "../UserInfo/UserInfo.tsx";
import * as S from "./UserList.styled.ts";
import { getUserInfo } from "../../api/userInfo_api.ts";

type UserListType = {
  users: UserType[];
};

export default function UserList({ users }: UserListType) {
  const [userInfo, setUserInfo] = useState<UserInfoType>({
    id: "",
    userName: "",
    user_url: "",
    userPhotoUrl: "",
    repositories: { total_count: 0, items: [] },
    commitsCount: 0,
    topicsCount: 0,
  });

  const [isOpenedUserInfo, setIsOpenedUserInfo] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [repoPage, setRepoPage] = useState<number>(1); // Начальное значение страницы отображаемых репозиториев всегда 1

  function handleClickOnUser(
    userName: string,
    userId: string,
    userUrl: string,
    userPhoto?: string
  ) {
    setIsLoading(true);
    setIsOpenedUserInfo(true);
    setUserInfo((prevData) => ({
      ...prevData,
      id: userId,
      userName: userName,
      user_url: userUrl,
      userPhotoUrl: userPhoto || "",
    }));
    getUserInfo(userName, "topics").then((topicsData) => {
      setUserInfo((prevData) => ({
        ...prevData,
        topicsCount: topicsData.total_count,
      }));
    });
    getUserInfo(userName, "commits").then((commitsData) => {
      setUserInfo((prevData) => ({
        ...prevData,
        commitsCount: commitsData.total_count,
      }));
    });
  }

  
  useEffect(() => {
    if (userInfo.userName && isOpenedUserInfo) {
      getUserInfo(userInfo.userName, "repositories", repoPage).then(
        (reposData) => {
          setUserInfo((prevData) => ({
            ...prevData,
            repositories: {
              total_count: reposData.total_count,
              items: reposData.items || [],
            },
          }));
          setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        }
      );
    }
  }, [repoPage, userInfo.userName, isOpenedUserInfo]);

  return (
    <>
      <S.UserBlock>
        {users.map((user, index) => (
          <S.UserElement
            key={user.id}
            $index={index + 1}
            onClick={() =>
              handleClickOnUser(
                user.login,
                user.id,
                user.html_url,
                user.avatar_url
              )
            }
          >
            {isOpenedUserInfo && user.id === userInfo.id ? (
              <>
                <UserInfo
                  userInfo={userInfo}
                  setRepoPage={setRepoPage}
                  isLoadingInfo={isLoading}
                />
              </>
            ) : (
              <>
                <S.UserText>{user.login}</S.UserText>
                <S.Arrow>
                  <use xlinkHref="../../public/icons/sprite.svg#icon-down" />
                </S.Arrow>
              </>
            )}
          </S.UserElement>
        ))}
      </S.UserBlock>
    </>
  );
}
