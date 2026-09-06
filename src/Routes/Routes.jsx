import React from 'react';
import {createBrowserRouter} from "react-router"
import Layout from '../Components/Layout';
import Home from '../Components/Home/Home';
import Error from '../Components/ErrorElement/Error';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        errorElement:<Error></Error>,
        children :[
            {
                index: true,
                path: '/',
                element:<Home></Home>
            }
        ]
    }

])

export default Routes;