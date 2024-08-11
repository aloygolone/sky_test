import { Link } from "react-router-dom";
import { UserInfoType } from "../../types";
import * as S from "./UserInfo.styled.ts";
import { useEffect, useState } from "react";
import { pagesCalculator } from "../../utils/pagesCalculator.ts";
import Loading from "../Loading/Loading.tsx";

type UserInfo = {
  userInfo: UserInfoType;
  setRepoPage: (arg: number) => void;
};

export default function UserInfo({ userInfo, setRepoPage }: UserInfo) {
  const [isOpenedRepositories, setIsOpenedRepositories] =
    useState<boolean>(false);
  const [inputValue, setInputValue] = useState<number>(1);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const maxPage = pagesCalculator(userInfo.repositories.total_count, 10);

  useEffect(() => {
    if (inputValue < 1) {
      return setInputValue(1);
    }

    if (inputValue > maxPage) {
      return setInputValue(maxPage);
    }

    setRepoPage(inputValue);
  }, [inputValue, maxPage, setRepoPage]);

  function handleOpenRepositories(
    e: React.MouseEvent<HTMLElement, MouseEvent>
  ) {
    e.stopPropagation();
    if (!isOpenedRepositories) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }

    setIsOpenedRepositories((prevstate) => !prevstate);

    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }

  function handleClickOnUserInfo(e: React.MouseEvent<HTMLElement, MouseEvent>) {
    e.stopPropagation();
  }

  return (
    <>
      <S.UserIfoContainer onClick={handleClickOnUserInfo}>
        <S.UserBlock>
          {userInfo.userPhotoUrl ? (
            <Link to={userInfo.user_url} target="_blank">
              <S.UserPhoto src={userInfo.userPhotoUrl} />
            </Link>
          ) : (
            <S.UserPhoto>
              <use xlinkHref="./public/icons/sprite.svg#profile-nophoto-full"></use>
            </S.UserPhoto>
          )}
          <S.UserInfoBlock>
            <S.Text>
              Имя пользователя:{" "}
              <S.InteractiveText>
                <Link to={userInfo.user_url} target="_blank">
                  {userInfo.userName}
                </Link>
              </S.InteractiveText>
            </S.Text>
            <S.Text>
              Число коммитов за все время: {userInfo.commitsCount}
            </S.Text>
            <S.Text>Число созданных тем: {userInfo.topicsCount}</S.Text>
            <S.Text>
              Число репозиториев:{" "}
              <S.InteractiveText onClick={handleOpenRepositories}>
                {userInfo.repositories.total_count}
              </S.InteractiveText>
              {isOpenedRepositories && (
                <>
                  <S.Input
                    type="number"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(Number(e.target.value));
                    }}
                  />
                  <span> страница из {maxPage}</span>
                </>
              )}
            </S.Text>
          </S.UserInfoBlock>
        </S.UserBlock>
        <S.ReposBlock>
          {isLoading ? (
            <Loading />
          ) : (
            isOpenedRepositories &&
            userInfo.repositories.items.map((item) => {
              return (
                <S.ReposText key={item.id}>
                  {item.name}
                  {isOpenedRepositories.toString()}
                </S.ReposText>
              );
            })
          )}
        </S.ReposBlock>
      </S.UserIfoContainer>
    </>
  );
}
