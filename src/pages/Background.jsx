import { useEffect, useState } from 'react';
import EducationCard from '../components/background/educationcard'
import ExperienceCard from '../components/background/experiencecard';
import { EducationSkeleton } from '../utils/Skeletons/AllSkeletons'

const Background = () => {

  const [isLoading, setIsLoading]  = useState(true)


  useEffect(() => {
      const timer = setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      
        return () => clearTimeout(timer);
  },[])

  return (
    <div>
    {
      isLoading ?  (
        <div className='flex flex-row bg-zinc-950 rounded-lg py-4 px-3 justify-around sm:flex-col'>
          <div className=' w-1/2'>
            <EducationSkeleton />
          </div>
          <div className="border h-screen my-auto border-blue-500 sm:hidden"></div>
          <div className=' w-1/2'>
            <EducationSkeleton />
          </div>
          
        </div>
      ) : (
        <div className='flex flex-row bg-zinc-950 rounded-lg py-4 px-3 justify-around sm:flex-col'>
            <div>
                <label className='text-white font-bold text-2xl'>Education</label>
                <EducationCard />
            </div>
            <div className="border h-screen my-auto border-blue-500 sm:hidden"></div>
            <div>
                <label className='text-white font-bold text-2xl'>Experience</label>
                <ExperienceCard />
            </div>
        </div>
      )
    }
    </div>
    
  )
}

export default Background