import React from 'react';
import ResumePDF from '../assets/pbertone-resume.pdf';

const Resume = () => {
    return (
        <main className="p-3 bg-base">
            <div className="flex flex-col items-center m-2">
                <section className='text-box bg-secondary p-5 rounded-xl'>
                    <object data={ResumePDF} type="application/pdf" className="h-full w-full" alt="Resume" style={{ minHeight: '100vh', minWidth: '90vw'}}/>
                </section>
            </div>
        </main>
    );
};

export default Resume;