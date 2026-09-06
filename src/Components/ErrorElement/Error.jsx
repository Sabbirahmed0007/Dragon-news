import React from 'react';
import { useNavigate } from 'react-router';

const Error = () => {

    const navigate = useNavigate();

    return (
        <div>
            <div><title>Dragon News: Not found</title></div>

            <div className='h-screen flex flex-col items-center justify-center'>
                <h1>404! Not Found</h1>
                <div onClick={()=>navigate(-1)} className='my-1'>
                    <button className='btn btn-neutral'>Back</button>
                </div>
            </div>
        </div>
    );
};

export default Error;