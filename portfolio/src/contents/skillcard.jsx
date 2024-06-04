import mongo from '../assets/mongo.png'
import react from '../assets/react1.png'
import javascript from '../assets/javascript.png'
import { Skillset } from './skillset'
const Card = () => {
    return (
    <div className='w-4/6'>
        <div className='mt-4'>
            <label className='text-4xl text-zinc-500 md:text-3xl sm:text-2xl'>Frontend</label>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {
                Skillset['frontend'].map(skill => (
                    <div key={skill.id} className="grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='h-14 flex flex-row px-4 py-2.5'>
                            <img src={skill.logo} alt='mongo' className='w-10 h-10 p-1 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-sm font-semibold">{skill.title}</div>
                                <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='mt-5'>
            <label className='text-4xl text-zinc-500 md:text-3xl sm:text-2xl'>Backend</label>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {
                Skillset['backend'].map(skill => (
                    <div key={skill.id} className="grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='h-14 flex flex-row px-4 py-2.5'>
                            <img src={skill.logo} alt='mongo' className='w-10 h-10 p-1 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-sm font-semibold">{skill.title}</div>
                                <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='mt-5'>
            <label className='text-4xl text-zinc-500 md:text-3xl sm:text-2xl'>Databases</label>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {
                Skillset['databases'].map(skill => (
                    <div key={skill.id} className="grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='h-14 flex flex-row px-4 py-2.5'>
                            <img src={skill.logo} alt='mongo' className='w-10 h-10 p-1 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-sm font-semibold">{skill.title}</div>
                                <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='mt-5'>
            <label className='text-4xl text-zinc-500 md:text-3xl sm:text-2xl'>Infrastructure</label>
        </div>
        <div className="grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
            {
                Skillset['infrastructure'].map(skill => (
                    <div key={skill.id} className="grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='h-14 flex flex-row px-4 py-2.5'>
                            <img src={skill.logo} alt='mongo' className='w-10 h-10 p-1 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-sm font-semibold">{skill.title}</div>
                                <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
   
    </div>


    )
}

export default Card

