import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';
import style from './ProfileUser.module.css';
import { Link, Outlet } from 'react-router-dom';
export default function ProfileUser() {
    const {userData,loading} = useContext(UserContext);
    console.log(userData);
    if(loading){
      return <p> Loading....</p>
    }
  return (
          <aside className={style.profile}>
            <div className={style.profileLinks}>
                  <nav>
                    <Link to=''>info</Link>
                    <Link to='contact'>contact</Link>
                    <Link to=''>order</Link>
                  </nav>
            </div>
            <div className={style.userData}>
              <Outlet/>
            </div>
           
          </aside>
          
          
       

  )
}
