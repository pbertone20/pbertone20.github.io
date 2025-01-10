import React from 'react';
import me from '../assets/me.jpg';

const About = () => {
  return (
    <div className="container mx-auto py-16 px-4 mt-10 bg-base-200">
      <div className="flex flex-col md:flex-row items-center justify-between bg-base-300 rounded-xl p-5">
        <div className="md:w-1/2">
          <img 
            src={me} 
            alt="Me" 
            className="rounded-md h-128 w-128 object-cover shadow-lg" 
          />
        </div>
        <div className="md:w-1/2 space-y-4 md:pl-10">
          <h1 className="text-3xl font-bold mb-4">About Me</h1>
          <p className="text-lg leading-relaxed">
            Hi, I'm Peter, an ambitious Software Engineering student at the University of Guelph. 
            I'm currently completing my Major in Honours Software Engineering Co-op, and a minor in Business!
          </p>
          <p className="text-lg leading-relaxed">
            I'm passionate about computing and thrive on challenges. 
            Throughout my time as a student at the University of Guelph, I continuously focus on building a sense of community within the School of Computer Science. 
            This semester, I'll be the President of the Guelph Coding Community, a club centered around building real-world connections and programming skills!
            As well, as Vice President of Social Affairs and Operations Manager for the Google Developer Student Club, I helped organize over 20 events, 
            including a successful GDSCHacks hackathon. These experiences were incredibly rewarding and taught me the value of teamwork and project management.
          </p>
          <p className="text-lg leading-relaxed">
            I'm recently finished my second co-op term, this time within the School of Engineering IT team at the University of Guelph. 
            During my first co-op, I was involved in developing a live-streaming platform for K-Pop fans as part of a research project with Dr. Stacey Scott. 
            This project allowed me to enhance my skills in React.js, Node.js, and other technologies. Looking forward, I'm eager to continue learning and growing as a software engineer!
          </p>
          <p className="text-lg leading-relaxed">
            Feel free to read my latest <a href='/#/wt2-report/' className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600">Work Term Report</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;