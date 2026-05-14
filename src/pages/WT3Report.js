import React from 'react';
import ppoHardhat from '../assets/ppo-hardhat.jpeg';
import lobsterDemo from '../assets/lobster demo.jpeg';
import bucceePhoto from '../assets/Buccee-photo.jpeg';
import cavenders from '../assets/cavenders.jpeg';
import planeOne from '../assets/plane-1.jpeg';
import planeTwo from '../assets/plane-2.jpeg';
import planeThree from '../assets/plane-3.jpeg';
import planeFour from '../assets/plane-4.jpeg';

const WT3Report = () => {
  return (
    <div className="container mx-auto py-16 px-4 mt-10 bg-base-200">
      <h1 className="text-3xl font-bold mb-6 text-center">Co-op Work Term 3 Report</h1>
      <section className="space-y-8">
        
        {/* Introduction Section */}
        <div className="bg-base-300 p-8 rounded-xl flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="font-bold text-2xl mb-4">Introduction</h2>
            <p className="text-lg leading-relaxed mb-4">
              Welcome to my third co-op work term report! Over the Winter 2026 semester, I had the amazing opportunity to work as a Data Services Technician Co-op at P&P Optica's Head Office. 
              Overall, my co-op work term has been extremely rewarding and enriching thus far, and I look forward to the months to come! From learning new tools to sharpening my problem-solving and communication skills, I took on every challenge with an eagerness to learn. 
            </p>
            <h2 className="font-bold text-2xl mb-4 mt-4">Employer Information</h2>
            <p className="text-lg leading-relaxed">
              During this work term, I worked under the guidance of Jenny Udema, the Data Services Manager. 
              At P&P Optica, I focused on improving my depth and breadth of understanding in Artificial Intelligence Software Systems, and learning how cross-functional teams work together to support it. 
              Being part of such a fast-paced, collaborative environment gave me a sense of just how vital departments such as the Software and Hardware teams are to the company's success.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center items-center">
            <div className='w-full max-w-[550px] aspect-square rounded-[20%] overflow-hidden mx-auto shadow-lg flex-shrink-0'>
              <img
                src={ppoHardhat}
                alt="Me in my P&P Optica Hardhat"
                className="w-full h-full object-cover object-[center_40%]"
              />
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="bg-base-300 p-8 rounded-xl space-y-16">
          <h2 className="font-bold text-3xl mb-4 border-b border-base-100 pb-2 text-center">Achievements</h2>
          
          {/* FIXED: Removed flex-row and w-1/2 so text spans full width without a weird blank space */}
          <div>
            <h3 className="font-bold text-xl mb-2 text-primary">Process Automation & Dashboarding</h3>
            <p className="text-lg leading-relaxed">
              One of my proudest accomplishments during this work term was getting the amazing opportunity to work on a company-wide spreadsheet script using Google Apps Script. 
              The purpose of this spreadsheet was to consolidate customer data into an informative and easy-to-read dashboard. Automating the manual task of creating pivot tables of data on each individual customer sheet taught me a lot more about how process automation can improve the overall efficiency of manual data analysis. 
              On top of the dashboard, I got to write some extensive documentation to help aid future employees on how to use and maintain my script. This dashboard and documentation directly supports the Data Services and Customer Success Teams, and helps reduce long hours of manual analysis over time. 
            </p>
          </div>


          {/* Lobster Viability Testing */}
          <div className="flex flex-col md:flex-row gap-0 items-center">
            <div className="md:w-1/2 flex justify-center w-full">
              <img 
                src={lobsterDemo} 
                alt="Lobster Viability Testing Demo" 
                className='w-full max-w-[550px] rounded-[20%] aspect-square shadow-lg object-cover object-[center_75%]' 
              /> 
            </div>
            <div className="md:w-1/2">
              <h3 className="font-bold text-xl mb-2 text-primary">Viability Testing: Seafood Market Expansion</h3>
              <p className="text-lg leading-relaxed">
                Beyond process automation, I got the chance to participate in hands-on system testing by evaluating lobster shell and meat in our Smart Imaging System. 
                The goal of this project was to analyze the efficacy of our system's detections specifically for lobsters. This viability testing was a highly exciting initiative, as proving our system's capabilities with these materials may allow P&P Optica to successfully break into the seafood market. 
                It was incredibly rewarding to contribute to testing that holds such strong strategic and commercial value for the company's future!
              </p>
            </div>
          </div>

          {/* Texas Trip Data Collection */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="md:w-1/2">
              <h3 className="font-bold text-xl mb-2 text-primary">On-Site Data Collection in Palestine, Texas</h3>
              <p className="text-lg leading-relaxed mb-4">
                Another major highlight of my term was traveling to Palestine, Texas, to perform an on-site data collection at Wayne Sanderson Farms. 
                I had the incredible opportunity to work directly with our Smart Imaging System in the field. This hands-on experience taught me a ton about how our system operates in a real-world environment and how users interact with it on a daily basis. 
                Engaging directly with the client also significantly improved my customer communication skills. 
              </p>
              <p className="text-lg leading-relaxed">
                The data we collect plays an integral role in updating our machine learning models to be more effective for our customers. As part of the Data Services team, my responsibility was to carefully collect this vital data and post-process it using AWS tools, ultimately preparing it for our AI Model Development team to train and refine their algorithms.
              </p>
            </div>
            {/* FIXED: Removed h-full so images don't warp within the grid */}
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <img 
                src={bucceePhoto} 
                alt="Buc-ee's Trip in Texas" 
                className='w-full rounded-xl shadow-lg object-cover object-[center_40%] aspect-square' 
              />
              <img 
                src={cavenders} 
                alt="Cavender's in Texas" 
                className='w-full rounded-xl shadow-lg object-cover aspect-square' 
              />
            </div>
          </div>
        </div>

        {/* Learning Goals Section */}
        <div className="bg-base-300 p-8 rounded-xl">
          <h2 className="font-bold text-3xl mb-6 text-center border-b border-base-100 pb-2">Learning Goals</h2>
          <div className="space-y-6">
            <div className="bg-base-200 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-3 text-secondary">Goal 1: Critical & Creative Thinking</h3>
              <p className="text-lg leading-relaxed">
                <strong>Goal:</strong> Improve the depth and breadth of my understanding in Artificial Intelligence Software Systems, and how cross-functional teams work together to support it.<br /><br />
                <strong>Action Plan:</strong> To achieve this goal, I can discuss with members of various teams, and get more informed on different departments and their functions. These may include departments such as the Software and Hardware teams.<br /><br />
                <strong>Measure of Success:</strong> To measure the success of this goal, I can talk about my understanding of certain teams with my coworkers to get clarification on things I may not fully comprehend.<br /><br />
                <strong>Reflection:</strong> It was a wonderful experience learning a new programming language and to interface with spreadsheet software such as Google Sheets. Engaging with cross-functional requirements allowed me to earn an "Outstanding" evaluation in my ability to learn and my ability to work with others.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-3 text-secondary">Goal 2: Communicating</h3>
              <p className="text-lg leading-relaxed">
                <strong>Goal:</strong> Improve my oral communication in a professional setting. I want to maintain a clear and polite tone, and communicate information effectively.<br /><br />
                <strong>Action Plan:</strong> To achieve this goal, I need to actively be aware of my communication and how I discuss certain topics, as well as staying on appropriate subjects while working.<br /><br />
                <strong>Measure of Success:</strong> To measure the success of this goal, I can discuss my progress in my 1-on-1 meetings with my manager, and my coworkers, as well ask for advice when necessary.<br /><br />
                <strong>Reflection:</strong> Throughout the term, I consistently practiced these communication strategies, which resulted in a "Very Good" evaluation for my oral and written communication skills. Writing extensive documentation for my scripting project, as well as communicating with clients during my Texas trip, heavily reinforced my ability to communicate complex technical concepts clearly.
              </p>
            </div>

            <div className="bg-base-200 p-6 rounded-xl shadow-inner">
              <h3 className="font-bold text-xl mb-3 text-secondary">Goal 3: Professional & Ethical Behaviour</h3>
              <p className="text-lg leading-relaxed">
                <strong>Goal:</strong> Improve my leadership skills at work, and to be an example for others.<br /><br />
                <strong>Action Plan:</strong> To achieve this goal, I can keep consistent with my work and try my best in all areas of my co-op. As well, I can discuss with my manager different side-projects I can contribute to.<br /><br />
                <strong>Measure of Success:</strong> I hope to work on at least one side project throughout this term, and try my best to set an example for other co-ops in the future.<br /><br />
                <strong>Reflection:</strong> I took great initiative by developing the customer data dashboard, which served as a major project. This proactive approach allowed me to achieve an "Outstanding" rating in demonstrated initiative, as I actively sought out new tasks to improve company efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* Conclusion Section */}
        <div className='bg-base-300 p-8 rounded-xl flex flex-col md:flex-row-reverse gap-8 items-center'>
          <div className="md:w-1/2">
            <h2 className="font-bold text-2xl mb-4">Conclusion & Acknowledgements</h2>
            <p className="text-lg leading-relaxed">
              This co-op term at P&P Optica was an unforgettable experience that allowed me to grow in ways I did not expect. The hands-on projects, the collaborative environment, and the mentorship I received made every day an opportunity to learn. 
              I am deeply grateful to Jenny Udema for all her assistance and encouragement, which helped me make the most of this opportunity. The feedback and coaching I received empowered me to achieve an "Outstanding" level of quality, productivity, and dependability in my work.
              <br /><br />
              As I reflect on this work term, I'm excited about how the skills I've developed - whether automating workflows in Google Apps Script, performing on-site data collection, solving technical issues, or communicating effectively — will shape my future software engineering career. 
            </p>
          </div>
          
          {/* FIXED: Turned the 4 plane images into a perfect 2x2 grid collage! */}
          <div className='w-full md:w-1/2 grid grid-cols-2 gap-3 flex-shrink-0'>
            <img 
              src={planeOne} 
              alt="Flying to Texas 1" 
              className='w-full aspect-square rounded-[20%] shadow-lg object-cover object-[center_20%]' 
            />
            <img 
              src={planeTwo} 
              alt="Flying to Texas 2" 
              className='w-full aspect-square rounded-[20%] shadow-lg object-cover' 
            />
            <img 
              src={planeThree} 
              alt="Flying to Texas 3" 
              className='w-full aspect-square rounded-[20%] shadow-lg object-cover' 
            />
            <img 
              src={planeFour} 
              alt="Flying to Texas 4" 
              className='w-full aspect-square rounded-[20%] shadow-lg object-cover' 
            />
          </div>
        </div> 
      </section>
    </div>
  );
}

export default WT3Report;