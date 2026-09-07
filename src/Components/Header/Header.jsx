import React from 'react';
import logo from '../../assets/images/logo.png'

const Header = () => {
    return (
        <div className='flex items-center justify-center mt-5 text-center'>
            <div>
                <img className='w-90 ' src={logo} alt="" />
                <p className='my-1 text-sm text-personal'>Journalism Without Fear or Favour</p> 

                <p className='text-lg font-medium'>{new Date().toLocaleDateString("en-US", {
                    weekday: "long",
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                })}</p>
            </div>
        </div>
    );
};

export default Header;