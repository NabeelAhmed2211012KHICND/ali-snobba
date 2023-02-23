import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  Navbar from './Components/Navbar';
import Cart from './Pages/cart/Cart';
import ProductList from './Components/ProductList';
import ProductDetails from './Components/ProductDetails';
import Thanks from './Components/Thanks';
function App() {
  return (
    <div className="App">

      <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<ProductList/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/details/:productID" element={<ProductDetails/>} />
        <Route path="/thanks" element={<Thanks/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
