import React from 'react';

const Projects = () => {
  return (
    <main className="p-5">
      <section className="text-box text-black bg-secondary p-5 rounded-xl space-y-8">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        
        <div className="project-item mb-6">
          <p className="text-xl font-semibold">K-Pop Live-streaming Research Tool</p>
          <p className="text-md">2024 - Present</p>
          <ul className="list-disc list-inside bullet-list mt-2 space-y-2">
            <li>Developed a music live-streaming platform for K-Pop artists & fans using React.js, Node.js, Tailwind CSS & DaisyUI, Firebase, and APIs from YouTube.</li>
            <li>Focused on creating engaging and interactive user interfaces, ensuring a seamless user experience.</li>
            <li>Implemented user tracking to monitor interactions and behaviors, providing data for Shan Yun Kuo's PhD research into tailored live-streaming platforms.</li>
            <li>Collaborated with a team to analyze and implement project requirements, utilizing Agile methodologies to manage tasks and deliverables.</li>
          </ul>
        </div>
        
        <div className="project-item mb-6">
          <p className="text-xl font-semibold">Billiards Pool Game</p>
          <p className="text-md">2024</p>
          <ul className="list-disc list-inside bullet-list mt-2 space-y-2">
            <li>Utilized C, Python, SQLite, JavaScript, HTML, CSS, SVG images, and jQuery to develop a billiards pool game.</li>
            <li>Complex calculations are done on the C back-end and saved to the SQLite database, which is then read by the Python web server.</li>
            <li>The web server communicates data to the browser to display the billiard table and shots.</li>
          </ul>
        </div>
        
        <div className="project-item">
          <p className="text-xl font-semibold">Typing Speed Test Website</p>
          <p className="text-md">2023 - 2024</p>
          <a href="https://peterbertone.com/Typing-Test-Website/" className="text-blue-500 underline hover:text-blue-700 transition-colors duration-200">Try it out here!</a>
          <ul className="list-disc list-inside bullet-list mt-2 space-y-2">
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
