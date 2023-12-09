import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';
export const CartContext = createContext(null);

export function CartContextProvider({children}){
  const [numcount,setCount]= useState(0);
  const addToCartContext = async(productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}}
      )
      setCount(data.count);
        if(data.message == 'success'){
          toast.success('prodect added succesful',{
            position: "top-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      return data;
    }
    catch(e){
     console.log(e);
    }
  }

  const getCartContext = async ()=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/cart`,
      {headers:{Authorization:`Tariq__${token}`}}
      );
      return data;

    }catch(e){
        console.log(e);
    }
  }
  const removeItemContext = async (productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/removeItem`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}}
      );
      return data;

    }catch(e){
      console.log(e);
    }
  }
  return <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext,numcount,setCount}}>
        {children}
  </CartContext.Provider>;
}