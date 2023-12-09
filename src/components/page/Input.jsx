import React from 'react'

export default function Input({type='text',id,name,title,value,onChange,errors,onBlur,touched,image}) {
  
  return (
   <>
   <div className='container'>
   <div className='input-group md-3'>
   <label htmlFor={id}>{title}</label>
   <input type={type} name={name} className="form-control" id={id} value={value} image={image}  onChange={onChange} onBlur={onBlur}/>
   { touched[name] && errors[name] && <p className='text text-danger'>{errors[name]}</p>}
   </div>
   </div>
    </>
  );
}


