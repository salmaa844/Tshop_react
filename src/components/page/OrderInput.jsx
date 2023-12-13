import React from 'react'

export default function OrderInput({type='text',couponName,address,phone}) {
  
  return (
   <>
   <div className='container'>
   <div className='input-group md-3'>
   <label htmlFor={id}>{title}</label>
   <input type={type} couponName={couponName} className="form-control" address={address} phone={phone} />
   </div>
   </div>
    </>
  );
}
