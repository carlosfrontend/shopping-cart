import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { PageContainer } from './components/PageContainer/PageContainer.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage/HomePage.jsx';
import { ShoppingPage } from './components/ShoppingPage/ShoppingPage.jsx';
import { CartPage } from './components/CartPage/CartPage.jsx';
import { ErrorPage } from './components/ErrorPage/ErrorPage.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PageContainer />}>
          <Route index={true} element={<HomePage />} />
          <Route path='shop' element={<ShoppingPage />} />
          <Route path='cart' element={<CartPage />} />
          <Route path='*' element={<ErrorPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
