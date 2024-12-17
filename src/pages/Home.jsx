
import logo from '../assets/robo.png'
import { useEffect, useState } from "react";
import ExpertiseCard from "../components/home/expertisecard";
import { HomeSkeletonLoader } from '../utils/Skeletons/AllSkeletons';


const Home = () => {
    const textArray = [
        "Full Stack Developer",
        "React Developer",
        "Tech Blogger"
      ];
    const [currentTextIndex, setCurrentTextIndex] = useState(0);
    const [fade, setFade] = useState(true);
    const [isLoading,  setIsLoading] = useState(true);


    useEffect(() => {
        const interval = setInterval(() => {
          setFade(false);  // Start fade-out
          setTimeout(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % textArray.length);
            setFade(true);  // Start fade-in after changing text
          }, 500); // Time for the fade-out to complete
        }, 3000);  // Change text every 3 seconds

       
    
        return () => clearInterval(interval);  // Clean up interval on component unmount
      }, []);
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
          }, 1000);
        
          return () => clearTimeout(timer);
    },[])
    
    return(
        <div className="">
            
            {
                isLoading ? <HomeSkeletonLoader/> :
                (
                    <div className="text-white bg-zinc-950 rounded flex flex-col justify-center">
                        <div
                            className="w-full pt-9 pb-4 sm:mb-3 sm:px-0 px-9 bg-gradient-to-b from-black to-zinc-900 rounded-t">
                            <div className="w-full sm:m-0 rounded-lg" style={{backgroundImage: `url(${'https://wallpapers.com/images/high/dark-space-wallpaper-eohy9aul0omw5ks3.webp'})`,backgroundRepeat: "no-repeat", backgroundSize:"cover"}}>
                                <div  
                                    className=" leading-tight h-72 flex justify-center backdrop-blur-sm rounded-xl"
                                    >
                                    <div className=" flex flex-col h-full mt-4 w-3/5 sm:w-full">
                                        <label className="text-5xl sm:px-5 sm:text-4xl font-extrabold mt-8 pl-15 w-3/4 ">
                                            Hola, Buddy's 
                                        </label>
                                        <label className=" text-xl sm:px-5 sm:text-lg my-7">
                                            {'<'}<span className="text-blue-500 font-bold">dev</span>{'>'} I am a
                                            <span className={`transition-text px-2 font-bold text-blue-400 ${fade ? 'fade-in' : 'fade-out'}`}>
                                                {textArray[currentTextIndex]}
                                            </span> {'</'}
                                            <span className="text-blue-500 font-bold">dev</span>{'>'}
                                        </label>
                                        <span className="hover:underline w-40 rounded bg-gradient-to-r from-black to-zinc-800 px-4 py-1 cursor-pointer">Explore my blogs</span>
                                    </div>
                                    <div className=" flex items-end">
                                        <img src={logo} className="w-52 sm:w-44"/>
                                    </div>
                                </div>
                                
                            </div>
                            <div className=" flex justify-around">
                                <label className="text-sm flex items-center text-gray-500">
                                    <span className="mx-2 text-base text-blue-500 font-semibold">5+</span> Completed projects
                                </label>
                                <label className="text-sm flex items-center text-gray-500">
                                    <span className="mx-2 text-base text-blue-500 font-bold">3+</span> Open Source projects
                                </label>
                            </div>
                        </div>
                        
                        <div className="flex flex-col ">
                            <label className=" text-2xl px-4 pt-4 font-bold ">
                                My Expertise
                            </label>
                            <div className="">
                                <ExpertiseCard />
                            </div>
                        </div>
                        
                        {/* <div className="flex flex-col justify-center items-center">
                            
                            <div className="animate-fadeinbouncedown mt-6 overflow-x-scroll no-scrollbar flex flex-col justify-center items-center">
                                <label className="text-2xl sm:text-xl border">Days I Code</label>
                                <div className="mt-5 ">
                                    <GitHubCalendar
                                        
                                        username="MVKarthikReddy"
                                        blockSize={12}
                                    />
                                    
                                </div>
                                
                            </div>
                            <div className="animate-fadeinbounceup flex flex-row md:justify-center h-72 sm:justify-center">
                                    <img
                                        
                                        align="center"
                                        alt="Karthik's Contribution Graph"
                                        src="https://github-readme-activity-graph.vercel.app/graph?username=MVKarthikReddy&custom_title=Contribution%Graph&bg_color=070707&color=dcdcdc&line=21abcd&point=555555&area=true&hide_border=true" 
                                    />
                            </div>
                        
                        </div> */}
                        
                    </div>
                )
            }
            
        </div>
    )
}

export default Home;