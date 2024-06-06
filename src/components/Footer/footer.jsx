import { AiOutlineCopyright } from "react-icons/ai";
import {FaTelegramPlane,FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'

const Footer = () => {
    return (
    <div className="flex flex-col items-center justify-center">
        <div className="h-px w-5/6 bg-white mt-10"></div>
        <div className="flex flex-row items-center justify-between w-4/6 md:flex-col sm:flex-col">
            <div className="text-white h-12 flex flex-row justify-center items-center">
                
                <label className="hover:underline">
                    CopyRight &copy;2024 - <a href="http://localhost:5173/" className="cursor-pointer">Karthik</a>
                </label>
                
            </div>
            <div className='rounded flex flex-col justify-center '>
                <div className='text-white text-2xl flex flex-row justify-center items-center'>
                    <span className='mx-3 p-2 w-7 cursor-pointer hover:text-gray-500 transition duration-500 hover:scale-x-110'> <a href='https://github.com/MVKarthikReddy/' target='_blank'><AiFillGithub className='hover:animation-pulse'/></a></span>
                    <span className='mx-3 p-2 cursor-pointer w-7 hover:text-gray-500 transition duration-500 hover:scale-x-110'><a href='https://www.linkedin.com/in/karthik-reddy-medagam/' target='_blank'><FaLinkedinIn /></a></span>
                    <span className='mx-3 p-2 cursor-pointer w-7 hover:text-gray-500 transition duration-500 hover:scale-x-110'><a href='https://t.me/Karthik_Reddy_Medagam' target='_blank'><FaTelegramPlane /></a></span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Footer