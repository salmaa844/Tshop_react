import React, { useContext } from 'react'
import { UserContext } from '../context/User.jsx';

export default function ProfileUser() {
    let { userData,setUserData} = useContext(UserContext);
  return (
    <div className="container mt-5">
  <div className="row d-flex justify-content-center">
    <div className="col-md-7">
      <div className="card p-3 py-4">
        <div className="text-center">
          <img src={userData!=null?userData.image.secure_url:" "} width={100} className="rounded-bottom-circle" />
        </div>
        <div className="text-center mt-3">
          <h5 className="mt-2 mb-0">{userData!=null?userData.userName:'name of Account'}</h5>
          <span>{userData!=null?userData.email:'Email of account'}</span>
          
        </div>
      </div>
    </div>
  </div>
</div>

  )
}
