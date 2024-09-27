import EducationCard from '../components/background/educationcard'

const Background = () => {
  return (
    <div className='flex flex-row bg-zinc-950 rounded-lg py-4 px-3 justify-around sm:flex-col'>
        <div>
            <label className='text-white font-bold text-2xl'>Education</label>
            <EducationCard />
        </div>
        <div className="border h-screen my-auto border-blue-500 sm:hidden"></div>
        <div>
            <label className='text-white font-bold text-2xl'>Experience</label>
            <EducationCard />
        </div>
    </div>
  )
}

export default Background