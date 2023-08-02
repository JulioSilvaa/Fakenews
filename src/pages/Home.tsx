import Images from '@/components/Images';
import LatestNews from '@/components/LatestNews';
import MostRead from '@/components/MostRead';

const Home = () => {
  return (
    <>
      <main className="">
        <Images />
        <article className="md:fle-col lg:flex lg:p-4  justify-between border-t-4 border-solid border-red-500">
          <LatestNews />
          <MostRead />
        </article>
      </main>
    </>
  );
};

export default Home;
