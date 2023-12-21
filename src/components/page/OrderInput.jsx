import React from 'react'

export default function OrderInput({type='text',id,name,title,value,onBlur,touched,onChange,errors}) {
  console.log(touched)
  
  return (
   <>
   <div className='container '>
   <div className='input-group md-3  w-50  m-auto'>
   <label className=' m-auto' htmlFor={id}>{title}</label>
   <input type={type} name={name}value={value} className="form-control m-lg-3" onBlur={onBlur} id={id}  onChange={onChange}/>
   { touched[name] && errors[name] && <p className='text text-danger m-auto'>{errors[name]}</p>}</div>
   </div>
    </>
  );
}
