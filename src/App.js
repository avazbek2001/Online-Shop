import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavbarMain from './components/navbar/NavbarMain';
import Home from './router/home/Home';
import Wishes from './router/wishes/Wishes';
import Login from './router/login/Login';
import Cart from './router/cart/Cart';
import Notfound from './router/not-found/Notfound';
import { PRODUCTS } from './static';
import SingleRoute from './router/single-route/SingleRoute';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <NavbarMain   />
      <Routes>
        <Route path='/' element={<Home data={PRODUCTS} />} />
        <Route path='/wishes' element={<Wishes />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/products/:id' element={<SingleRoute />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
