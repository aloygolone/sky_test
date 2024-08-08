import { UserType } from "../../types";

type UserListType = {
  users: UserType[];
};

export default function UserList({ users }: UserListType) {
  return (
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            {user.login}
          </a>
        </li>
      ))}
    </ul>
  );
}
