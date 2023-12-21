import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from './context/User.jsx';

import {CartContext} from './context/Cart.jsx';
export default function Navbar() {

  let { userToken ,setUserToken,userData,setUserData} = useContext(UserContext);
  const {count} = useContext(CartContext);
  console.log(count);
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem('userToken');
    setUserToken(null);
    setUserData(null);
    
    navigate('/');
  }

 

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            T-shop
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav m-auto mb-2 mb-lg-0">

              
              <li className="nav-item">
                <Link className="nav-link" to='/'>home</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to='products/category/:categoryId'>Categories</Link>
              </li>


              <li className="nav-item">
                <Link className="nav-link" to='products'>Products</Link>
              </li>

              {userToken ? <li className="nav-item">
                <Link className="nav-link" to='/cart'>Cart  
                    <span class="badge  bg-secondary" style={{marginLeft:'10px'}}>{count}</span>
               </Link>
              </li> : null}


            </ul>
            <ul className="navbar-nav">
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {userData!=null?userData.userName:'Account'}
                </a>
                <ul className="dropdown-menu ">

                  {userToken == null ? <>
                    <li><Link className="dropdown-item" to="/register">register</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to='/login'>login</Link></li>
                  </> : (<>
                    <li><Link className="dropdown-item" to='/profile'>profile</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" onClick={logout}>logout</Link></li>
                  </>)}

                </ul>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </>
  )
}
