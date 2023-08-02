const Footer = () => {
  return (
    <footer className="md:fle-col lg:flex  justify-between border-t-4 border-solid border-red-500">
      <div className="w-full  flex flex-col">
        <div className="w-full p-4 flex justify-between items-center">
          <div>
            <h3 className="text-center font-semibold text-xl">Contato</h3>
            <div className="flex mt-3  items-center text-sm">
              <img className="w-8 " src="/public/email.png" alt="" />
              <span className="ml-3"> email@fakenews.com </span>
            </div>
            <div className="flex mt-3  items-center text-sm">
              <img className="w-8 " src="/public/email.png" alt="" />
              <span className="ml-3"> 99-009900900</span>
            </div>
            <div className="flex mt-3  items-center text-sm">
              <img className="w-8 " src="/public/email.png" alt="" />
              <span className="ml-3"> email@fakenews.com </span>
            </div>
          </div>
          <img className="w-52" src="/public/logoFakenews.jpg" alt="" />
        </div>

        <h2 className="text-center p-2 text-md font-semibold text-yellow-50  bg-red-500">
          2023 - Todos os direitos reservados @FAKENEWS
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
