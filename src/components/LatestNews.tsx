import useFetch from '@/hooks/useFetch';
import { DataNews } from '@/interfaces';
import { formatDate } from '@/utils/formatDate';

const LatestNews = () => {
  const { data } = useFetch<DataNews>('/news');

  const lastSixNews = data?.news.slice(1, 6);

  const latestNews = lastSixNews?.map((news) => (
    <div key={news.id} className="w-full flex mt-3 p-3 border-b-2 border-solid border-gray-200 ">
      <img
        style={{ objectFit: 'cover' }}
        className="w-48 h-28 rounded-md shadow-lg"
        src={news.newsUrl[0]}
        alt=""
      />
      <div className="ml-3">
        <span className="bg-red-500 text-white font-semi-bold text-center text-xs px-4 py-1">
          {news.slug}
        </span>
        <span className="ml-2 font-light text-xs">{formatDate(news.createdAt)}</span>
        <p className="pt-3 text-lg font-semibold text-zinc-800">{news.title}</p>
      </div>
    </div>
  ));

  return (
    <section className="mx-2 lg:w-2/4 lg:mx-auto lg:flex place-items-center flex-col">
      <h2 className="text-center mt-5 text-2xl font-semibold text-red-500">Notícias Anteriores</h2>
      {latestNews}
    </section>
  );
};

export default LatestNews;
