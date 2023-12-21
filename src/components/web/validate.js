
import * as  yup from 'yup';

export  const  validationSchema = yup.object({
       userName:yup.string().required("username is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
       email:yup.string().required("email is required ").email(),
       password:yup.string().required("password is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
   } )

export  const  loginSchema = yup.object({
    email:yup.string().required("email is required ").email(),
    password:yup.string().required("password is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
} )

export  const  sendcodeSchema = yup.object({
    email:yup.string().required("email is required ").email(),
} )


export  const  ForgetpassSchema = yup.object({
    code:yup.string().required("code is required ").length(4,"4 char"),
    email:yup.string().required("email is required ").email(),
    password:yup.string().required("password is required ").min(3,"must bt al least 3 char").max(30," max is 30 char"),
   
} )

export  const  ordervalidationSchema = yup.object({
    address:yup.string().required("address is required "),
    phone:yup.number().required("phone is required ").positive("phone can't minus").min(9),
} )