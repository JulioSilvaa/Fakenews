const Images = () => {
  return (
    <>
      <div className="container m-6 mx-auto">
        <h1 className="text-center p-3 text-red-600 text-3xl font-bold">Últimas notícias</h1>
        <div className="mt-3 p-4  space-y-3 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-4">
          <div className="w-full col-span-2 row-span-3 rounded-md shadow-md relative ">
            <div className="absolute  bottom-2 right-2">
              <span className="text-red-500 font-semibold text-3xl ">Slug</span>
              <h1 className="text-white font-semibold text-3xl">Notícia 1</h1>
            </div>
            <img
              className="w-full h-72 rounded-md shadow-md lg:h-full"
              style={{ objectFit: 'cover' }}
              src="https://picsum.photos/300/300?grayscale"
              alt=""
            />
          </div>
          <div className=" w-full rounded shadow-md relative">
            <div className="absolute  bottom-2 right-2">
              <span className="text-red-500  font-semibold text-3xl">Slug</span>
              <h1 className="text-white font-semibold text-3xl">Notícia 1</h1>
            </div>
            <img
              className="w-full h-72 rounded-md lg:h-full"
              src="https://picsum.photos/800/800?grayscale"
              alt=""
            />
          </div>
          <div className="w-full rounded shadow-md relative ">
            <div className="absolute  bottom-2 right-2">
              <span className="text-red-500  font-semibold text-3xl">Slug</span>
              <h1 className="text-white font-semibold text-3xl">Notícia 1</h1>
            </div>
            <img
              className="w-full h-72 rounded-md lg:h-full"
              src="https://picsum.photos/800/800?grayscale"
              alt=""
            />
          </div>
          <div className="col-span-1 row-span-2 rounded shadow-md relative ">
            <div className=" absolute  bottom-2 right-2">
              <span className="text-red-500  font-semibold text-3xl">Slug</span>
              <h1 className="text-white font-semibold text-3xl">Notícia 1</h1>
            </div>
            <img
              className="w-full h-72 rounded-md lg:h-full"
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
