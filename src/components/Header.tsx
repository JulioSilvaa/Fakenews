const Header = () => {
  return (
    <header className=" flex justify-between items-center p-2 border-b-4 border-solid border-red-500">
      <img className="w-28" src="/public/logoFakenews.jpg" alt="logo do fakenews" />
      <div className="flex gap-3">
        <button>
          <span className="w-5 h-[1px] bg-black my-1 space-y-3 block" />
          <span className="w-5 h-[1px] bg-black my-1 space-y-3 block" />
          <span className="w-5 h-[1px] bg-black my-1 space-y-3 block" />
          <span className="w-5 h-[1px] bg-black my-1 space-y-3 block" />
        </button>
        <img
          className="w-12 rounded-full shadow-md"
          src="https://i.pravatar.cc/150?img=2"
          alt="Foto do perfil do usuário"
        />
      </div>
    </header>
  );
};

export default Header;
