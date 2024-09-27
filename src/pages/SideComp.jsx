import React from 'react'
import logo from '../assets/Snapchat-533310801.jpg'
import { CircularProgressBar } from "@tomickigrzegorz/react-circular-progress-bar";
import {FaTelegramPlane,FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import { FaDownload } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import ProgressBar from '../utils/ProgressBar/ProgressBar'
import TechStack from '../components/sidecomp/techstack';
import { useSidebar } from '../context/SideBarContext';


function SideComp() {

    const {about, toggleAbout} = useSidebar()
    
  return (
        <div className={`flex flex-col w-64 rounded-xl m-2 sm:m-0 h-screen ${!about ? 'md:hidden sm:hidden' : 'm-0 rounded-none'}`}>
            <div className={`bg-zinc-900 py-3 flex flex-col rounded-t-xl justify-center items-center text-white ${!about ? '' : 'sm:rounded-none md:rounded-none'}`}>
                <a
                    href="mailto:karthikmedagam@gmail.com"
                    className="rounded-lg bg-white"
                    data-twe-toggle="tooltip"
                    title="Hire me"
                    >
                    <div data-tooltip-target="tooltip-default" className='bg-blue-500 w-5 h-5 rounded-full absolute top-5 left-5 cursor-pointer animate-pulse'>

                    </div>
                </a>            
                <img className='my-2 w-24 h-24 rounded-full' src={logo} alt='Karthik' />
                <label>Karthik Reddy</label>
                <label className='my-2 text-center text-gray-400 text-sm px-3'>Full Stack Developer | Tech Enthusiast | Open Source Contributor</label>
            </div>
            <div className="text-sm overflow-y-scroll bg-zinc-950 ">
                <div className='mt-3 text-xs'>
                    <div className=' py-1 px-4 flex justify-between'>
                        <label className='font-bold text-gray-200'>Residence</label>
                        <label className='text-gray-500'>India</label>
                    </div>
                    <div className=' px-4 flex justify-between'>
                        <label className='font-bold text-gray-200'>City</label>
                        <label className='text-gray-500'>Hyderabad</label>
                    </div>
                    <div className=' py-1 px-4 flex justify-between'>
                        <label className='font-bold text-gray-200'>Age</label>
                        <label className='text-gray-500'>23</label>
                    </div>
                </div>
                <div className='bg-white mx-4 my-5 border'></div>
                <div className='text-white'>
                    <label className='px-4'>Languages</label>
                    <div className='flex flex-row px-4 py-2 justify-around'>
                        <div className='felx flex-col align-center text-center'>
                            <CircularProgressBar
                                className=" text-white w-36"
                                colorCircle="#000"
                                colorSlice="#438ed9"
                                percent={100}
                                round
                                stroke="4"
                                fontColor="#438ed9"
                                fontWeight= "50"
                                size="80"
                                strokeBottom={3}
                            />
                            <label className='text-gray-500'>Telugu</label>

                        </div>
                        <div className='felx flex-col align-center text-center'>
                            <CircularProgressBar
                                    className=" text-white w-36"
                                    colorCircle="#000"
                                    colorSlice="#438ed9"
                                    percent={99}
                                    round
                                    stroke="4"
                                    fontColor="#438ed9"
                                    fontWeight= "50"
                                    size="80"
                                    strokeBottom={2}
                                />
                            <label className='text-gray-500'>English</label>

                        </div>
                    </div>
                    <div className='bg-white mx-4 my-5 border'></div>
                    <div className=''>
                        <label className='px-3'>Expertise</label>
                        <div className="text-xs px-4 my-2">
                            <label htmlFor="" className='text-gray-500'>
                                MERN Stack Developer
                            </label>
                            <ProgressBar value={85} max={100} />
                        </div>
                        <div className="text-xs px-4 my-2">
                            <label htmlFor="" className='text-gray-500'>
                                React Developer
                            </label>
                            <ProgressBar value={90} max={100} />
                        </div>
                        <div className="text-xs px-4 my-2">
                            <label htmlFor="" className='text-gray-500'>
                                Backend Developer
                            </label>
                            <ProgressBar value={70} max={100} />
                        </div>
                        <div className="text-xs px-4 my-2">
                            <label htmlFor="" className='text-gray-500'>
                                Blogging
                            </label>
                            <ProgressBar value={50} max={100} />
                        </div>
                    </div>

                    <div className='bg-white mx-4 my-5 border'></div>
                    <div>
                        <label className='px-4'>Tech & Tools</label>
                        <div className=''>
                            <TechStack/>
                        </div>
                    </div>
                    <div className='bg-white mx-4 my-5 border'></div>
                    <div className='text-xs'>
                        <div className='py-2 px-4 flex justify-between text-center'>
                            <label className='font-semibold text-gray-200 text-center'>Email</label>
                            <a href='mailto:karthikmedagam@gmail.com'><span  className='underline cursor-pointer text-gray-500'>karthikmedagam@gmail.com</span></a>
                        </div>
                        <div className='py-2 px-4 flex justify-between'>
                            <label className='font-bold text-gray-200'>Phone</label>
                            <label className='text-gray-500'>+91 9182305651</label>
                        </div>
                    </div>
                </div>
                <div className='bg-white mx-4 my-5 border'></div>
                <div className="text-center flex flex-row justify-center items-center mb-3">
                    
                    <label className='flex flex-row justify-center items-center px-2 py-2 rounded border w-4/6 cursor-pointer'>
                        <a 
                            className=' text-gray-500 px-2 font-semibold' 
                            href="https://docs.google.com/uc?export=download&id=1vpfVe4hmsuwTacMg_vSbgIxfZWSCUAhA" > 
                                Download Resume 
                        </a>
                        <span><FaDownload className='text-gray-500'/></span>
                    </label>
                </div>
    
            </div>
            <div className={`bg-zinc-900 rounded-b-xl mb-4 ${!about ? '' : 'mb-0 sm:rounded-none md:rounded-none'}`}>
                <div className='text-white px-6 py-1 text-center h-9 text-2xl flex flex-row justify-between items-center'>
                    <span className=' w-6 cursor-pointer hover:text-gray-500 transition duration-500 hover:scale-x-110'> <a href='https://github.com/MVKarthikReddy/' target='_blank'><AiFillGithub className='hover:animation-pulse'/></a></span>
                    <span className=' w-6 cursor-pointer hover:text-blue-500 transition duration-500 hover:scale-x-110'><a href='https://www.linkedin.com/in/karthik-reddy-medagam/' target='_blank'><FaLinkedinIn /></a></span>
                    <span className=' w-6 cursor-pointer hover:text-blue-400 transition duration-500 hover:scale-x-110'><a href='https://t.me/Karthik_Reddy_Medagam' target='_blank'><FaTelegramPlane /></a></span>
                    <span className=' w-6 cursor-pointer hover:text-red-500 transition duration-500 hover:scale-x-110'><a href='https://www.youtube.com/@dynamic-dev-on' target='_blank'><FaYoutube /></a></span>
                </div>
            </div>

        </div>
  )
}

export default SideComp