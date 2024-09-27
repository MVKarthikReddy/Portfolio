
import { Skillset } from './skillset'
const Card = () => {
    return (
    <div className='w-5/6'>
        <div className='my-2'>
            <label className='text-zinc-500'>Frontend</label>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {
                Skillset['frontend'].map(skill => (
                    <div key={skill.id} className="text-sm grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='flex flex-row justify-center items-center'>
                            <img src={skill.logo} alt='mongo' className='w-4 h-4 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-xs">{skill.title}</div>
                                {/* <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='my-2'>
            <label className=' text-zinc-500'>Backend</label>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {
                Skillset['backend'].map(skill => (
                    <div key={skill.id} className="text-sm grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='flex flex-row justify-center items-center'>
                            <img src={skill.logo} alt='mongo' className='w-4 h-4 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-xs">{skill.title}</div>
                                {/* <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='my-2'>
            <label className=' text-zinc-500'>Databases</label>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {
                Skillset['databases'].map(skill => (
                    <div key={skill.id} className="text-sm grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='flex flex-row justify-center items-center'>
                            <img src={skill.logo} alt='mongo' className='w-4 h-4 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-xs">{skill.title}</div>
                                {/* <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

        <div className='my-2'>
            <label className=' text-zinc-500'>Infrastructure</label>
        </div>
        <div className="grid grid-cols-2 gap-3">
            {
                Skillset['infrastructure'].map(skill => (
                    <div key={skill.id} className="text-sm grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='flex flex-row justify-center items-center'>
                            <img src={skill.logo} alt='mongo' className='w-4 h-4 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-xs">{skill.title}</div>
                                {/* <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div> */}
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        <div className='my-2'>
            <label className=' text-zinc-500'>Tools</label>
        </div>
        <div className="grid grid-cols-2 gap-4">
            {
                Skillset['tools'].map(skill => (
                    <div key={skill.id} className="text-sm grid2-item bg-gray-900 hover:bg-zinc-800 text-white rounded-lg items-center justify-center cursor-pointer hover:animate-zoomIn">
                        <div className='flex flex-row justify-center items-center'>
                            <img src={skill.logo} alt='mongo' className='w-4 h-4 bg-black rounded-lg'/>
                            <div className="text-left rtl:text-right">
                                <div className="ml-2 mb-1 mt-1 text-xs">{skill.title}</div>
                                {/* <div  className="ml-2 -mt-1 font-sans text-xs">{skill.desc}</div> */}
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

