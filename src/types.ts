export type UserType = {
  id: string;
  html_url: string;
  login: string;
  avatar_url: string;
};

export type DataType = {
  items: UserType[];
  total_count: number | null;
};

export type InfoDataType = {
  total_count: number;
  items: Items[];
};

export type Items = {
  id: string;
  html_url: string;
  name: string;
};

export type UserInfoType = {
  id: string;
  userName: string;
  user_url: string;
  userPhotoUrl: string;
  repositories: InfoDataType;
  commitsCount: number;
  topicsCount: number;
};
