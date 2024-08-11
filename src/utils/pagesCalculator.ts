export function pagesCalculator(totalCount: number, perPage: number): number {
  if (totalCount) {
    return Math.ceil(totalCount / perPage);
  }

  return 1;
}
