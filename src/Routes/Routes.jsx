import React from 'react';
import {createBrowserRouter} from "react-router"

import Home from '../Pages/Home/Home';
import Error from '../Components/ErrorElement/Error';
import Layout from '../Layout/Layout';
import About from '../Pages/About/About';
import Career from '../Pages/Career/Career';

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
            },
            {
                path: '/about',
                Component:About
            },
            {
                path: '/career',
                element:<Career></Career>
            }
        ]
    }

])

export default Routes;