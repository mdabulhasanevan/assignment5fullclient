
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


  const router=createBrowserRouter([
    {
        path:"/",
        element:<PublicLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>,
                loader: () => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/`),

            },
            {
                path:"/product",
                element:<ProductList/>,
                loader: () => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/`),

            },
            {
                path:"/productdetails/:id",
                element:<ProductDetails/>,
                loader: ({ params }) => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/${params.id}`),

            },
            {
                path:"/category",
                element:<Categories/>,
                loader: () => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/`),

            },
            {
                path:"/productlistbycategory/:id",
                element:<ProductListCategoryWise/>,
                //loader: ({ params }) => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/${params.id}`),
                loader: () => fetch(`https://assignment-4-online-course-project-server-side.vercel.app/course/`),

            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/about",
                element:(
                    <PrivateRoute>
                        <About/>
                    </PrivateRoute>
                )
            },
            
        ]
    },
    {
        path:"",
        element:<LoginLayout/>,
        children:[
            {
                path:"/login",
                element:<Login/>
            },
        ]
    }
  ]);
  
  export default router;

