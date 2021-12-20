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
import AuthProvidor from './Context/AuthProvidor';
import ResponsiveDrawer from './Pages/DashBoard/DashBoard';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Payment from './Pages/DashBoard/Payment/Payment';
import MakeAdmin from './Pages/DashBoard/AdminRoute/MakeAdmin/MakeAdmin';
import AddReview from './Pages/DashBoard/AddReview/AddReview'
import ManageOrder from './Pages/DashBoard/AdminRoute/ManageOrder/ManageOrder'
import ManageProduct from './Pages/DashBoard/AdminRoute/ManageProduct/ManageProduct'
import AddProduct from './Pages/DashBoard/AdminRoute/AddProduct/AddProduct';
import MyOrder from './Pages/DashBoard/MyOrder/MyOrder';
function App() {
  return (
    <div className="App">
      <AuthProvidor>
      <BrowserRouter>
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/home" element={<Home/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/product/:productId" element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path="/review" element={<Review/>} />
      <Route path="/login" element={<LogIn/>} />
      <Route path="/register" element={<Register/>} />
      <Route path="/dashboard" element={<PrivateRoute><ResponsiveDrawer/></PrivateRoute>} >
          <Route path={`/dashboard/makeadmin`} element={<MakeAdmin />}>
          </Route>
          <Route path={`/dashboard/payment`} element={<Payment/>} >
          </Route>
          <Route path={`/dashboard/addreview`}element={<AddReview></AddReview>} > 
          </Route>
          <Route path={`/dashboard`}element={<MyOrder/>} > 
          </Route>
          <Route path={`/dashboard/manageorder`} element={<ManageOrder></ManageOrder>}>
          </Route>
          <Route path={`/dashboard/manageproduct`} element={<ManageProduct></ManageProduct>}>
          </Route>
          <Route path={`/dashboard/addproduct`} element={<AddProduct/>}>
          </Route>
      </Route>
      
      </Routes>
      </BrowserRouter>
      </AuthProvidor>
    </div>
  );
}

export default App;
