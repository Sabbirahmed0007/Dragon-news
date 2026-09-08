import React from 'react';
import logo from '../../assets/images/logo.png';
import { format } from 'date-fns';


const Header = () => {
    return (
        <div className='flex items-center justify-center mt-5 text-center'>
            <div>
                <img className='w-90 ' src={logo} alt="" />
                <p className='my-1 text-sm text-personal'>Journalism Without Fear or Favour</p> 

                {/* <p className='text-lg font-medium'>{new Date().toLocaleDateString('en-us', {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}</p> */}
                <p className='text-lg font-medium'>{format(new Date(),'EEEE, MMMM dd, yyyy') }</p>
                 
            </div>
        </div>
    );
};

export default Header;