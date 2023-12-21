import React, { useContext } from 'react'
import { OrderContext } from '../context/Order';

export default function UserOrder() {
    const {userData,loading, getOrderContext} = useContext(OrderContext);
    

    const getorder = async () => {
        const res = await  getOrderContext();
        console.log(res);
    }
    console.log(userData);
    if(loading){
      return <p> Loading....</p>
    }
  return (
              <div className={style.userData}>
              <h2>{userData.phone}</h2>
            
              </div>
  )
}
