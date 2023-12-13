import  { createContext, useState } from 'react'

export const OrderContext = createContext(null);
export function OrderContextProvider({children}) {

  const orderContext = async(productId)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,
      {productId},
      {headers:{Authorization:`Tariq__${token}`}});
      return data;
    }
    catch(e){
     console.log(e);
    }
  }

  return <OrderContext.Provider value={{orderContext}}>
    {children}
  </OrderContext.Provider>;
}
