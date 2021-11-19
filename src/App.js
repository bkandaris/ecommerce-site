import './App.css';
import Home from './components/Home';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import Product from './components/Product';
import RegisterPage from './components/RegisterPage';
import LoginPage from './components/LoginPage';
import Cart from './components/Cart';
import Pay from './components/Pay';
import Success from './components/Success';
import { BrowserRouter as Router, Route, Routes, Redirect } from 'react-router-dom';

function App() {
  const user = true;

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/product/:id' element={<ProductPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
