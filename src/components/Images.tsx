import useFetch from '@/hooks/useFetch';
import { DataNews } from '@/interfaces';

const Images = () => {
  const { data } = useFetch<DataNews>('/news');

  const lastFiveNews = data?.news?.slice(1, 5);
  const highlight = data?.news.slice(0, 1);

  const lastNews = highlight?.map((news) => (
    <section key={news.id} className="relative rounded-md shadow-lg col-span-2 row-span-2">
      <div className=" bottom-2 right-2">
        <h1 className="absolute text-white right-4 bottom-14 font-semibold text-2xl ">
          {news.title}
        </h1>
        <span className="absolute right-4 bottom-4  text-white bg-red-500 py-1 px-2 font-semibold text-md ">
          {news.slug}
        </span>
        <img
          className="w-full rounded-md hover:cursor-pointer object-cover"
          src={news.newsUrl[0]}
        />
      </div>
    </section>
  ));
  const images = lastFiveNews?.map((news) => (
    <section key={news.id} className=" relative rounded-md shadow-lg  ">
      <div className=" bottom-2 right-2">
        <h1 className="absolute text-slate-50 right-4 bottom-14 font-semibold text-lg text-right">
          {news.title}
        </h1>
        <span className="absolute right-4 bottom-4  text-white bg-red-500 py-1 px-2 font-semibold text-md ">
          {news.slug}
        </span>
        <img
          className="w-full  rounded-md hover:cursor-pointer object-cover"
          src={news.newsUrl[0]}
        />
      </div>
    </section>
  ));

  return (
    <article className="container m-6 mx-auto flex-col">
      <h1 className="text-center p-4 text-red-600 text-3xl font-bold">Últimas notícias</h1>
      <div className="w-full flex flex-col lg:grid lg:grid-cols-4 lg:grid-rows-2 items-center gap-2 md:rows-[200px] ">
        {lastNews}
        {images}
      </div>
    </article>
  );
};

export default Images;
