import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UseUser } from '@/Contexts/userContext';

import ModalProfile from './ModalProfile';

const Header = () => {
  const navigate = useNavigate();
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [logedin, setLogedin] = useState(false);

  const { user } = UseUser();
  console.log(user);

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
      {logedin && (
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
            className="w-12 rounded-full shadow-md"
            src="https://i.pravatar.cc/150?img=2"
            alt="Foto do perfil do usuário"
          />
        </div>
      )}

      {!logedin && (
        <button
          className=" px-4 border border-separate border-solid border-red-500 rounded-md shadow-md text-sm font-medium first-letter:text-red-500"
          onClick={handleLogin}
        >
          Login
        </button>
      )}

      {modalIsOpen ? <ModalProfile /> : ''}
    </header>
  );
};

export default Header;
