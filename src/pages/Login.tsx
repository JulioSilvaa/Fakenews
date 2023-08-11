import Button from '@/components/Button';

const Login = () => {
  return (
    <form className="w-2/6 mx-auto mt-8 flex flex-col">
      <h1 className="text-center">Login</h1>
      <div className="flex flex-col gap-2">
        <label htmlFor="email">Email</label>
        <input type="email" name="email" placeholder="teste@teste.com" />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password">Senha</label>
        <input type="password" name="password" placeholder="sdasdas" />
      </div>
      <Button variant="primary" type="button" onclick={() => console.log('julio')}>
        Enviar
      </Button>
    </form>
  );
};

export default Login;
