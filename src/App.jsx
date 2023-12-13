import React, { useEffect } from "react";
import { RouterProvider} from "react-router-dom";
import { CartContext, CartContextProvider } from "./components/web/context/Cart.jsx";
import {router} from './components/layouts/routes.jsx';
import { UserContext } from "./components/web/context/User.jsx";
import { useContext } from "react";
import { OrderContextProvider } from "./components/web/context/Order.jsx";
export default function App() {
 
let {setUserToken} = useContext(UserContext);
let {count,setCount,getCartContext}=useContext(CartContext);
useEffect(()=>{
   if(localStorage.getItem("userToken") != null){
    setUserToken(localStorage.getItem("userToken"));
    setCount (count);
   }
},[])  

  return(
    
      <OrderContextProvider>
                <RouterProvider router={router} />

      </OrderContextProvider>
      
      
      
    
  )
}
