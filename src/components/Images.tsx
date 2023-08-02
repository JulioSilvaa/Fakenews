const Images = () => {
  return (
    <>
      <div className="container w-[70%] m-6 mx-auto">
        <h1 className="text-center p-3 text-red-600 text-2xl font-bold">Últimas notícias</h1>
        <div className="mt-3 p-4 space-y-1 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3 ">
          <div className="w-full col-span-2 row-span-2 rounded-md shadow-md relative">
            <div className="absolute  bottom-2 right-2">
              <span className="text-red-500 text-sm font-semibold ">Slug</span>
              <h1 className="text-white font-semibold">Notícia 1</h1>
            </div>
            <img
              className="w-full rounded-md shadow-md"
              style={{ objectFit: 'cover' }}
              src="https://picsum.photos/300/300?grayscale"
              alt=""
            />
          </div>
          <div className=" w-full rounded shadow-md relative">
            <div className="absolute  bottom-2 right-2">
              <span className="text-red-500 text-sm font-semibold ">Slug</span>
              <h1 className="text-white font-semibold">Notícia 1</h1>
            </div>
            <img
              className="w-full rounded-md"
              src="https://picsum.photos/800/800?grayscale"
              alt=""
            />
          </div>
          <div className="w-full rounded shadow-md relative ">
            <div className="absolute  bottom-2 right-2">
              <span className="text-red-500 text-sm font-semibold ">Slug</span>
              <h1 className="text-white font-semibold">Notícia 1</h1>
            </div>
            <img
              className="w-full rounded-md"
              src="https://picsum.photos/800/800?grayscale"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Images;
