import React from 'react';
import GDSC1 from '../assets/GDSC-1.jpg';
import GDSC2 from '../assets/GDSC-2.jpg';
import SOCIS1 from '../assets/SOCIS-1.jpg';
import SOCIS2 from '../assets/SOCIS-2.jpg';
import SOCIS3 from '../assets/SOCIS-3.jpg';
import SOCIS4 from '../assets/SOCIS-4.jpg';
import SOCIS5 from '../assets/SOCIS-5.jpg';

const Extracurriculars = () => {
  return (
    <main className="p-5 bg-coffee-300 text-coffee-100">
      <section className="extracurriculars space-y-8">
        <h2 className="text-3xl font-bold mb-6">Extracurriculars</h2>

        <div className="mb-6">
          <p className="text-xl font-semibold">Event Operations Manager</p>
          <p className="text-md">Google Developer Student Club<br />2023 - 2024</p>
          <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
            <li>Planned the GDSCHacks hackathon; focusing on securing buildings, funding, and sponsors. 
                The Events Team has contacted over 300+ individuals, including UofG administrative staff, external sponsors in the Guelph area, 
                and various UofG Computing, Business, and Engineering clubs.</li>
            <li>GDSCHacks had an attendance of over 200+ individuals and a budget of $15,000, co-sponsored officially by Google, GeeksforGeeks, Major League Hacking, 
                the College of Engineering and Physical Sciences Student Council, the School of Computer Science, the School of Engineering, Ctrl V, and more.</li>
          </ul>
          <div className="flex overflow-x-auto py-0 px-7 mt-5">
            <img src={GDSC1} alt="GDSC-1" className="h-72 mr-2.5 flex-shrink-0" />
            <img src={GDSC2} alt="GDSC-2" className="h-72 mr-2.5 flex-shrink-0" />
          </div>
        </div>

        <div>
          <p className="text-xl font-semibold">Vice President of Social Affairs</p>
          <p className="text-md">Society of Computing and Information Sciences<br />2023 - 2024</p>
          <ul className="list-disc list-inside mt-2 space-y-2 bullet-list">
            <li>Played a key role in the club's success by collaborating on leadership activities and managing finances, including securing over $8,000 in funding,
                improving our Makerspace hardware inventory, and ensuring compliance with organizational requirements for the club.</li>
            <li>Delivered engaging sessions as a speaker in the Circuitry workshop series, effectively teaching students about circuitry concepts. 
                Actively gathered feedback for continuous improvement and documented successes for future reference.</li>
          </ul>
          <div className="flex overflow-x-auto py-0 px-7 mt-5">
            <img src={SOCIS1} alt="SOCIS-1" className="h-72 mr-2.5 flex-shrink-0" />
            <img src={SOCIS2} alt="SOCIS-2" className="h-72 mr-2.5 flex-shrink-0" />
            <img src={SOCIS3} alt="SOCIS-3" className="h-72 mr-2.5 flex-shrink-0" />
            <img src={SOCIS4} alt="SOCIS-4" className="h-72 mr-2.5 flex-shrink-0" />
            <img src={SOCIS5} alt="SOCIS-5" className="h-72 mr-2.5 flex-shrink-0" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Extracurriculars;
