import React from 'react';

const Resume = () => {
    return (
        <main className="p-5 bg-base">
            <div className="text-black flex flex-col items-center m-2">
                <section className='text-box bg-secondary p-5 rounded-xl'>
                    <embed
                        src='https://drive.google.com/file/d/1U5cSm02BVswe7Ix0O7sTq61tiqgT4XZB/preview?usp=sharing'
                        className="h-[80vh] w-[90vw]"
                        title="Resume"
                    />
            </section>
            </div>
        </main>
    );
};

export default Resume;