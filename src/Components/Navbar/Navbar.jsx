import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router';
import user from '.././../assets/images/user.png';
import logo from '../../assets/images/logo.png'
import {Menu} from 'lucide-react'

const Navbar = () => {

    const [theme, setTheme] = useState('cupcake');
    const [menu, setMenu] = useState(false);


    useEffect(() => {  
        const getTheme = localStorage.getItem('theme');
        setTheme(getTheme);
        document.documentElement.setAttribute("data-theme", getTheme);
    },[])

    const toggleTheme = () => {
        const nextTheme = theme === 'light' ? "caramellatte" : "light";
        setTheme(nextTheme);
        localStorage.setItem("theme",nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
    }


    const links = <div className='lg:flex items-center justify-center gap-2'>
            <li className='list-none'><NavLink className={({isActive})=>isActive?" text-second font-semibold ":"font-medium "} to={'/'}>Home</NavLink></li>
            <li className='list-none'><NavLink className={({isActive})=>isActive?" text-second font-semibold ":" font-medium"} to={'/about'}>About</NavLink></li>
            <li className='list-none'><NavLink className={({isActive})=>isActive?" text-second font-semibold ":"font-medium "} to={'career'}>Career</NavLink></li>
            
            
        </div>

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-start'>
                    {/* <h1>Logo</h1> */}
                    <Link to={'/'}><img src={logo} className='w-44 ' alt="" /></Link>
                    
                </div>
                <div className='navbar-center hidden lg:flex'>
                    {links}
                </div>
                <div className='navbar-end'>
                    {/* For small screen */}
                    <div className='dropdown lg:hidden'>
                        <div className=' btn btn-ghost' role='button' tabIndex={0} onClick={()=>setMenu(!menu)}>
                            <Menu></Menu>
                        </div>

                        <div className='dropdown-content menu w-56 right-0 border mt-4' tabIndex={!menu}>
                            <ul>
                            {links}
                            </ul>
                        </div>


                    </div>
                    {/* for large screen */}
                    <div className=' items-center justify-center gap-3 hidden lg:flex'>
                    {/* Toggle Theme */}
                    <div className=''>
                        <label className="toggle text-base-content" onChange={toggleTheme} >
                            <input type="checkbox" value={theme} checked={theme ==='caramellatte'&& true} />

                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                    </div>
                        <div className=''>
                            <img src={user} className='w-10 rounded-full' alt="" />
                        </div>
                        <div>
                            <NavLink className='btn bg-block text-white'>Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;