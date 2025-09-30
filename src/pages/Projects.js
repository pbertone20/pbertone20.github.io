import React from 'react';
import TypingTestWebsite from '../assets/Typing-Speed-Test.png';
import TypingTestFinished from '../assets/TypingTestFinished.png';
import TableOne from '../assets/table00.svg';
import TableTwo from '../assets/table03.svg';
import TableThree from '../assets/table06.svg';
import TableFour from '../assets/table08.svg';
import TableFive from '../assets/table10.svg';

const Projects = () => {
  return (
    <div className="container mx-auto py-16 px-4 mt-10 bg-base-200">
      <h2 className="text-3xl font-bold mb-4 text-center">Projects</h2>
      <div className="space-y-8">
        <div className="bg-base-300 rounded-xl p-5">
          <div className="flex flex-col space-y-2">
            <p className="text-xl font-semibold">Billiards Pool Game</p>
            <p className="text-md">2024</p>
          </div>
          <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
            <li>Developed a multiplayer billiards game with real-time collision physics using a C back-end.</li>
            <li>Integrated SWIG for seamless communication between C and Python codebases.</li>
            <li>Created a responsive web front-end with Javascript, jQuery, HTML, and CSS including real-time animations using SVG objects.</li>
            <li>Implemented RESTful APIs using Python to communicate with a SQLite database.</li>
          </ul>
          <div className="flex justify-center mt-4">
            <img src={TableOne} alt="Table One" className="h-100 w-40 rounded-lg mr-2" />
            <div className='flex items-center'>  
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 flex items-center">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
            <img src={TableTwo} alt="Table One" className="h-100 w-40 rounded-lg mr-2" />
            <div className='flex items-center'>  
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 flex items-center">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
            <img src={TableThree} alt="Table One" className="h-100 w-40 rounded-lg mr-2" />
            <div className='flex items-center'>  
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 flex items-center">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
            <img src={TableFour} alt="Table One" className="h-100 w-40 rounded-lg mr-2" />
            <div className='flex items-center'>  
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-6 h-6 flex items-center">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
            <img src={TableFive} alt="Table One" className="h-100 w-40 rounded-lg mr-2" />
          </div>
        </div>

        <div className="bg-base-300 rounded-xl p-5">
          <div className="flex flex-col space-y-2">
            <p className="text-xl font-semibold">Typing Speed Test Website</p>
            <p className="text-md">2023 - 2024</p>
            <a href="https://peterbertone.com/Typing-Test-Website/" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">https://peterbertone.com/Typing-Test-Website/</a>
          </div>
          <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
            <li>Designed a responsive typing test web application to calculate typing speed in real-time.</li>
            <li>Implemented user authentication with Firebase; User scores are then saved to a Firestore database.</li>
            <li>Used Javascript and a quote generator API to provide dynamic test sentences for each session.</li>
          </ul>
          <div className="flex justify-center mt-4"> 
            <img src={TypingTestWebsite} alt="Typing Speed Test Website Screenshot" className="h-60 w-120 rounded-lg" />
            <div className='flex items-center'>  
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" class="w-24 h-24 flex items-center">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </div>
            <img src={TypingTestFinished} alt="Typing Speed Test Website Screenshot" className="h-60 w-120 rounded-lg" /> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;