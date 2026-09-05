import React from 'react';
import {createBrowserRouter} from "react-router"
import Layout from '../Components/Layout';
import Home from '../Components/Home/Home';

const Routes = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
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