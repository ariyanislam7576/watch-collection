import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Review from './Pages/Review/Review'
import Cart from './Pages/Cart/Cart';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/product/:productId" element={<Cart/>} />
      <Route path="/review" element={<Review/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
