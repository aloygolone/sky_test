type ButtonBlock = {
  currentPage: number;
  setCurrentPage: (arg: number) => void;
  setSort: (arg: string) => void;
};

export default function ButtonBlock({
  currentPage,
  setCurrentPage,
  setSort,
}: ButtonBlock) {
  return (
    <>
      <input
        type="number"
        value={currentPage}
        onChange={(e) => {
          setCurrentPage(Number(e.target.value));
        }}
      />
      <button onClick={() => setSort("ascending")}>
        Сортировка по возрастанию
      </button>
      <button onClick={() => setSort("descending")}>
        Сортировка по убыванию
      </button>
    </>
  );
}
