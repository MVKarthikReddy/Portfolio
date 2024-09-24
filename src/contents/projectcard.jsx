import {projectset} from './projectset'
import gitlink from '../assets/gitlink.png'
import livedemo from '../assets/livedemo.png'
const ProjectCard = () => {
    return (
        <div className="w-full">
                <div className="w-3/4 sm:w-full max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">

                    <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 gap-10">
                        {
                            projectset.map( project => (
                                <div key={project.id} className={`grid2-item rounded mx-auto relative overflow-hidden bg-cover bg-no-repeat transition duration-700 hover:shadow-md hover:shadow-gray-400 ${project.id % 2 == 0 ? 'animate-fadeinbounceright' : 'animate-fadeinbounceleft'}`}>
                                    <div className='relative group'>
                                        <img className="cursor-pointer transition duration-500 ease-in-out hover:scale-110 " src={project.img} alt="Sunset in the mountains"  />
                                        <div className='flex flex-row justify-around w-30 transition duration-700 hidden group-hover:flex absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]'>
                                             <a href={project.git} className='rounded-lg transition duration-700 hover:bg-black hover:opacity-80 border border-gray-900 m-3 bg-gray-950 w-12 h-12 opacity-70'><img src="https://img.icons8.com/?size=100&id=kktvCbkDLbNb&format=png&color=000000" className='hover:animate-spin hover:opacity-80 hover:bg-black w-12 cursor-pointer rounded-full p-3 bg-gray-950 opacity-70' alt='gitlink' /></a>
                                             <a href={project.live} className='rounded-lg transition duration-700 hover:bg-black hover:opacity-80 border border-gray-900 m-3 bg-gray-950 w-12 h-12 items-center flex justify-center opacity-70'><img src={livedemo} className='hover:animate-spin hover:opacity-80 hover:bg-black w-12 p-3 cursor-pointer rounded-full bg-gray-950 opacity-70' alt='gitlink' /></a> 
                                        </div>
                                    </div>
                                    <div className="relative group rounded-lg -mt-12 px-10 pt-5 pb-5 bg-zinc-900 m-5 transition duration-500 hover:scale-x-105 hover:scale-y-110">
                                        <a href="#"
                                            className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out inline-block mb-2 text-white">
                                            {project.title}</a>
                                        <p className="text-gray-500 text-sm pb-5">
                                            {project.desc}
                                        </p> 
                                        
                                    </div>

                                </div>
                            ))
                        }
                    </div>

                </div>
        </div>
    )
}

export default ProjectCard