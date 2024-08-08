export type UserType = {
  id: string;
  html_url: string;
  login: string;
};

export type DataType = {
  items: UserType[];
  total_count: number;
};

export type RepoType = {
  id: string;
  html_url: string;
  name: string;
};
