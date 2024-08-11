import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/";
import ButtonBlock from "./ButtonBlock";

const setCurrentPage = jest.fn();
const setSort = jest.fn();

test("Тест компонента без ошибок", () => {
  render(
    <ButtonBlock
      setCurrentPage={setCurrentPage}
      setSort={setSort}
      maxPage={10}
      sort={"asvending"}
    />
  );
  // Если компонент отобразился без ошибок, тест пройден
});

test("Тест на установку значения страницы", () => {
  const { getByRole } = render(
    <ButtonBlock
      setCurrentPage={setCurrentPage}
      maxPage={10}
      setSort={setSort}
      sort={"asvending"}
    />
  );
  const input = getByRole("spinbutton");
  fireEvent.change(input, { target: { value: "5" } });
  expect(setCurrentPage).toHaveBeenCalledWith(5);
});

test("Тест на установку значения сортировки", () => {
  const { getByText } = render(
    <ButtonBlock
      setCurrentPage={setCurrentPage}
      maxPage={10}
      setSort={setSort}
      sort={"asvending"}
    />
  );
  const ascendingButton = getByText("возрастанию");
  fireEvent.click(ascendingButton);
  expect(setSort).toHaveBeenCalledWith("ascending");
});

test("Тест на ограничение ввода значения страницы", () => {
  const setCurrentPage = jest.fn();
  const { getByRole } = render(
    <ButtonBlock
      setCurrentPage={setCurrentPage}
      maxPage={10}
      setSort={setSort}
      sort={"asvending"}
    />
  );
  const input = getByRole("spinbutton");
  fireEvent.change(input, { target: { value: "15" } });
  expect(input).toHaveValue("10"); // Значение должно быть ограничено до maxPage
});

test("Тест на изменение значения ввода", () => {
  const { getByRole } = render(
    <ButtonBlock
      setCurrentPage={setCurrentPage}
      maxPage={10}
      setSort={setSort}
      sort={"asvending"}
    />
  );
  const input = getByRole("spinbutton");
  fireEvent.change(input, { target: { value: "5" } });
  expect(input).toHaveValue("5");
});
