import {FaTelegramPlane,FaLinkedinIn} from 'react-icons/fa'
import { FaYoutube } from "react-icons/fa";
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
    <div className="flex flex-col mb-3 items-center bg-zinc-900 text-sm justify-center rounded-b-xl mb-5">
        <div className="h-px w-5/6 bg-white"></div>
        <div className="flex flex-row items-center justify-between w-4/6 md:flex-col sm:flex-col">
            <div className="text-white h-10 flex flex-row justify-center items-center">
                
                <label className="hover:underline">
                    CopyRight &copy;2024 - <a href="https://karthikreddy.vercel.app/" className="cursor-pointer">Karthik</a>
                </label>
                
            </div>
            <div className='text-white text-center w-44 h-10 text-xl flex flex-row justify-between items-center'>
                <span className=' w-6 cursor-pointer hover:text-gray-500 transition duration-500 hover:scale-x-110'> <a href='https://github.com/MVKarthikReddy/' target='_blank'><AiFillGithub className='hover:animation-pulse'/></a></span>
                <span className=' w-6 cursor-pointer hover:text-blue-500 transition duration-500 hover:scale-x-110'><a href='https://www.linkedin.com/in/karthik-reddy-medagam/' target='_blank'><FaLinkedinIn /></a></span>
                <span className=' w-6 cursor-pointer hover:text-blue-400 transition duration-500 hover:scale-x-110'><a href='https://t.me/Karthik_Reddy_Medagam' target='_blank'><FaTelegramPlane /></a></span>
                <span className=' w-6 cursor-pointer hover:text-red-500 transition duration-500 hover:scale-x-110'><a href='https://www.youtube.com/@dynamic-dev-on' target='_blank'><FaYoutube /></a></span>
            </div>
        </div>
    </div>
    )
}

export default Footer