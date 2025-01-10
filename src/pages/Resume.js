import React from 'react';

const Resume = () => {
  return (
    <main className="container mx-auto py-16 px-4 mt-10 bg-base-200">
      <h2 className="text-3xl font-bold mb-4 text-center">Resume</h2>
      <div className="flex justify-center bg-base-200">
        <iframe 
          src="https://drive.google.com/file/d/1w6YwqcFDyR4IGZS4YNTOhnfoljJPtZAr/preview?usp=sharing" 
          title="Resume" 
          className="w-full max-w-4xl h-[80vh]" 
          frameBorder="0" 
        />
      </div>
    </main>
  );
};

export default Resume;