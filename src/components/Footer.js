import React from 'react';
import GitHubLogo from '../assets/github-logo.png';
import LinkedinLogo from '../assets/linkedin.png';
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";

const Footer = () => {
  return (
    <footer className="p-5 bg-coffee-400 text-coffee-100 flex flex-col items-center justify-center">
      <div>
        <h1 className='p-4 text-xl font-bold'>Peter Bertone</h1>
      </div>
      <div className='flex flex-row items-center justify-center space-x-10'>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={GitHubLogo} alt='GitHub' className='h-5 w-5 object-cover' />
            <strong><a href="https://github.com/pbertone20/" className="text-coffee-100 hover:text-coffee-200 transition-colors duration-200">GitHub</a></strong>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={LinkedinLogo} alt='LinkedIn' className='h-5 w-5 object-cover rounded' />
            <strong><a href="https://linkedin.com/in/peter-bertone/" className="text-coffee-100 hover:text-coffee-200 transition-colors duration-200">LinkedIn</a></strong>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={Phone} alt="Phone" className='h-5 w-5 object-cover' />
            <strong className="text-coffee-100">+1 (289) 700-3206</strong>
          </div>
          <div className='flex flex-row space-x-2 items-center'>
            <img src={Email} alt="Email" className='h-5 w-5 object-cover' />
            <strong><a href="mailto:pbertone@uoguelph.ca" className="text-coffee-100 hover:text-coffee-200 transition-colors duration-200">pbertone@uoguelph.ca</a></strong>
          </div>
      </div>
    </footer>
  );
};

export default Footer;
