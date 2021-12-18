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
import Header from './Pages/Header/Header';
import Footer from './Pages/Footer/Footer';
import LogIn from './Pages/Login/LogIn';
import Register from './Pages/Register/Register';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/product/:productId" element={<Cart/>} />
      <Route path="/review" element={<Review/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/register" element={<Register/>} />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
