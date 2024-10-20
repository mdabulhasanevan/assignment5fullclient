
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
                loader: () => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/`),

            },
            {
                path: "/productdetails/:id",
                element: <ProductDetails />,
                loader: ({ params }) => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/${params.id}`),

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
                loader: () => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/`),

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
        ]
    }
]);

export default router;

