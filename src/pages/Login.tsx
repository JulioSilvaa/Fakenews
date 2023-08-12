import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';

const Login = () => {
  return (
    <form className="max-w-[350px] container mx-auto mt-9 flex-1 flex flex-col p-5">
      <h1 className="text-center text-2xl font-sans">Login</h1>
      <Input name="email" label="Email" type="email" />
      <Input name="password" label="Senha" type="text" />
      <Button variant="primary" type="button" onclick={() => console.log('julio')}>
        Enviar
      </Button>
      <span className="mt-4 text-sm">
        Ainda não possui cadastro ?
        <Link to="/register">
          <strong className="text-left mx-1 text-red-600 cursor-pointer hover:underline">
            cadastre-se
          </strong>
        </Link>
        para criar uma FAKENEWS
      </span>
    </form>
  );
};

export default Login;
