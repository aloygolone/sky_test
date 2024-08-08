type SearchType = {
  username: string;
  setUsername: (arg: string) => void;
};

export default function Search({ username, setUsername }: SearchType) {
  return (
    <input
      type="text"
      value={username}
      onChange={(e) => {
        setUsername(e.target.value);
      }}
      placeholder="Введите имя пользователя"
    />
  );
}
