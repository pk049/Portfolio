import React, { useState } from 'react';
import './nav.css';
import { AiOutlineCaretDown } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { NavLink } from 'react-router-dom';

function Nav() {
  const [showDropdown, setShowDropdown] = useState(false);

  function clickHandler() {
    setShowDropdown(!showDropdown);
  }

  return (
    <div>
      <div
        className='md:hidden flex justify-center items-center pt-2 text-3xl arrowdown'
        onClick={clickHandler}
      >
        <AiOutlineCaretDown
          className={`rotate-icon ${showDropdown ? 'rotate-180' : ''} duration-800`}
        />
      </div>
      <div
        className={`dropdown ${showDropdown ? 'dropdown-show' : ''}`}
      >
        <div className='dropdown-content'>
          <NavLink to='/projects' className='cursor-pointer font-semibold'>PROJECTS</NavLink>
          <NavLink to='skills' className='cursor-pointer font-semibold'>SKILLS</NavLink>
          <NavLink to='/' className='cursor-pointer font-semibold'>HOME</NavLink>
        </div>
      </div>
      <div className='hidden md:block big-nav'>
        <div className='w-full h-[10vh] flex justify-center items-center gap-16 '>
          <NavLink className="bignavs" to="/">HOME</NavLink>
          <NavLink className="bignavs" to="/skills">SKILLS</NavLink>
          <NavLink className="bignavs" to="/projects">PROJECTS</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Nav;
