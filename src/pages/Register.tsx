import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';

const Register = () => {
  return (
    <form className="max-w-[350px] container mx-auto mt-9 flex-1 flex flex-col p-5">
      <h1 className="text-center text-2xl font-sans">Cadastro</h1>
      <Input name="name" label="Nome" type="text" />
      <Input name="email" label="Email" type="email" />
      <Input name="username" label="Usuário" type="text" />
      <Input name="password" label="Senha" type="text" />
      <Input name="avatarUrl" label="Avatar" type="file" />
      <Button variant="primary" type="submit" onclick={() => console.log('julio')}>
        Enviar
      </Button>
      <span className="mt-4 text-sm">
        Já possui cadastro ? faça o
        <Link to="/register">
          <strong className="text-left mx-1 text-red-600 cursor-pointer hover:underline">
            login
          </strong>
        </Link>
        e bora adicionar uma FAKENEWS
      </span>
    </form>
  );
};

export default Register;
