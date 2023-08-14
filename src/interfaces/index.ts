export interface INews {
  id: string;
  author: { name: string; id: string };
  content: string;
  createdAt: Date;
  slug: string;
  title: string;
  newsUrl: string[];
}

export interface DataNews extends INews {
  news: INews[];
}

export interface DataUser extends IUser {
  users: IUser[];
}

export interface IUserContext {
  options: object;
  setOptions: React.Dispatch<React.SetStateAction<object>>;
  data: IUser | null;
}
export interface INewsContext {
  news: string;
  setNews: React.Dispatch<React.SetStateAction<string>>;
}

export interface IUser {
  token: string;
  user: {
    id: string;
    email: string;
    username: string;
    avatarUrl: string;
    name: string;
    password: string;
    createdAt: Date;
  };
}
