import React, { useContext } from 'react'
import Input from '../page/Input.jsx';
import {  useFormik } from 'formik';
import{ForgetpassSchema} from '../web/validate.js'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/User.jsx';
import { toast } from 'react-toastify';
export default function ForgetPassword() {
   
    const navigate = useNavigate();
    const initialValues={
        code:'',
        email:'',
        password:''    
    };
    const onSubmit= async users=>{
            const {data} = await axios.patch(`${import.meta.env.VITE_API_URL}/auth/forgotPassword`, users);
            if(data.message == 'success'){

                toast.success('Password updated',{
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    navigate('/login');
            }
    };

    
    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema: ForgetpassSchema,
              
    });
   
    const inputs =[
        {
            id:'email',
            type:'email',
            name:'email',
            title:'user email',
            value:formik.values.email,
        },{
            id:'password',
            type:'password',
            name:'password',
            title:'user password',
            value:formik.values.password,
        },{
            id:'code',
            type:'text',
            name:'code',
            title:'code',
            value:formik.values.code,
        }
            
    ];
    const renderInputs = inputs.map((input,index)=>
    <Input
       type={input.type} 
       id={input.id}
       name={input.name}
       title={input.title}
       code={input.code}
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
                <h2> forget password </h2>
                <form onSubmit={formik.handleSubmit}>
                   {renderInputs}
                   <button type='submit' disabled ={ !formik.isValid }>Login</button>
                   
                </form>
            </div>

        </>


    )
}
