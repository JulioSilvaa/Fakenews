import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';
import { UseUser } from '@/Contexts/userContext';

type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const { register, handleSubmit, resetField } = useForm<FormValues>();

  const navigate = useNavigate();

  const { setOptions, authUser } = UseUser();

  const formSubmit = (data: FormValues) => {
    setOptions(data);
    authUser();
    resetField('password');
    resetField('email');
    navigate('/');
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="max-w-[500px] h-screen container mx-auto mt-9 flex-1  flex flex-col p-5"
    >
      <h1 className="text-center text-2xl font-sans">Login</h1>
      <Input name="email" label="Email" type="email" register={{ ...register('email') }} />
      <Input name="password" label="Senha" type="text" register={{ ...register('password') }} />
      <Button variant="primary" type="submit">
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
