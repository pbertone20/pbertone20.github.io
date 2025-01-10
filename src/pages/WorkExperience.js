import React from 'react';
import MCAPLogo from "../assets/MCAP.jpeg";
import SOEUofGLogo from "../assets/SOE-UofG.png";
import SOCSUofGLogo from "../assets/SOCS-UofG.png";

const WorkExperience = () => {
  return (
    <div className="container mx-auto py-16 px-4 mt-10 bg-base-200">
      <h2 className="text-3xl font-bold mb-4 text-center">Work Experience</h2>
      <div className="space-y-8">
        <div className="bg-base-300 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <div className="lg:w-2/3 space-y-6">
            <div>
              <p className="text-xl font-semibold">IT Student Technician</p>
              <p className="text-md">
                School of Engineering - University of Guelph
                <br />
                Sept. 2024 - Dec. 2024
                <br />
                Guelph, ON · In-person
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
                <li>Provided technical support for enterprise-level hardware and software across Windows, Linux, and macOS environments, utilizing the Request Tracker ticketing system to diagnose, document, and resolve technical issues.</li>
                <li>Configured users, groups, and roles in Active Directory, managing access, control, and permissions.</li>
                <li>Used MECM and GHOST to image computers for new staff and resolve Windows operating system issues while managing multiple tasks proactively.</li>
                <li>Developed Microsoft PowerAutomate scripts to optimize Microsoft Form workflows, leveraging PowerAutomate plugins to enhance the functionality, efficiency, and user experience of the CEPS Media Equipment checkout system.</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center items-center">
            <img src={SOEUofGLogo} alt="UofG" className="h-64 w-64 rounded-full" />
          </div>
        </div>
        <div className="bg-base-300 rounded-xl p-5 flex flex-col lg:flex-row lg:items-center lg:gap-8">
          <div className="lg:w-2/3 space-y-6">
            <div>
              <p className="text-xl font-semibold">Content Developer Co-op</p>
              <p className="text-md">
                School of Computer Science - University of Guelph
                <br />
                Jun. 2024 - Aug. 2024
                <br />
                Guelph, ON · Hybrid
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
                <li>Developed a music live-streaming platform for K-Pop artists using React.js, Node.js, Tailwind CSS & DaisyUI, Firebase, and APIs from YouTube.</li>
                <li>Analyzed and implemented project requirements, focusing on creating engaging and interactive user interfaces.</li>
                <li>Implemented user tracking to monitor interactions and behaviors, providing data for Shan Yun Kuo's PhD research into tailored live-streaming platforms.</li>
                <li>Utilized Trello’s Kanban board to manage tasks and deadlines, regularly documented progress for future reference.</li>
              </ul>
            </div>
          </div>
          <div className="lg:w-1/3 flex justify-center items-center">
            <img src={SOCSUofGLogo} alt="UofG" className="h-64 w-64 rounded-full" />
          </div>
        </div>
        <div className="bg-base-300 rounded-xl p-5">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8">
            <div className="lg:w-2/3">
              <p className="text-xl font-semibold">Mortgage Servicing Representative - Summer Student</p>
              <p className="text-md">
                MCAP
                <br />
                May. 2023 - Aug. 2023
                <br />
                Waterloo, ON · Remote
              </p>
              <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
                <li>Used Genesys Telephony systems to answer customer calls, and send emails to customers containing important mortgage details such as property tax information, and bank account change documentation.</li>
                <li>Used MARSweb and knowledge of company policies to answer customer questions regarding mortgage details such as payment increases/decreases, payment frequency changes, creating lump-sum privilege payments, etc.</li>
              </ul>
            </div>
            <div className="flex justify-center lg:w-1/3 mt-4 lg:mt-0">
              <img src={MCAPLogo} alt="MCAP" className="h-64 w-64 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
