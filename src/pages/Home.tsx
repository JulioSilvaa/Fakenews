import Images from '@/components/Images';

const Home = () => {
  return (
    <body className="w-full">
      <main className="border-b-4 border-solid border-red-500">
        <Images />
      </main>
      <section className="md:fle-col lg:flex  justify-between">
        <article className="w-2/4 mx-auto flex place-items-center flex-col">
          <h2 className="text-center mt-5 text-2xl font-semibold text-red-500">
            Notícias Anteriores
          </h2>
          <div
            style={{ objectFit: 'cover' }}
            className=" w-[300px] h-[200px] bg-bg-news bg-no-repeat bg-cover rounded-md mt-2"
          >
            <h1>hh</h1>
          </div>
        </article>
        <article className="w-2/4 mx-auto">
          <h2 className=" text-center mt-5 text-2xl font-semibold text-red-500">Mais Lidas</h2>
        </article>
      </section>
    </body>
  );
};

export default Home;
