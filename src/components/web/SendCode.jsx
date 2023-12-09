import React, { useContext } from 'react'
import Input from '../page/Input.jsx';
import {  useFormik } from 'formik';
import{sendcodeSchema} from '../web/validate.js'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/User.jsx';


export default function SendCode() {
    let {setUserToken} = useContext(UserContext);
    const navigate = useNavigate();
    const initialValues={
        email:'',
    };
    const onSubmit= async users=>{
            const {data} = await axios.patch(`https://ecommerce-node4.vercel.app/auth/sendcode`,users);
            if(data.message == 'success'){
                localStorage.setItem("userToken",data.token);
                setUserToken(data.token);
                toast.success('code send succesful',{
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    navigate('/forgetpassword');
            }
    };

    
    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema:sendcodeSchema,
              
    });
   
    const inputs =[
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        }
    ];
    const renderInputs = inputs.map((input,index)=>
    <Input
       type={input.type} 
       id={input.id}
       name={input.name}
       title={input.title}
       key={index}
       errors={formik.errors}
       value={input.value}
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       touched={formik.touched}
       />
    )
    return (
        
        <>
            <div className='container'>
                <h2> Send Code </h2>
                <form onSubmit={formik.handleSubmit}>
                   {renderInputs}
                   <button type='submit' disabled ={ !formik.isValid }> send</button>
                </form>
            </div>

        </>


    )
}
