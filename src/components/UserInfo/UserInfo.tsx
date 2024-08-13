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
  const [inputValue, setInputValue] = useState<number>(1); // По аналогии с инпутом из MainPage - кол-во страниц не может быть меньше единицы, в случае некорректного значения возвращаемся к 1
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const maxPage = pagesCalculator(10, userInfo.repositories.total_count); // В данном случае 10 - это количество отображаемых элементов на страницы - для коммитов, тем и репозиториев - оно всегда неизменно для красоты отображения в элементе

  useEffect(() => {
    if (inputValue < 1) {
      return setInputValue(1);
    }

    if (inputValue > maxPage) {
      return setInputValue(maxPage);
    }

    setRepoPage(inputValue);
    if (isOpenedRepositories) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, [inputValue, maxPage, setRepoPage, isOpenedRepositories]);

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
            <Link
              to={userInfo.user_url}
              target="_blank"
              title={`Перейти на аккаунт GitHub - ${userInfo.userName}`}
            >
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
                <Link
                  to={userInfo.user_url}
                  target="_blank"
                  title={`Перейти на аккаунт GitHub - ${userInfo.userName}`}
                >
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
                <Link
                  key={item.id}
                  to={item.html_url}
                  target="_blank"
                  title={`Перейти на репозиторий ${item.name}`}
                >
                  <S.ReposText>{item.name}</S.ReposText>
                </Link>
              );
            })
          )}
        </S.ReposBlock>
      </S.UserIfoContainer>
    </>
  );
}
