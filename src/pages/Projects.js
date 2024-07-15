import React from 'react';
import { Link } from 'react-router-dom';

const Projects = () => {
  return (
    <main className="p-5">
      <section className="text-box bg-secondary p-5 rounded-xl space-y-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        
        <div className="project-item mb-6">
          <p className="text-xl font-semibold">K-Pop Live-streaming Research Tool</p>
          <p className="text-md">2024 - Present</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Developing a music live-streaming platform for K-Pop artists using Node.js, Express.js, React.js, Firebase, and APIs from YouTube, Twitch, and Spotify.</li>
            <li>Focusing on creating engaging and interactive user interfaces, ensuring a seamless user experience.</li>
            <li>Collaborating with a team to analyze and implement project requirements, utilizing Agile methodologies to manage tasks and deliverables.</li>
            <li>Regularly documenting progress and writing weekly reports for project management.</li>
          </ul>
        </div>
        
        <div className="project-item mb-6">
          <p className="text-xl font-semibold">Billiards Pool Game</p>
          <p className="text-md">2024</p>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Utilized C, Python, SQLite, JavaScript, HTML, CSS, SVG images, and jQuery to develop a billiards pool game.</li>
            <li>Complex calculations are done on the C back-end and saved to the SQLite database, which is then read by the Python web server.</li>
            <li>The web server communicates data to the browser to display the billiard table and shots.</li>
          </ul>
        </div>
        
        <div className="project-item">
          <p className="text-xl font-semibold">Typing Speed Test Website</p>
          <p className="text-md">2023 - 2024</p>
          <Link to="https://peterbertone.com/Typing-Test-Website/" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">Try it out here!</Link>
          <ul className="list-disc list-inside mt-2 space-y-2">
            <li>Successfully developed a responsive web application with a user-friendly interface to measure typing speed and accuracy.</li>
            <li>Implemented the front-end using HTML, CSS, and JavaScript, with mobile compatibility.</li>
            <li>Integrated Firebase for user authentication and with plans to add a Firestore database leaderboard, allowing users to sign in and track their progress over time.</li>
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Projects;
