import  { createContext, useState } from 'react'
import axios from 'axios';
export const OrderContext = createContext(null);

export function OrderContextProvider({children}) {
  const [loading,setLoading]=useState(true);
  const [userData,setUserData]=useState(null);

  const addToOrder = async(users)=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data} = await axios.post(`${import.meta.env.VITE_API_URL}/order`,users,
      {headers:{Authorization:`Tariq__${token}`}});
      setUserData(data.users);
      if(data.message == 'success'){
        toast.success('add order',{
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

  const getOrderContext = async ()=>{
    try{
      const token = localStorage.getItem("userToken");
      const {data} = await axios.get(`${import.meta.env.VITE_API_URL}/order`,
      {headers:{Authorization:`Tariq__${token}`}}
      );
      
      setLoading(false);
      return data;

    }catch(e){
        console.log(e);
    }
  }
  return <OrderContext.Provider value={{ addToOrder,getOrderContext,loading,userData}}>
    {children}
  </OrderContext.Provider>;
}
