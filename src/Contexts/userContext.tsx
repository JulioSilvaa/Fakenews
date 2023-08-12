import { createContext, PropsWithChildren, useContext, useState } from 'react';

import useAuth from '@/hooks/useAuth';
import { IUserContext } from '@/interfaces';

const UserContext = createContext<IUserContext | null>(null!);

export const UseUser = () => {
  const user = useContext(UserContext);
  if (user === null) throw new Error('Provider sem acesso ao children no APP');
  return user;
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState({});
  const [options, setOptions] = useState({});

  const { data: User } = useAuth('/user/auth', options);

  const data = {
    user,
    setUser,
    options,
    setOptions,
    User,
  };

  return <UserContext.Provider value={data}> {children} </UserContext.Provider>;
};
