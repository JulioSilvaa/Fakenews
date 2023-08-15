import { createContext, PropsWithChildren, useContext, useState } from 'react';

import useAuth from '@/hooks/useAuth';
import { IUser, IUserContext } from '@/interfaces';

const UserContext = createContext<IUserContext>({} as IUserContext);

export const UseUser = () => {
  const user = useContext(UserContext);
  return user;
};

export const UserContextProvider = ({ children }: PropsWithChildren) => {
  const [options, setOptions] = useState({});

  const { data, authUser } = useAuth<IUser>('/user/auth', options);

  const dataContext = {
    options,
    setOptions,
    data,
    authUser,
  };

  return <UserContext.Provider value={dataContext}> {children} </UserContext.Provider>;
};
