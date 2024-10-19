
import { createBrowserRouter } from 'react-router-dom'
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/LOgin';
import LoginLayout from '../layouts/LoginLayout';


  const router=createBrowserRouter([
    {
        path:"/",
        element:<PublicLayout/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
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

