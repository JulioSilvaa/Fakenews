import { createContext, PropsWithChildren, useContext, useState } from 'react';

// import useFetch from '@/hooks/useFetch';
import { IUserContext } from '@/interfaces';

const UserContext = createContext<IUserContext | null>(null);

export const UseUser = () => {
  const user = useContext(UserContext);
  if (user === null) throw new Error('Provider sem acesso ao children no APP');
  return user;
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState('Julio');

  // const { data: User } = useFetch<IUser[]>('/user');

  const data = {
    user,
    setUser,
  };

  return <UserContext.Provider value={data}> {children} </UserContext.Provider>;
};
