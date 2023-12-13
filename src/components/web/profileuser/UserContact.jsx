import React, { useContext } from 'react'
import style from './ProfileUser.module.css';
import { UserContext } from '../context/User.jsx';
export default function UserContact() {
    const {userData,loading} = useContext(UserContext);
    console.log(userData);
    if(loading){
      return <p> Loading....</p>
    }
  return (
    <div className={style.userData}>
              <h2>{userData.email}</h2>
             
    </div>
  )
}
