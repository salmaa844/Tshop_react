import React from 'react'

export default function Input({type='text',id,name,title,value,onChange,errors,onBlur,touched,image}) {
  
  return (
   <>
   <div className='container  p-3 my-5 d-flex flex-column w-50'>
   <div className='input-group'>
   <input type={type} name={name} placeholder={title} className="form-control mb-4" id={id} value={value} image={image}  onChange={onChange} onBlur={onBlur}/>
   { touched[name] && errors[name] && <p className='text text-danger'>{errors[name]}</p>}
   </div>
   </div>
    </>
  );
}


