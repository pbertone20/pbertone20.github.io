import React from 'react';
import GitHubLogo from '../assets/github-logo.png';
import LinkedinLogo from '../assets/linkedin.png';
import Phone from "../assets/phone.svg";
import Email from "../assets/email.svg";

const Footer = () => {
  return (
    <footer className="bg-primary flex flex-col items-center justify-center">
      <div>
        <h1 className='p-2 text-2xl font-bold'>Peter Bertone</h1>
      </div>
      <div className='mb-5 flex flex-col items-center justify-center space-y-2'>
        <div className='flex flex-row space-x-2 items-center'>
          <button onClick={() => window.location.href="https://github.com/pbertone20/"} className="font-bold transition ease-in-out delay-150  hover:transition-colors duration-200 hover:translate-y-1 hover:scale-110 hover:bg-secondary rounded-xl p-2 duration-300">GitHub</button>
          <img src={GitHubLogo} alt='GitHub' className='h-5 w-5 object-cover' />
          <button onClick={() => window.location.href="https://linkedin.com/in/peter-bertone/"} className="font-bold transition ease-in-out delay-150  hover:transition-colors duration-200 hover:translate-y-1 hover:scale-110 hover:bg-secondary rounded-xl p-2 duration-300">LinkedIn</button>
          <img src={LinkedinLogo} alt='LinkedIn' className='h-5 w-5 object-cover rounded' />
        </div>
        <div className='font-bold flex flex-row space-x-2 items-center'>
          <strong>+1 (289) 700-3206</strong>
          <img src={Phone} alt="Phone" className='h-5 w-5 object-cover' />
        </div>
        <div className='flex flex-row space-x-3 items-center'>
          <button onClick={() => window.location.href="mailto:pbertone@uoguelph.ca"} className="font-bold transition ease-in-out delay-150  hover:transition-colors duration-200 hover:translate-y-1 hover:scale-110 hover:bg-secondary rounded-xl p-2 duration-300">pbertone@uoguelph.ca</button>
          <img src={Email} alt="Email" className='h-5 w-5 object-cover' />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
