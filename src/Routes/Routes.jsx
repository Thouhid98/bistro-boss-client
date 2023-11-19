import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order/Order";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../Layout/Dashboard";
import Cart from "../pages/Dashboard/Cart/Cart";
import Allusers from "../pages/Dashboard/Allusers/Allusers";
import Additems from "../pages/Dashboard/Additems/Additems";
import AdminRoute from "./AdminRoute";
import ManageItems from "../pages/Dashboard/ManageItems/ManageItems";
import UpdateItem from "../pages/Dashboard/UpdateItem/UpdateItem";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/menu',
                element:<Menu></Menu>
            },
            {
                path:'/order/:category',
                element:<Order></Order>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            }
        ]
    },

    {
        path:'dashboard',
        element:<Dashboard></Dashboard>,
        children:[
            // Normal User Routes 
            {
                path:'cart',
                element:<Cart></Cart>
            },
            
            // Admin Only Routes 
            {
                path:'additems',
                element: <AdminRoute><Additems></Additems></AdminRoute>
            },
            {
                path:'manageitems',
                element:<AdminRoute><ManageItems></ManageItems></AdminRoute>
            },
            {
                path:'updateitem/:id',
                element:<AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
                loader: ({params})=> fetch(`http://localhost:5000/menu/${params.id}`)
            },
            {
                path:'users',
                element:<AdminRoute><Allusers></Allusers></AdminRoute>
            }
           
           
        ]
    }
]);
