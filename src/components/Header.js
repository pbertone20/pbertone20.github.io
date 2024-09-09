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
  }, [index]);

  return (
    <header className="navbar p-4 bg-purple-800 text-black shadow-lg flex justify-between items-center">
      <div className="navbar-start" onClick={() => { window.location.href="/" }}>
        <h2 className="header text-4xl font-bold">
          <span>{typedName}</span>
          <span className='caret-blink'>|</span>
        </h2>
      </div>
      <div className="navbar-end relative">
        <div className="dropdown absolute right-0">
          <div tabIndex={0} role="button" className="transition ease-in-out delay-150  hover:transition-colors duration-200 hover:translate-y-1 hover:scale-110 rounded-xl p-2 duration-300 btn-lg btn-ghost btn-circle ml-20">
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
            className="menu menu-lg dropdown-content bg-accent rounded-box z-[1] mt-3 w-52 p-2 shadow-2xl right-0"
            style={{ left: "-calc(100% - 1rem)" }}>
            <li><Link to="/">About Me</Link></li>
            <li><Link to="/work-experience">Work Experience</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/extracurriculars">Extracurriculars</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/wt1-report">Co-op WT1 Report</Link></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
