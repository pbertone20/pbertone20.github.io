import React from 'react';
import MCAPLogo from "../assets/MCAP.jpeg";
import UofGLogo from "../assets/UofG.png";

const WorkExperience = () => {
  return (
    <main className="p-5">
      <section className="text-black text-box bg-secondary p-5 rounded-xl space-y-8">
        <h2 className="text-3xl font-bold mb-6">Work Experience</h2>

        <div className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="lg:w-[60%]">
            <p className="text-xl font-semibold">Content Developer Co-op</p>
            <p className="text-md">School of Computer Science - University of Guelph<br />Jun. 2024 - Aug. 2024<br />Guelph, ON · Hybrid</p>
            <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
              <li>Developed a music live-streaming platform for K-Pop artists using React.js, Node.js, Tailwind CSS & DaisyUI, Firebase, and APIs from YouTube.</li>
              <li>Analyzed and implemented project requirements, focusing on creating engaging and interactive user interfaces.</li>
              <li>Implemented user tracking to monitor interactions and behaviors, providing data for Shan Yun Kuo's PhD research into tailored live-streaming platforms.</li>
              <li>Utilized Trello’s Kanban board to manage tasks and deadlines, regularly documented progress for future reference.</li>
            </ul>
          </div>
          <div className="flex justify-center lg:w-[35%] lg:ml-6 mt-4 lg:mt-0">
            <img src={UofGLogo} alt="UofG" className="h-60 w-60 rounded-lg" />
          </div>
        </div>

        <div className="mb-8 flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
          <div className="lg:w-[60%]">
            <p className="text-xl font-semibold">Mortgage Servicing Representative - Summer Student</p>
            <p className="text-md">MCAP<br />May. 2023 - Aug. 2023<br />Waterloo, ON · Remote</p>
            <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
              <li>Used Genesys Telephony systems to answer customer calls, and send emails to customers containing important mortgage details such as property tax information, and bank account change documentation.</li>
              <li>Used MARSweb and knowledge of company policies to answer customer questions regarding mortgage details such as payment increases/decreases, payment frequency changes, creating lump-sum privilege payments, etc.</li>
            </ul>
          </div>
          <div className="flex justify-center lg:w-[35%] lg:ml-6 mt-4 lg:mt-0">
            <img src={MCAPLogo} alt="MCAP" className="h-60 w-60 rounded-lg" />
          </div>
        </div>
        
      </section>
    </main>
  );
};

export default WorkExperience;
