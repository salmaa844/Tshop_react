import React, { useContext } from 'react'
import Input from '../page/Input.jsx';
import {  useFormik } from 'formik';
import{loginSchema} from '../web/validate.js'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from './context/User.jsx';
import { Link } from 'react-router-dom';
import { colors } from '@mui/joy';

export default function Login() {
    let {setUserToken} = useContext(UserContext);
    const navigate = useNavigate();
    const initialValues={
        email:'',
        password:'',
    };
    const onSubmit= async users=>{
            const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signin`, users);
            if(data.message == 'success'){
                localStorage.setItem("userToken",data.token);
                setUserToken(data.token);
                toast.success('login succesful',{
                    position: "top-right",
                    autoClose: false,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
                    navigate('/');
            }
    };

    
    const formik =useFormik({
        initialValues,
        onSubmit,
        validationSchema: loginSchema,
              
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
            <div className='container '>
                <h2 className=' d-flex justify-content-center m-5' style={{color:'#f72'}}>  Login </h2>
                <form onSubmit={formik.handleSubmit}>
                   {renderInputs}
                   

                   <button type='submit' disabled ={ !formik.isValid }className='d-flex justify-content-center mx-auto' style={{width: '40%',color:'#f72'}}>Login</button>
                   <Link className=' link-underline-light d-flex justify-content-center m-3' to={'/sendcode'}style={{color:'#f72'}}>forget password?</Link>
                </form>
                
            </div>

            
        </>


    )
}
