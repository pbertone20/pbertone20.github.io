import React from 'react';

const Resume = () => {
    return (
        <main className="p-3 bg-base">
            <div className="text-black flex flex-col items-center m-2">
                <section className='text-box bg-secondary p-5 rounded-xl'>
                    <embed
                        src='https://drive.google.com/file/d/1YL285LoQXcZjqpY5C-QVwupZC1E-Fkr3/preview?usp=sharing'
                        className="h-[100vh] w-[90vw]"
                        title="Resume"
                    />
            </section>
            </div>
        </main>
    );
};

export default Resume;