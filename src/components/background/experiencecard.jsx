import React from 'react';
import { experience } from './experienceset';
const ExperienceCard = () => {
  return (
    <div className='flex flex-col justify-around items-start'>
      {/* Card Header - Institution and Degree */}
      {
        experience.map(
            (data,index) => <div key={index} className="bg-zinc-800 w-full shadow-md rounded-lg max-w-sm mx-auto my-5 p-6 border-gray-200 duration-500 hover:shadow-md hover:shadow-blue-500  hover:bg-gradient-to-tl hover:from-black hover:to-gray-900">
                <div className="mb-4">
                    <h3 className="text-xl font-bold text-white">{data.role}</h3>
                    <p className="text-sm text-gray-400 mt-1">{data.company_name} </p>
                </div>

                {/* Date and Location */}
                <div className="flex flex-col justify-between items-start text-gray-400">
                    <span className='px-3 py-1 text-sm my-1 rounded-lg bg-zinc-900'>{data.duration}</span>
                    <p className='px-3 py-3 text-sm my-1 rounded-lg bg-zinc-900'>{data.description}</p>
                </div>

            </div>
        )
      }
    </div>
  );
};

export default ExperienceCard;
