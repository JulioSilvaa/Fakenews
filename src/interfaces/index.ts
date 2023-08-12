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
  user: string;
  setUser: React.Dispatch<React.SetStateAction<string>>;
}
export interface INewsContext {
  news: string;
  setNews: React.Dispatch<React.SetStateAction<string>>;
  // data: DataNews;
}

export interface IUser {
  id: string;
  name: string;
  avatarUrl: string;
  posts: [title: string, slug: string, content: string];
}
