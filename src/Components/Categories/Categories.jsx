import React from 'react';
import { Link, NavLink } from 'react-router';

const Categories = ({ category }) => {
    const { id, name } = category;
    return (
        <div>
            <NavLink to={`category/${id}`} className={({ isActive }) => isActive ? "w-full bg-base-300 p-3 btn font-bold text-info" : "w-full p-3 btn btn-ghost" }>{ name}</NavLink>
        </div>
    );
};

export default Categories;