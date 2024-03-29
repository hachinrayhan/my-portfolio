import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const navItems = <>
        <li><Link to={'/'}>Home</Link></li>
        <li><Link to={'/about'}>About Me</Link></li>
        <li><Link to={'/files/Hachin Rayhan.pdf'} target="_blank">Resume</Link></li>
        <li><Link to={'/blog'}>Blog</Link></li>
        <li><Link to={'/contact'}>Contact</Link></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {navItems}
                        </ul>
                    </div>
                    <Link className="btn btn-ghost normal-case text-xl">HACHIN RAYHAN</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navItems}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;