import React from 'react'
import { useSidebar } from '../../context/SideBarContext'
import { FaListAlt } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BsFillProjectorFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";



const HiddenNavbar = () => {

    const { isOpen, toggleSidebar } = useSidebar()
    const navigate = useNavigate()

  return (
    <div className={`fixed top-0 right-0 h-full w-64 text-white duration-1000 transition-transform transform z-40 ${
          isOpen ? '-translate-x-0' : '-translate-x-full'
        } lg:block lg:static`}>
                <div className='h-10 absolute right-8 top-8'>
                    <label></label><GiCrossMark className='text-xl text-blue-500 cursor-pointer' onClick={() => toggleSidebar(!isOpen)}/>
                </div>
                <div className="h-full mb-4 rounded-xl flex items-center justify-center bg-zinc-950">
                    <div className="flex flex-col justify-center">
                        <label 
                            className={`font-bold flex items-center w-48 my-1  cursor-pointer  rounded-lg py-1 ${window.location.pathname=='/' ? 'bg-blue-500 text-black':'hover:bg-zinc-800'}`} 
                            onClick={() => {
                                navigate('/')
                                toggleSidebar(!isOpen)
                                }}
                            >
                            <ImHome className='mx-3'/><span >Home</span>
                        </label>
                        <label 
                            className={`font-bold flex items-center w-48 my-1  cursor-pointer  rounded-lg py-1 ${window.location.pathname=='/background' ? 'bg-blue-500 text-black':'hover:bg-zinc-800'}`} 
                            onClick={() => {
                                navigate('/background')
                                toggleSidebar(!isOpen)
                                }}
                            >
                            <PiGraduationCapFill className='mx-3'/><span >Background</span>
                        </label>
                        <label 
                            className={`font-bold flex items-center w-48 my-1  cursor-pointer  rounded-lg py-1 ${window.location.pathname=='/portfolio' ? 'bg-blue-500 text-black':'hover:bg-zinc-800'}`} 
                            onClick={() => {
                                navigate('/portfolio')
                                toggleSidebar(!isOpen)
                                }}
                            >
                            <BsFillProjectorFill className='mx-3'/><span >Portfolio</span>
                        </label>
                        <label 
                            className={`font-bold flex items-center w-48 my-1  cursor-pointer  rounded-lg py-1 ${window.location.pathname=='/contact' ? 'bg-blue-500 text-black':'hover:bg-zinc-800'}`} 
                            onClick={() => {
                                navigate('/contact')
                                toggleSidebar(!isOpen)
                                }}
                            >
                            <FaHandshake className='mx-3'/><span >Contact</span>
                        </label>
                       
                    </div>
                </div>
            </div>
  )
}

export default HiddenNavbar
