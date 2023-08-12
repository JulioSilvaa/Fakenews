import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import Button from '@/components/Button';
import Input from '@/components/Input';

type FormValues = {
  name: string;
  username: string;
  email: string;
  password: string;
  avatarUrl: string;
};

const Register = () => {
  const { register, handleSubmit } = useForm<FormValues>();

  const formSubmit = (data: FormValues) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(formSubmit)}
      className="max-w-[500px] h-screen  container mx-auto mt-9 flex-1 flex flex-col p-5"
    >
      <h1 className="text-center text-2xl font-sans">Cadastro</h1>
      <Input name="name" label="Nome" type="text" register={{ ...register('name') }} />
      <Input name="email" label="Email" type="email" register={{ ...register('email') }} />
      <Input name="username" label="Usuário" type="text" register={{ ...register('username') }} />
      <Input name="password" label="Senha" type="text" register={{ ...register('password') }} />
      <Input name="avatarUrl" label="Avatar" type="file" register={{ ...register('avatarUrl') }} />
      <Button type="submit">Enviar</Button>
      <span className="mt-4 text-xs text-center">
        Já possui cadastro ? faça o
        <Link to="/login">
          <strong className="text-sm mx-1 text-red-600 cursor-pointer hover:underline">
            login
          </strong>
        </Link>
        e bora adicionar uma FAKENEWS
      </span>
    </form>
  );
};

export default Register;
