import React, { useEffect, useState } from 'react';

const Navbar = () => {

    const [theme, setTheme] = useState('cupcake');


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

    return (
        <div>
            <div className='navbar'>
                <div className='navbar-start'>
                    <h1>Logo</h1>
                </div>
                <div className='navbar-end'>
                    <div>
                        <label className="toggle text-base-content" onChange={toggleTheme} >
                            <input type="checkbox" value={theme} checked={theme ==='caramellatte'&& true} />

                            <svg aria-label="sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></g></svg>

                            <svg aria-label="moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"></path></g></svg>

                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;