// import React from "react";
import { useEffect, useState } from "react";
import * as S from "./ButtonBlock.styled";

type ButtonBlock = {
  currentPage?: number | null;
  setCurrentPage: (arg: number) => void;
  setSort: (arg: string) => void;
  maxPage: number;
  sort: string;
};

export default function ButtonBlock({
  currentPage,
  setCurrentPage,
  setSort,
  maxPage,
  sort,
}: ButtonBlock) {
  const [inputValue, setInputValue] = useState<number>(1);

  useEffect(() => {
    if (inputValue < 1) {
      return setInputValue(1);
    }

    if (inputValue > maxPage) {
      return setInputValue(maxPage);
    }

    setCurrentPage(inputValue);
  }, [inputValue, maxPage, setCurrentPage]);

  return (
    <>
      <S.ButtonBlockContainer>
        <S.InputBlock>
          <span>Выбрать страницу</span>
          <S.Input
            type="number"
            value={currentPage || 1}
            onChange={(e) => {
              setInputValue(Number(e.target.value));
            }}
          />
          <span>из {maxPage}</span>
        </S.InputBlock>
        <div>
          <S.SortBlock>
            <span>Показать по </span>
            <S.ButtonAscending
              onClick={() => setSort("ascending")}
              $sort={sort}
            >
              возрастанию
            </S.ButtonAscending>
            или
            <S.ButtonDescending
              onClick={() => setSort("descending")}
              $sort={sort}
            >
              убыванию
            </S.ButtonDescending>
            по количеству репозиториев
          </S.SortBlock>
        </div>
      </S.ButtonBlockContainer>
    </>
  );
}
