import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CreateFakeNews from '@/pages/CreateFakeNews';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NewsFromCreator from '@/pages/newsFromCreator';
import Register from '@/pages/Register';

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/noticias" element={<CreateFakeNews />} />
          <Route path="/minhas/noticias/:id" element={<NewsFromCreator />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
