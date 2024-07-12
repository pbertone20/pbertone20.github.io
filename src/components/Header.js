import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [typedName, setTypedName] = useState('');
  const name = "Peter Bertone";
  let index = 0;

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= name.length) {
        setTypedName(name.substring(0, index));
        index++;
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="navbar bg-coffee-500 p-4 shadow-md flex justify-between items-center">
      <div className="navbar-start bg-base-100" onClick={() => { window.location.href="/" }}>
        <h2 className="header text-4xl font-bold">
          <span>{typedName}</span>
          <span className='caret-blink'>|</span>
        </h2>
      </div>
      <div className="navbar-end relative">
        <div className="dropdown absolute right-0">
          <div tabIndex={0} role="button" className="hover:animate-bounce btn btn-ghost btn-circle ml-20">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-30 w-30"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            className="menu menu-lg dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow right-0"
            style={{ left: "-calc(100% - 1rem)" }}>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/work-experience">Work Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/extracurriculars">Extracurriculars</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
