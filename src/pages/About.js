import React from 'react';
import me from '../assets/me.jpg';

const About = () => {
  return (
    <main className="p-3 bg-base text-black">
      <div className="flex flex-col items-center m-2">
        <section className='text-box bg-secondary p-5 rounded-xl '>
          <h2 className="font-bold text-3xl mb-4">About Me</h2>
          <p className='text-balance'>
            Hey there! My name's Peter, and I'm a Bachelor of Computing student at the University of Guelph. I'm currently completing my Major in Honours Software Engineering Co-op, and a minor in Business.
            I am very passionate about computing, and I love challenges! One way I’ve challenged myself this past year was to improve my local community in the School of Computer Science (SoCS). 
            To help achieve my goal, I was the Vice President of Social Affairs in the Society of Computing and Information Science, and the Operations Manager for the Google Developer Student Club 
            which both helped foster a better sense of community that was once lost due to COVID-19. We helped bring the students in the SoCS back together and collectively ran over 20+ events,
            including our very own GDSCHacks hackathon which was an amazing success! GDSCHacks took months of planning and lots of preparation from the entire Google Developer Student Club team; 
            it was such a rewarding experience. 
            <br /><br />
            Currently, I'm completing my first co-op work term within the School of Computer Science here at the University of Guelph! I'm working under Dr. Stacey Scott as a Content Developer for one of her
            research projects. Along with another co-op student, I'm developing a livestreaming platform using React.js, Node.js, Express.js, HTML, CSS, Firebase, and APIs provided by YouTube, and Spotify. It's
            been an amazing learning experience, and I've grown so much as a Software Engineer. With these new skills under my belt I am excited for the future ahead!
          </p>
        </section>

        <img src={me} alt="Me" className="rounded-xl max-h-screen max-w-screen mt-4" />
      </div>
    </main>
  );
};

export default About;
