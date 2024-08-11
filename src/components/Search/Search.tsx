import { useState } from "react";
import * as S from "./Search.styled.ts";

type SearchType = {
  username: string;
  resultCount: number | null;
  setUsername: (arg: string) => void;
  setPerPage: (arg: number) => void;
};

export default function Search({
  username,
  setUsername,
  resultCount,
  setPerPage,
}: SearchType) {
  const resultPerPage: number[] = [10, 20, 30];
  const [selectedPerPage, setSelectedPerPage] = useState<number>(10);

  return (
    <>
      <S.SearchContainter>
        <S.SearchInput
          type="text"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
          placeholder="Введите имя пользователя"
        />
        <S.ResultBlock>
          <S.Text>Результатов найдено: {resultCount}</S.Text>
          <S.PrePageBlock>
            Показывать по:
            {resultPerPage.map((item, index) => (
              <S.ResultPerPage
                key={index}
                onClick={() => {
                  setPerPage(Number(item));
                  setSelectedPerPage(item);
                }}
                $isselected={(item === selectedPerPage).toString()}
              >
                {item}
              </S.ResultPerPage>
            ))}
            на странице
          </S.PrePageBlock>
        </S.ResultBlock>
      </S.SearchContainter>
    </>
  );
}
