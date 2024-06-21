import { Link } from "react-router-dom";
import { FaLocationArrow } from "react-icons/fa";
import { PiContactlessPaymentDuotone } from "react-icons/pi";
import GitHubCalendar from "react-github-calendar";


const Home = () => {
    return(
        <div className="">
            <div className="text-white flex flex-col justify-center transition-opacity duration-1000 ease-in opacity-100">
                <div className="border-r-2 border-t-2 border-l-2 border-zinc-500 h-24 w-full">

                </div>
                <div className="text-7xl leading-tight items-center flex flex-col justify-center md:text-6xl sm:text-5xl mt-16">
                    <label className=" font-extrabold pl-15 w-3/4 animate-fadeInDown md:w-5/6 sm:5/6">
                        Full Stack Web Developer 
                        {/* from  
                        <span className="m-5 h-34 w-34 text-blue-300">
                            Hyderabad
                        </span> */}
                    </label>
                </div>
                <div className=" flex flex-row justify-center items-center">
                    <label className="w-3/4 text-xl mt-4 sm:text-md md:w-5/6 sm:w-5/6">
                        I build websites and applications that are both visually stunning and highly functional. From crafting cutting-edge  apps to exploring the newest web technologies, I'm fully dedicated. Let's collaborate and bring your digital dreams to life!
                    </label>
                </div>
                <div className="flex flex-col justify-center mt-10">
                    
                    <div className="ml-44 w-80 flex flex-row justify-around items-center md:ml-14  sm:ml-10">
                        <Link to='/about'>
                            <span className="px-3 py-2 rounded-3xl bg-zinc-900 flex flex-row justify-center items-center transition duration-700 hover:animate-bounce">
                                Read more <FaLocationArrow className="ml-3 text-xs"/> 
                            </span>
                        </Link>
                        <Link to='/contact'>
                            <span className="px-3 py-2 rounded-3xl bg-zinc-900 border border-white flex flex-row justify-center items-center transition duration-700 hover:animate-bounce">
                                Contact <PiContactlessPaymentDuotone className="ml-3"/> 
                            </span>
                        </Link>
                    </div>
                        
                </div>
                <div className="mt-12 flex flex-col justify-center items-center w-full">
                    
                    <div className="mt-6 w-4/5 overflow-x-scroll no-scrollbar flex flex-col justify-center items-center">
                        <label className="text-2xl sm:text-xl">Days I Code</label>
                        <div className="mt-5 ">
                            <GitHubCalendar
                                
                                username="MVKarthikReddy"
                                blockSize={12}
                            />
                            
                        </div>
                        
                    </div>
                    <div className="flex flex-row md:justify-center sm:justify-center">
                            <img
                                
                                align="center"
                                alt="Karthik's Contribution Graph"
                                src="https://github-readme-activity-graph.vercel.app/graph?username=MVKarthikReddy&custom_title=Contribution%Graph&bg_color=070707&color=dcdcdc&line=21abcd&point=555555&area=true&hide_border=true" 
                            />
                    </div>
                    <div className="stats grid grid-cols-2 gap-10 mt-10 md:grid-cols-1 sm:grid-cols-1 md:justify-center ">
                        <div className="flex flex-row md:justify-center sm:justify-center">
                            <img
                                className="flex items-center sm:w-5/6"
                                align="center"
                                src="https://github-readme-stats.vercel.app/api?username=MVKarthikReddy&theme=react&hide_border=false&include_all_commits=true&count_private=true"
                                alt="Karthik"
                            />
                        </div>
                        <div className="flex flex-row md:justify-center sm:justify-center">
                            <img
                                className="sm:w-5/6"
                                align="center"
                                src="https://github-readme-streak-stats.herokuapp.com/?user=MVKarthikReddy&theme=react&hide_border=false"
                                alt="Karthik"
                            />
                        </div>
                        <div className="flex flex-row md:justify-center sm:justify-center">
                            <img 
                                className="sm:w-4/6"
                                align="center"
                                alt="Karthik's Top Languages" 
                                src="https://github-readme-stats.vercel.app/api/top-langs/?username=MVKarthikReddy&layout=compact&theme=tokyonight&langs_count=10"
                            />
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}

export default Home;