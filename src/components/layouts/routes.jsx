import { createBrowserRouter } from "react-router-dom";
import Categories from "../web/Categories.jsx";
import CategoriesDetails from "../web/CategoriesDetails.jsx";
import Home from "../web/Home.jsx";
import Login from "../web/Login.jsx";
import Product from "../web/products/Product.jsx";
import Layout from "./Layout.jsx";
import Register from "../web/Regester.jsx";

import Cart from "../web/cart/Cart.jsx";
import Protected from "../web/protected/Protected.jsx";
import Auth from "../web/protected/Auth.jsx";
import ProfileUser from "../web/profileuser/ProfileUser.jsx";
import SendCode from "../web/SendCode.jsx";
import ForgetPassword from "../web/ForgetPassword.jsx";
import Userinfo from '../web/profileuser/UserInfo.jsx'
import UserContact from '../web/profileuser/UserContact.jsx'
import { OrderContextProvider } from "../web/context/Order.jsx";
import Order from '../web/order/Order.jsx'
import UserOrder from "../web/profileuser/UserOrder.jsx";
import Products from "../web/products/Products.jsx";

export const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout />,
      children:[
          {
            path:'register',
            element:<Register />
          },
          {
            path:'login',
            element:
            <Auth>
              <Login />
            </Auth>
          },{
            path:'order',
            element:<Order/>
          },
          {
            path:'sendcode',
            element:
            
              <SendCode/>

          },{
            path:'forgetpassword',
            element:
            
              <ForgetPassword/>
           
          },
          {
            path:'profile',
            element:
            <Protected>
              <ProfileUser />
            </Protected>,
            children:[

              {
               index:true,
                element:<Userinfo />
              },
              {
                path:'contact',
                element:<UserContact />
              },
              {
                path:'order',
                element:<UserOrder />,
                
              }

            ]
          },
          {
            index:true,
            element:<Home />
          },
          {
            path:'cart',
            element:
            <OrderContextProvider>
              < Protected>
              <Cart />
            </ Protected>
            </OrderContextProvider>
            
            
          },{
            path:'order',
            element:<Order/>
          },
          {
            path:'categories',
            element:<Categories />
          },
          {
              path:'products/category/:categoryId',
              element:<CategoriesDetails/>
          },{
            path:'product/:productId',
            element:<Product />
          },{
            path:'products',
            element:<Products />
          },
          {
            path:'*',
            element:<h2>page not found --- web</h2>
          }
      ]
    },
    {
        path:'/dashboard',
       // element:<DashboardLayout />,
        children:[{
        path:'home',
        //element:<HomeDashboard />
      }
      ,{
        path:'categories',
       // element:<CategoriesDashboard />
      },
      {
        path:'*',
        element:<h2>page not found --- dashboard</h2>
      }
    ]
  
  
    }
  ]);
 