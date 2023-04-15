import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './fetch/ProductDetail';
import Categories from './fetch/Categories';
import Products from './fetch/Products';
import CartDetail from './fetch/cartDetail';
import Checkout from './fetch/Checkout';

function App() {
 
  return (
    
    <Router>
    <div className="App">
      <Routes>
        <Route path="/inventory" element={<Categories/>} />
        <Route path="/inventory/categoriesComponent/:categoryId" element={<Products />} />
        <Route path="/inventory/productsComponent/:productId" element={<ProductDetail />} />
        <Route path="/cartDetail/display" element={<CartDetail />} />
        <Route path="/checkout" element={<Checkout/>} />

      </Routes>
    </div>
  </Router>
  );
}

export default App;
