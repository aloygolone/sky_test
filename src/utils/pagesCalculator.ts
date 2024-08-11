export function pagesCalculator(perPage: number, totalCount?: number): number {
  if (totalCount) {
    return Math.ceil(totalCount / perPage);
  }

  return 1;
}
