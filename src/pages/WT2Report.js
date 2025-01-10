import React from 'react';
import PrinterTwo from '../assets/Printer-02.jpg';
import Nameplate from '../assets/Nameplate-02.jpg';
import SOE_Building from '../assets/SOE-Building.png'

const WT2Report = () => {
  return (
    <div className="container mx-auto py-16 px-4 mt-10 bg-base-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Co-op Work Term 2 Report</h1>
      <section className="space-y-8">
        <div className="bg-base-300 p-5 rounded-xl flex flex-col md:flex-row">
          <div className="md:w-1/2 flex justify-left items-center mt-5 md:mt-0">
            <div className='w-[550px] h-[550px] rounded-[40%] overflow-hidden object-[center_bottom]'>
              <img
                src={Nameplate}
                alt="Nameplate"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed">
              Welcome to my second co-op work term report! Over the past four months of the Fall 2024 semester, I had the remarkable opportunity to work in the IT Department of the School of Engineering at the University of Guelph (UofG). 
              This experience was nothing short of amazing, offering me countless opportunities to grow both personally and professionally. From learning new tools to sharpening my problem-solving and communication skills, I took on every challenge with an eagerness to learn. 
              Managing a both daily IT support tasks and larger, impactful projects, pushed me out of my comfort zone and gave me a deeper appreciation for the world of IT.
            </p>
            <br /> <br />
            <h2 className="font-bold text-2xl mb-4">Employer Information</h2>
            <p className="text-lg leading-relaxed">
              During this work term, I helped solve varying levels of IT related issues in the School of Engineering under the guidance of Bogdan Bunescu - my Manager, Matt Kurylo - IT Specialist, and Matt Kent - our System Administrator.
              Our IT department supports faculty, staff, and students, providing everything from troubleshooting assistance to developing creative IT solutions for other departments here at the University of Guelph. 
              Being part of such a fast-paced, collaborative environment gave me a sense of just how vital IT is to every-day tasks and the academic world.
            </p>
          </div>
        </div>

        <div className="bg-base-300 p-5 rounded-xl">
          <h2 className="font-bold text-2xl mb-4">Achievements</h2>
          <p className="text-lg leading-relaxed">
            One of my proudest accomplishments during this work term was automating the CEPS Media Equipment booking system using Microsoft's Power Automate! 
            This project simplified a complex, manual process, making it more efficient and user-friendly for everyone involved. The sense of achievement I felt seeing my work make a tangible difference was truly rewarding. 
            Beyond that, I resolved numerous IT support tickets, each one teaching me something new about troubleshooting and customer service. I also had the unique opportunity to assist in setting up and building a new poster printer for the School of Engineering's Makerspace. 
            These experiences, big and small, shaped my understanding of IT and its impact on people's day-to-day lives.
          </p>
          <img src={PrinterTwo} alt="Poster Printer" className='h-100 mr-2.5 flex-shrink-0 object-contain rounded-xl mt-5' /> 
        </div>

        <div className="bg-base-300 p-5 rounded-xl">
          <h2 className="font-bold text-2xl mb-4">Learning Goals</h2>
          <div className="space-y-4">
            <div className="bg-base-200 p-4 rounded-md">
              <h3 className="font-semibold text-xl mb-2">Goal 1: Technological Literacy </h3>
              <br />
              <p className="text-lg leading-relaxed">
                <strong>Goal:</strong> Improve my usage and understanding of process automation tools, to enhance the efficiency of manual tasks. 
                <br />
                <strong>Action Plan:</strong> To achieve this goal, I plan on learning Microsoft's PowerAutomate to create custom workflows which automates certain manual tasks. As well, I can speak with my supervisor about the best tools to learn PowerAutomate. 
                <br />
                <strong>Measure of Success:</strong> The success of this goal is measured in the improved efficiency I will be adding to certain tasks that typically are manual and prone to human error. As well, the time saved by automating these tasks is another good measure of success. 
                <br />
                <strong>Reflection:</strong> During my co-op work term, I had the opportunity to automate several booking systems using Microsoft PowerAutomate. One of the highlights was successfully deploying an automated system for booking CEPS Media Equipment. This project not only enhanced the efficiency and reliability of the booking process but also provided me with valuable experience in incorporating feedback and implementing suggestions from the CEPS Media team. The positive reception from the team and the impact of the automation made it a very rewarding experience!
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-md">
              <h3 className="font-semibold text-xl mb-2">Goal 2: Communicating</h3>
              <br />
              <p className="text-lg leading-relaxed">
                <strong>Goal:</strong> Improve my written communication in an Information Technology environment, so I can best communicate complex issues and solutions to people of all experience levels. 
                <br />
                <strong>Action Plan:</strong> To achieve this goal, I plan on asking my coworkers for advice with difficult issues, and how to best approach them. As well, asking for feedback on tickets I've resolved to see if there may be a better way to approach the situation in the future. 
                <br />
                <strong>Measure of Success:</strong> The success of this goal is best measured with feedback from my coworkers and supervisor, who can provide advice and help gauge if I need to make improvements going forward. 
                <br />
                <strong>Reflection:</strong> Throughout this past work term, working with both professors and students provided valuable experience in tailoring my communications to people with varying levels of technical experience. Explaining issues and solutions in a way that was simple yet effective became easier throughout my work term. Through receiving feedback on resolved tickets and collaborating closely with colleagues, I learned how to communicate confusing IT issues more effectively. This ability to simplify information significantly improved my written communication skills.
              </p>
            </div>

            <div className="bg-base-200 p-4 rounded-md">
              <h3 className="font-semibold text-xl mb-2">Goal 3: Professional & Ethical Behaviour</h3>
              <br />
              <p className="text-lg leading-relaxed">
                <strong>Goal:</strong> Enhance my time management to efficiently balance daily tickets with larger, project-based tasks, such as automating manual processes. 
                <br />
                <strong>Action Plan:</strong> I can ensure my time is best managed by being aware of tickets coming in, and their severity, so I can prioritize efficiently. This will allow me to complete project-based tasks on time, while also resolving important tickets as soon as possible. 
                <br />
                <strong>Measure of Success:</strong> This goal is measured best when I am able to consistently resolve daily tickets while delivering projects on time, without sacrificing the quality of the project. 
                <br />
                <strong>Reflection:</strong> Throughout this co-op term, I significantly improved my time management skills by effectively balancing daily support tickets with larger project-based tasks. By prioritizing tickets based on their urgency, I was able to ensure that critical issues were resolved quickly while still dedicating time to long-term projects. This allowed me to maintain steady progress on my automation projects without compromising on the quality of work delivered in my support tickets.
              </p>
            </div>
          </div>
        </div>

        <div className='bg-base-300 p-5 rounded-xl flex flex-col'>
          <div>
            <h2 className="font-bold text-2xl mb-4">Conclusion & Acknowledgements</h2>
            <p className="text-lg leading-relaxed">
              This co-op term was an unforgettable experience that allowed me to grow in ways I did not expect. The hands-on projects, the collaborative environment, and the mentorship I received made every day an opportunity to learn. 
              I am deeply grateful to Bogdan Bunescu, Matt Kurylo, and Matt Kent, for all their assistance and encouragement, which helped me make the most of this opportunity.
              As I reflect on this work term, I'm excited about how the skills I've developed — whether automating workflows, solving technical issues, or communicating effectively — will shape my future. 
              This experience has inspired me to continue seeking challenges that push me to learn and grow, and I couldn't be more thankful for the chance to contribute to the IT Department's mission.
            </p>
          </div>
          <img src={SOE_Building} alt="Poster Printer" className='h-100 mr-2.5 flex-shrink-0 object-contain rounded-xl mt-5' />
        </div> 
      </section>
    </div>
  );
}

export default WT2Report;