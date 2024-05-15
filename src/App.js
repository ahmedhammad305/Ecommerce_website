import './App.css';
import Home from './compont/Home';
import Nav from './compont/Nav'
import { Route, Routes, useLocation} from 'react-router-dom';
import React, { useEffect } from 'react'
import ProductDetails from './compont/ProductDetails';
import Cart1 from './compont/Cart1';
// import PillingDetails from './compont/PillingDetails';
import Payment from './compont/Payment';
import Login from './compont/Login';
import Products from './compont/Products';
function App() {
  const location = useLocation();
  useEffect(()=> {
  window.scrollTo({top:0, left:0, behavior:'instant'})  
  }, [location.pathname]);
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="product/:id" element = {<ProductDetails/>}/>
      <Route path='Cart1' element = {<Cart1/>}></Route>
      <Route path='Payment' element = {<Payment/>}/>
      <Route path='Login' element = {<Login/>}/>
      <Route path='Products' element = {<Products/>}/>
    </Routes>
      </>
    
  );
}

export default App;
