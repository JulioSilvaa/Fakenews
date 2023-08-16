import { useNavigate } from 'react-router-dom';

import { UseUser } from '@/Contexts/userContext';

interface IModalProps {
  handleModalOpen: () => void;
}

const ModalProfile = ({ handleModalOpen }: IModalProps) => {
  const navigate = useNavigate();

  const { data } = UseUser();
  console.log(data);

  return (
    <div className="absolute w-48 lg:font-semibold right-8 top-16 bg-slate-50 border border-solid border-red-500 shadow-lg rounded-md">
      <nav className="p-2 text-lg">
        <ul>
          <li className="hover:cursor-pointer hover:border-b-[1px] hover:border-red-400">
            Minhas Notícias
          </li>
          <li
            onClick={() => (navigate('/noticias'), handleModalOpen())}
            className="hover:cursor-pointer hover:border-b-[1px] hover:border-red-400"
          >
            Adicionar Notícia
          </li>
          <li
            onClick={() => {
              localStorage.removeItem('token');
              handleModalOpen();
              window.location.reload();
            }}
            className="hover:cursor-pointer hover:border-b-[1px] hover:border-red-400"
          >
            Logout
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default ModalProfile;
