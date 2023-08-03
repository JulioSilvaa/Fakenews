const LatestNews = () => {
  return (
    <section className="mx-2 lg:w-2/4 lg:mx-auto lg:flex place-items-center flex-col">
      <h2 className="text-center mt-5 text-2xl font-semibold text-red-500">Notícias Anteriores</h2>
      <div className="w-full flex mt-3 p-3 border-b-2 border-solid border-gray-200 ">
        <img
          style={{ objectFit: 'cover' }}
          className="w-48 h-28 rounded-md shadow-lg"
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className="ml-3">
          <span className="bg-red-500 text-white font-semi-bold text-center text-xs px-4 py-1">
            SLUG
          </span>
          <span className="ml-2 font-light text-xs">14h22 - 02 Ago</span>
          <p className="pt-3 text-lg font-semibold text-zinc-800">Últimas Notícias</p>
        </div>
      </div>
      <div className="w-full flex mt-3 p-3 border-b-2 border-solid border-gray-200">
        <img
          style={{ objectFit: 'cover' }}
          className="w-48 h-28 rounded-md shadow-lg"
          src="https://picsum.photos/200/200"
          alt=""
        />
        <div className="ml-3">
          <span className="bg-red-500 text-white font-semi-bold text-center text-xs px-4 py-1">
            SLUG
          </span>
          <span className="ml-2 font-light text-xs">14h22 - 02 Ago</span>
          <p className="pt-3 text-lg font-semibold text-zinc-800 ">Últimas Notícias</p>
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
