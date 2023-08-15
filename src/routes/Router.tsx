import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CreateFakeNews from '@/pages/CreateFakeNews';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
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
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default Router;
