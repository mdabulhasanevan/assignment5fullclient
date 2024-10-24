
import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/LOgin';
import LoginLayout from '../layouts/LoginLayout';
import PrivateRoute from './PrivateRoute';
import ProductList from '../pages/ProductList';
import Categories from '../pages/Categories ';
import ProductListCategoryWise from '../pages/ProductListCategoryWise';
import ProductDetails from '../pages/ProductDetails';
import Contact from '../pages/Contact';
import AddCategory from '../pages/Admin/category/AddCategory';
import DashboardLayout from './../layouts/DashboardLayout';
import CategoryList from '../pages/Admin/category/CategoryList';
import Dashboard from '../pages/Admin/Dashboard';

import EditCategory from './../pages/Admin/category/EditCategory';
import AddProduct from '../pages/Admin/product/AddProduct';
import EditProduct from '../pages/Admin/product/EditProduct';
import ProductListAdmin from '../pages/Admin/product/ProductListAdmin';

import RegisterPage from '../pages/RegisterPage';
import AllUsers from '../pages/Admin/AllUsers';
import MessageDetails from '../pages/Admin/MessageDetails';
import Messages from '../pages/Admin/Messages';
import Profile from '../pages/Admin/Profile';
import CreateMessage from '../pages/Admin/CreateMessages';
import CustomerPurchaseHistory from '../pages/Admin/purchase/CustomerPurchaseHistory';
import CustomerPurchaseHistorySelf from './../pages/Admin/purchase/CustomerPurchaseHistorySelf';
import { useContext } from 'react';


import React from 'react'




const router = createBrowserRouter([
   
    
    {
        path: "/",
        element: <PublicLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
                loader: () => fetch(`http://localhost:5000/getCategory`),

            },
            {
                path: "/product",
                element: <ProductList />,
                loader: () => fetch(`http://localhost:5000/getproduct`),

            },
            {
                path: "/productdetails/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`http://localhost:5000/productdetail/${params.id}`),

            },
            {
                path: "/category",
                element: <Categories />,
                loader: () => fetch(`http://localhost:5000/getCategory`),

            },
            {
                path: "/productlistbycategory/:id",
                element: <ProductListCategoryWise />,
                //loader: ({ params }) => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/${params.id}`),
                loader: ({ params }) => fetch(`http://localhost:5000/productlistbycategory/${params.id}`),

            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/about",
                element: (
                    <PrivateRoute>
                        <About />
                    </PrivateRoute>
                )
            },
        ]
    },
    {
        path: '',
        element: <DashboardLayout />,
        children: [
            {
                path: "/dashboard",
                element: (
                    <PrivateRoute>
                        <Dashboard />
                    </PrivateRoute>
                )
            },
            {
                path: "/addcategory",
                element: (
                    <PrivateRoute>
                        <AddCategory />
                    </PrivateRoute>
                )
            },
            {
                path: "/categorylist",
                element: (
                    <PrivateRoute>
                        <CategoryList />
                    </PrivateRoute>
                ),
                loader: () => fetch(`http://localhost:5000/getcategory`),
            },
            {
                path: "/editcategory/:id",
                element: (
                    <PrivateRoute>
                        <EditCategory />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/categoryadmin/${params.id}`),
            },

            {
                path: "",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "allUsers",
                element:
                    <PrivateRoute><AllUsers /></PrivateRoute>,
            },
            {
                path: "profile",
                element: <PrivateRoute><Profile /></PrivateRoute>,
            },
            {
                path: "messages",
                element: <PrivateRoute><Messages /></PrivateRoute>,
            },
            {
                path: "messages/:id",
                element: <PrivateRoute><MessageDetails /></PrivateRoute>,
            },
            {
                path: "createMessage",
                element: <PrivateRoute><CreateMessage /></PrivateRoute>,
            },

            //product purchase

            {
                path: "/getcustomerpurchase",
                element: (
                    <PrivateRoute>
                        <CustomerPurchaseHistory />
                    </PrivateRoute>
                ),
                loader: () => fetch(`http://localhost:5000/getCustomerPurchase`),
            },
            {
               
                path: "/getcustomerpurchaseself/:id",
                element: (
                    <PrivateRoute>
                        <CustomerPurchaseHistorySelf />
                    </PrivateRoute>
                ),
                loader: ({ params }) => (fetch(`http://localhost:5000/CustomerPurchaseHistorySelf/${params.id}`)),
            },

            //product router

            {
                path: "/addproduct",
                element: (
                    <PrivateRoute>
                        <AddProduct />
                    </PrivateRoute>
                ),
                loader: () => fetch(`http://localhost:5000/getcategory`),
            },
            {
                path: "/productlistadmin",
                element: (
                    <PrivateRoute>
                        <ProductListAdmin />
                    </PrivateRoute>
                ),
                loader: () => fetch(`http://localhost:5000/getproduct`),
            },
            {
                path: "/editproduct/:id",
                element: (
                    <PrivateRoute>
                        <EditProduct />
                    </PrivateRoute>
                ),
                loader: ({ params }) => fetch(`http://localhost:5000/productadmin/${params.id}`)
            },

        ]
    },
    {
        path: "",
        element: <LoginLayout />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
        ]
    }
]);

export default router;

