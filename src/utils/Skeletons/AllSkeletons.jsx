import React from 'react';

export const HomeSkeletonLoader = () => {
  return (
    <div className="">
      <div className="text-white bg-zinc-950 rounded flex flex-col justify-center">
        <div className="w-full pt-9 pb-4 px-9 bg-gradient-to-b from-black to-zinc-900 rounded-t">
          <div className="rounded-lg bg-gray-800 animate-pulse h-72">
            <div className="leading-tight h-72 flex justify-center backdrop-blur-sm rounded-xl">
              <div className="flex flex-col h-full mt-4 w-3/5">
                <div className="h-10 bg-gray-700 w-3/4 rounded-lg mt-8"></div>
                <div className="h-6 bg-gray-700 w-3/4 rounded-lg my-4"></div>
                <div className="h-6 bg-gray-700 w-1/2 rounded-lg my-2"></div>
                <div className="h-10 bg-gray-700 w-40 rounded-lg my-4"></div>
              </div>
              <div className="flex items-end">
                <div className="w-52 sm:w-44 bg-gray-600 rounded-full h-52"></div>
              </div>
            </div>
          </div>
          <div className="flex justify-around mt-4 animate-pulse">
            <div className="h-6 w-40 bg-gray-600 rounded-lg"></div>
            <div className="h-6 w-40 bg-gray-600 rounded-lg"></div>
          </div>
        </div>

        <div className="flex flex-col mt-6 px-4 animate-pulse">
          <div className="h-8 bg-gray-700 w-40 rounded-lg"></div>
          <div className="h-100 bg-gray-700 rounded-lg my-4">
            <SkillSkeletonLoader />
          </div>
        </div>
      </div>
    </div>
  );
};

const SkillSkeletonLoader = () => {
    return (
      <div className='grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-11 mx-9 my-5'>
        {Array(6).fill().map((_, index) => (
          <div 
            key={index}
            className='bg-zinc-900 flex flex-col rounded-lg animate-pulse duration-500'>
            {/* Skeleton for the label */}
            <div className='h-4 bg-gray-700 rounded w-1/2 mx-3 mt-3'></div>
            
            {/* Skeleton for the description */}
            <div className='space-y-4 px-5 py-4'>
              <div className='h-2 bg-gray-700 rounded w-5/6'></div>
              <div className='h-2 bg-gray-700 rounded w-4/6'></div>
              <div className='h-2 bg-gray-700 rounded w-2/3'></div>
              <div className='h-2 bg-gray-700 rounded w-5/6'></div>
              <div className='h-2 bg-gray-700 rounded w-5/6'></div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export const EducationSkeleton = () => {
    return(
        <>
            {Array(3).fill().map((_, index) => (
                <div key={index} className="bg-zinc-800 shadow-md rounded-lg max-w-sm mx-auto my-5 p-6 border-gray-200 animate-pulse">
                        <div className="mb-2">
                            <div className="h-4 bg-gray-700 rounded w-3/4 mb-2"></div>
                            <div className="h-3 bg-gray-600 rounded w-1/2"></div>
                        </div>

\                        <div className="flex flex-col justify-between items-start text-gray-400">
                            <div className="h-2 bg-gray-600 rounded-lg w-1/3 my-1"></div>
                            <div className="h-2 bg-gray-600 rounded-lg w-1/4 my-1"></div>
                            <div className="h-2 bg-gray-600 rounded-lg w-1/4 my-1"></div>
                        </div>
                </div>
                ))}
            
        </>
    )
  }
  

