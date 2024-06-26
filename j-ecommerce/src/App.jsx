import Navbar from "./Components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Shop from "./Pages/Shop";
import Footer from "./Components/Footer/Footer";
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png';
import Login from "./Pages/Login";

function App() {
  

  return (
    <>
      <BrowserRouter>
      <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Shop/>}> </Route>
      <Route path="/mens" element={<ShopCategory banner ={men_banner} category='men'/>}> </Route>
      <Route path="/womens" element={<ShopCategory banner= {women_banner} category='women'/>}> </Route>
      <Route path="/kids" element={<ShopCategory banner={kid_banner} category='kid'/>}> </Route>
      <Route path="/product" element={<Product/>}> </Route>
      <Route path="product/:productId" element={<Product/>}> </Route>
      <Route path="/cart" element={<Cart/>}> </Route>
      <Route path="/signup" element={<LoginSignup/>}> </Route>
      <Route path="/login" element={<Login/>}> </Route>
      </Routes>
      </div>
      <Footer/>
      
      </BrowserRouter>
    </>
  );
}

export default App;
