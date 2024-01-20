import React from "react";
import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    return (
        <>
         <header className="h-16 flex items-center shadow-sm">
    <nav className="flex justify-between items-center w-9/12 mx-auto">
      <Link to="/" className="text-zinc-800 font-bold uppercase">
        <img src='/images/logo.png' alt="logo" className="h-14 w-40 left-0"/>
      </Link>
      <div className="space-x-5 flex items-center">
        <ul className="space-x-5 sm:flex hidden">
        <li className="hover:text-red-700"><NavLink to="/"  className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : ""}>Home</NavLink></li>
          <li className="hover:text-red-700"><NavLink to="/working" className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : ""}>How it works?</NavLink></li>
          <li className="hover:text-red-700"><NavLink to="/features" className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : ""}>Features</NavLink></li>
          <li className="hover:text-red-700"><NavLink to="/about" className={({ isActive }) =>
              isActive ? "text-red-700 font-bold" : ""}>About us</NavLink></li>
        </ul>
        <button
          className="font-medium px-5 py-1 border border-red-700 rounded text-red-700"
        >
          Login
        </button>
      </div>
    </nav>
  </header>
            

        </>
    )
};

export default Navbar;