import React from 'react';
import ResumePDF from '../assets/pbertone-resume.pdf';

const Resume = () => {
    return (
        <main className="p-3 bg-base">
            <div className="text-black flex flex-col items-center m-2">
                <section className='text-box bg-secondary p-5 rounded-xl'>
            <       iframe
                        src={ResumePDF}
                        className="size-full"
                        style={{ minHeight: '100vh', minWidth: '90vw'}}
                        title="Resume"
                    >
                        <p>Your browser does not support PDFs. <a href={ResumePDF}>Download the PDF</a>.</p>
                    </iframe>                
                </section>
            </div>
        </main>
    );
};

export default Resume;