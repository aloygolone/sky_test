import { pagesCalculator } from "./pagesCalculator";

describe("pagesCalculator", () => {
  test("возвращает правильное значение", () => {
    expect(pagesCalculator(3, 10)).toBe(4); // 10 / 3 = 3.33, округляется до 4
  });

  test("возвращает 1, если totalCount равно 0", () => {
    expect(pagesCalculator(10, 0)).toBe(1); // Если totalCount равно 0, возвращается 1
  });

  test("возвращает 1, если totalCount не указан", () => {
    expect(pagesCalculator(10, undefined)).toBe(1); // Если totalCount не указан, возвращается 1
  });
});
