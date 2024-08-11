import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/";
import Header from "./Header";

test("заголовок отображается корректно", () => {
  const { getByText } = render(<Header />);
  const headerElement = getByText("GitHub пользователи");
  expect(headerElement).toBeInTheDocument();
});
