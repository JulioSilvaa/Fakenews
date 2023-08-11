import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Images from '@/components/Images';
import LatestNews from '@/components/LatestNews';
import MostRead from '@/components/MostRead';

const Home = () => {
  return (
    <>
      <Header />
      <Images />
      <div className="md:fle-col lg:flex lg:p-4  justify-between border-t-4 border-solid border-red-500">
        <LatestNews />
        <MostRead />
      </div>
      <Footer />
    </>
  );
};

export default Home;
