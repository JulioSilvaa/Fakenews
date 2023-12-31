import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UseUser } from '@/Contexts/userContext';

import ModalProfile from './ModalProfile';

const Header = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logedin, setLogedin] = useState(false);

  const { data } = UseUser();

  const handleModalOpen = () => {
    setModalIsOpen(!modalIsOpen);
  };

  const handleLogin = () => {
    setLogedin(!logedin);
    navigate('/login');
  };

  return (
    <header className="flex w-full justify-between items-center p-2 border-b-4 border-solid border-red-500 relative">
      <Link to={'/'}>
        <img className="w-28 cursor-pointer" src="/logoFakenews.jpg" alt="logo do fakenews" />
      </Link>
      {data && (
        <div className="flex gap-3">
          <button onClick={handleModalOpen}>
            <span
              className={`${
                modalIsOpen
                  ? 'w-6 h-[2px] bg-black block  rotate-45 transition-all duration-200'
                  : 'w-5 h-[1px] bg-black my-1 space-y-3 block'
              }`}
            />
            <span
              className={`${modalIsOpen ? 'hidden' : 'w-5 h-[1px] bg-black my-1 space-y-3 block'}`}
            />
            <span
              className={`${modalIsOpen ? 'hidden' : 'w-5 h-[1px] bg-black my-1 space-y-3 block'}`}
            />
            <span
              className={`${
                modalIsOpen
                  ? 'w-6 h-[2px] bg-black  block  -rotate-45 transition-all duration-200'
                  : 'w-5 h-[1px] bg-black my-1 space-y-3 block'
              }`}
            />
          </button>

          <img
            className="w-12 h-12 rounded-full shadow-md text-[10px] text-center "
            src={data?.user.avatarUrl}
            alt="Avatar do Usuário"
          />
        </div>
      )}

      {!data && (
        <div className="gap-2 flex flex-wrap">
          <button
            className=" px-2 md:h-8 border border-separate border-solid border-red-500 rounded-md shadow-md text-md md:text-lg font-medium first-letter:text-red-500"
            onClick={handleLogin}
          >
            Login
          </button>
          <button
            className=" px-2 h-8 border border-separate border-solid border-red-500 rounded-md shadow-md text-md md:text-lg font-medium first-letter:text-red-500"
            onClick={() => navigate('/register')}
          >
            Cadastrar
          </button>
        </div>
      )}

      {modalIsOpen ? <ModalProfile handleModalOpen={handleModalOpen} /> : ''}
    </header>
  );
};

export default Header;
