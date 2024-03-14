import React from 'react';

const LoadingPage = () => {
    return (
        <div className="flex flex-col items-center justify-center space-y-7 bg-white w-full pt-8 md:pt-20 px-6 md:px-10 pb-14 overflow-y-scroll scrollbar-hide h-full min-h-full min-w-full">

            <h1 className='text-2xl font-extrabold'>Loading...</h1>
            {/* Add your loading content here */}
        </div>
    );
};

export default LoadingPage;
