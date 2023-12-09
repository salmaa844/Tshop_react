import React from 'react'
import Input from '../page/Input.jsx';
import {  useFormik } from 'formik';
import{validationSchema} from '../web/validate.js'
import { toast } from 'react-toastify';
import axios from 'axios';
export default function Regester() {

    const handelFileValue =  (event)=>{
         formik.setFieldValue('image',event.target.files[0]);
        }  
    const initialValues={
        userName:'',
        email:'',
        password:'',
        image:'',
        
    };
    const onSubmit= async users=>{
        const formData = new FormData();
        formData.append("userName",users.userName);
            formData.append("email",users.email);
            formData.append("password",users.password);
            formData.append("image",users.image);
            const {data} = await axios.post(`https://ecommerce-node4.vercel.app/auth/signup`,formData);
            if(data.message == 'success'){
                toast.success('account created succesful', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                    });
            }
        };

    const validate=values=>{
        let errors ={};
        if(!values.userName){
            errors.userName ="user name is required";
        }
        if(!values.email){
            errors.email ="email is required";
        }
        if(!values.password){
            errors.password ="password is required";
        }
        return errors;
        };
    const formik =useFormik({
        initialValues,
        onSubmit,
        validate,
        validationSchema,
              
    });
   

    const inputs =[
        {
            id:'username',
            type:'text',
            name:'userName',
            title:'user name',
            value:formik.values.userName,
        },
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
            id:'image',
            type:'file',
            name:'image',
            title:'user image',
           onchange:handelFileValue,
        }
            
    ];
    const renderInput = inputs.map((input,index)=>
    <Input type={input.type} 
       id={input.id}
       name={input.name}
       title={input.title}
       key={index}
       errors={formik.errors}
       value={input.value}
       onChange={input.onchange || formik.handleChange}
       onBlur={formik.handleBlur}
       touched={formik.touched}
       />
    )
    return (
        
        <>
            <div className='container'>
                <h2> Create account </h2>
                <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                   {renderInput}
                   <button type='submit' disabled ={!formik.isValid }> Register </button>
                </form>
            </div>

        </>


    )
}
