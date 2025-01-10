import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';

const useTypewriter = (text) => {
  const [typedText, setTypedText] = useState('');
  const typingIndex = useRef(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (typingIndex.current < text.length) {
        setTypedText(text.substring(0, typingIndex.current + 1));
        typingIndex.current++;
      }
    }, 250);

    return () => clearInterval(interval);
  }, [text]);

  return typedText;
};

const Header = () => {
  const name = "Peter Bertone";
  const typedName = useTypewriter(name);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-800 to-indigo-900 text-white shadow-lg">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold">
          <span>{typedName}</span>
          <span className="caret-blink">|</span>
        </h1>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <nav
          className={`${
            menuOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0 rounded-md"
          } absolute top-full left-0 w-full bg-gradient-to-r from-purple-800 to-indigo-900 lg:w-auto lg:relative lg:bg-transparent lg:opacity-100 lg:translate-y-0 transition-all duration-500 ease-in-out p-2`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-4 p-4 lg:p-0">
            <li><Link to="/" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">About</Link></li>
            <li><Link to="/work-experience" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">Experience</Link></li>
            <li><Link to="/projects" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">Projects</Link></li>
            <li><Link to="/extracurriculars" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">Extracurriculars</Link></li>
            <li><Link to="/resume" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">Resume</Link></li>
            <li><Link to="/wt1-report" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">WT1</Link></li>
            <li><Link to="/wt2-report" className="hover:text-purple-400 transition-colors duration-200 ease-in-out">WT2</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
