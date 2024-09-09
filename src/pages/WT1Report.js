import React from 'react';
import ResearchGroup from '../assets/research-2.jpg';
import ResearchPhoto from '../assets/research-1.jpg';
import Flowchat from '../assets/flowchart-v2.png';
import UMLClassDiagram from '../assets/kpop-class-diagram.png'


const WT1Report = () => {
  return (
    <main className="p-5 bg-base text-black">
      <section className='text-box bg-secondary p-5 rounded-xl'>
        <h1 className="font-bold text-4xl mb-6">Co-op Work Term 1 Report</h1>
        
        <section className='mb-8'>
          <h2 className="font-bold text-2xl mb-4">Introduction</h2>
          <p className='text-balance'>
            Welcome to my Co-op Work Term 1 report! Over the past 3 months of Summer 2024, I had the invaluable opportunity to work with the School of Computer Science at the University of Guelph. 
            This report is designed to provide a comprehensive overview of my experiences, the challenges I faced, and the significant milestones I achieved during my placement. 
            Through this term, I engaged in various projects that not only helped me apply my academic knowledge in real-world scenarios but also allowed me to acquire new skills and insights into the field of software engineering.
            <br/><br/>
          </p>
          <p className='text-balance'>
            My role involved contributing to a live-streaming platform research tool, where I worked closely with a talented team under the guidance of Dr. Stacey Scott and Shan Yun Kuo. 
            This position was not only enriching in terms of technical skills but also offered valuable lessons in teamwork, project management, and creative problem-solving. 
            In the following sections, I will delve into the details of my goals, achievements, and reflections on this experience.
          </p>
        </section>

        <div className="flex overflow-x-auto py-0 px-7 mt-5 mb-5">
            <img src={ResearchGroup} alt="CEPS Research Poster Symposium" className='h-72 mr-2.5 flex-shrink-0'/>
            <img src={ResearchPhoto} alt="CEPS Research Poster Symposium" className='h-72 mr-2.5 flex-shrink-0'/>
        </div>
        
        <section className='mb-8'>
          <h2 className="font-bold text-2xl mb-4">Information about the Employer</h2>
          <p className='text-balance'>
            During this co-op term, I was employed by the School of Computer Science at the University of Guelph. The department is renowned for its cutting-edge research and contributions to the worldwide computing community. 
            Working here provided me with a unique opportunity to be involved in a project aimed at developing a live-streaming platform specifically for K-Pop fans. 
            This project leveraged new technologies and offered a platform to apply my skills in React.js, Node.js, Tailwind CSS & DaisyUI, Firebase, and various YouTube APIs.
          </p>
        </section>
        
        <section className='mb-8'>
          <h2 className="font-bold text-2xl mb-4">Goals</h2>
          <div className="space-y-4">
            <div className="bg-secondary rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Learning Goal 1: Technological Literacy (for GitLab/GitHub)</h3>
              <p className='text-balance'>
                <strong>Goal:</strong> Enhance my skills in GitLab for project management, planning, and tracking.
                <br />
                <strong>Action Plan:</strong> Reviewed documentation and best practices, and sought clarification when needed.
                <br />
                <strong>Measure of Success:</strong> Gained feedback from Dr. Stacey Scott and my colleagues and documented improvements in my skills.
                <br />
                <strong>Reflection:</strong> My understanding and usage of GitLab and GitHub tools improved significantly. Using GitHub Pages taught me more about Git and its project management capabilities.
              </p>
            </div>

            <div className="bg-secondary rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Learning Goal 2: Depth & Breadth of Understanding (of UI)</h3>
              <p className='text-balance'>
                <strong>Goal:</strong> Improve UI design abilities with a focus on creating intuitive and engaging user interfaces for web applications.
                <br />
                <strong>Action Plan:</strong> Enhanced my UI design skills in React through practice, feedback, and research.
                <br />
                <strong>Measure of Success:</strong> Received positive feedback from the team and users regarding the usability and aesthetics of the live-streaming platform.
                <br />
                <strong>Reflection:</strong> My proficiency in UI design improved considerably. I applied best practices in designing user-friendly interfaces, resulting in a more engaging and visually appealing platform.
              </p>
            </div>

            <div className="bg-secondary rounded-xl">
              <h3 className="font-semibold text-xl mb-2">Learning Goal 3: Time Management & Reading Comprehension</h3>
              <p className='text-balance'>
                <strong>Goal:</strong> Develop effective time management and reading comprehension skills to improve overall productivity and understanding of complex technical materials.
                <br />
                <strong>Action Plan:</strong> Utilized time management tools, engaged in focused reading, and practiced summarizing technical documents to enhance comprehension.
                <br />
                <strong>Measure of Success:</strong> Improved ability to manage tasks efficiently and demonstrated better understanding and application of technical content in project work.
                <br />
                <strong>Reflection:</strong> My time management and reading comprehension skills have greatly improved, enabling me to handle tasks more effectively and understand complex technical documents with greater ease.
              </p>
            </div>
          </div>
        </section>

        <section className='mb-8'>
          <h2 className="font-bold text-2xl mb-4">Achievements</h2>
          <p className='text-balance'>
            One of the most significant achievements during this co-op term was the successful development and launch of the live-streaming platform for K-Pop fans. 
            This project required extensive research, coding, and collaboration with the team. The platform was well-received and provided valuable insights into user behavior and preferences.
            Additionally, working with Dr. Stacey Scott and Shan Yun Kuo allowed me to gain valuable experience in a professional research setting and apply my skills to a meaningful project.
          </p>
        </section>

        <div className="flex overflow-x-auto py-0 px-7 mt-5 mb-5">
            <img src={Flowchat} alt="CEPS Research Poster Symposium" className='h-72 mr-2.5 flex-shrink-0'/>
            <img src={UMLClassDiagram} alt="CEPS Research Poster Symposium" className='h-72 mr-2.5 flex-shrink-0'/>
        </div>

        <section className='mb-8'>
          <h2 className="font-bold text-2xl mb-4">Conclusion & Acknowledgements</h2>
          <p className='text-balance'>
            This co-op term was an immensely rewarding experience that has significantly contributed to my professional and personal growth. 
            I had the opportunity to work on a cutting-edge project, collaborate with talented individuals, and apply my skills in a real-world setting. 
            The insights and knowledge gained during this term will undoubtedly shape my future endeavors in software engineering. 
            I am grateful for the opportunity to contribute to the live-streaming platform research tool and to work alongside such skilled professionals.
          <br /> <br />
          </p>
          <p className='text-balance'>
            I would like to extend my sincere gratitude to Dr. Stacey Scott for her invaluable guidance and support throughout this term. 
            Her mentorship was instrumental in my development and success in the project. Additionally, I want to acknowledge Shan Yun Kuo for her collaboration and contributions to the project. 
            The experience gained during this co-op term has been transformative, and I look forward to applying the skills and knowledge acquired in future endeavors.
          </p>
        </section>
      </section>
    </main>
  );
};

export default WT1Report;
