import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kids_banner from './Components/Assets/banner_kids.png';

function Layout() {
  const location = useLocation();
  const hideNavAndFooter = location.pathname === '/Login' || location.pathname === '/signup';

  return (
    <>
      {/* Conditionally render Navbar and Footer */}
      {!hideNavAndFooter && <Navbar />}
      
      <Routes>
        <Route exact path="/" element={ <Shop /> } />
        <Route exact path="/Mens" element={ <ShopCategory banner={ men_banner } category="men" /> } />
        <Route exact path="/Women" element={ <ShopCategory banner={ women_banner } category="women" /> } />
        <Route exact path="/Kids" element={ <ShopCategory banner={ kids_banner } category="kid" /> } />
        <Route path="product" element={ <Product /> }>
          <Route path=":productId" element={ <Product /> } />
        </Route>
        <Route exact path="/cart" element={ <Cart /> } />
        <Route exact path="/Login" element={ <Login /> } />
        <Route exact path="/signup" element={ <Signup /> } />
      </Routes>

      {!hideNavAndFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

