import axios from "axios";
import { createContext, useState } from "react";
import { toast } from 'react-toastify';

export const CartContext = createContext(null);

export function CartContextProvider({children}){
   let [count,setCount]= useState(0);
  const addToCartContext = async(productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/cart`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}});
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
      setCount(++count);
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
  const clearcart = async (productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/clear`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}}
      );
      if(data.message == 'success'){
        toast.success('clear all succesful',{
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
    }catch(e){
      console.log(e);
    }
  }
  const incraseQuantityContext = async (productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/incraseQuantity`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}}
      );
      return data;

    }catch(e){
      console.log(e);
    }
  }

  const decraseQuantityContext = async (productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data}= await axios.patch(`${import.meta.env.VITE_API_URL}/cart/decraseQuantity`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}}
      );
      return data;

    }catch(e){
      console.log(e);
    }
  }
  

  return <CartContext.Provider value={{addToCartContext,getCartContext,removeItemContext,count,clearcart,setCount,incraseQuantityContext,decraseQuantityContext }}>
        {children}
  </CartContext.Provider>;
}