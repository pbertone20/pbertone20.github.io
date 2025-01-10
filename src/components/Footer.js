import React from 'react';
import GitHubLogo from '../assets/github-logo.png';
import LinkedinLogo from '../assets/linkedin.png';
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white p-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Peter Bertone</h1>

      <div className="container mx-auto flex flex-col items-center space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
        <a
          href="https://github.com/pbertone20/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-purple-400 transition duration-300 ease-in-out"
        >
          <img src={GitHubLogo} alt="GitHub" className="h-5 w-5 mr-2" />
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/peter-bertone/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-purple-400 transition duration-300 ease-in-out"
        >
          <img src={LinkedinLogo} alt="LinkedIn" className="h-5 w-5 mr-2 rounded-md" />
          LinkedIn
        </a>
        <div className="flex items-center">
          <img src={Phone} alt="Phone" className="h-5 w-5 mr-2" />
          <span>+1 (289) 700-3206</span>
        </div>
        <div className="flex items-center">
          <img src={Email} alt="Email" className="h-5 w-5 mr-2" />
          <a
            href="mailto:pbertone@uoguelph.ca"
            className="hover:text-purple-400 transition duration-300 ease-in-out"
          >
            pbertone@uoguelph.ca
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
