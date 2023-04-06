import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductDetail from './further/ProductDetail';
import Categories from './further/Categories';
import Products from './further/Products';

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/categories" element={<Categories />} />
        <Route path="/products/:categoryId" element={<Products />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
      </Routes>
    </div>
  </Router>
  );
}

export default App;
