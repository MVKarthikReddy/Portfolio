import logo from '../../assets/logo.svg'
import portfolio from '../../assets/profile4.jpg'

import {FaTelegramPlane,FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import {Link } from 'react-router-dom'

const Header = () => {
    return(
    <div className="h-24 w-full backdrop-blur flex flex-row justify-between sm:flex-col sm:justify-around fixed sm:h-32">
        <div className="flex flex-row justify-center items-center sm:items-center ml-5 sm:ml-0">
            <span className="ml-4 inline-block animate-ping rounded-full bg-green-700 text-white text-xs">
                <svg className="w-2 h-2 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                </svg>
            </span>
            

            <img src={portfolio} alt='Karthik' className='rounded-full w-8 h-8 ml-3 mr-3'/>
            <img src={logo} alt='Karthik' className="w-24"/>
            
        </div>
        <div className='rounded-4 flex flex-col justify-center sm:items-center'>
        
            <div className='rounded-2xl pt-2.5 pb-2.5 md:mr-10 sm:m-0 bg-zinc-900 text-white text-lg font-semibold sm:text-lg'>
                <Link to="/">
                    <span className='rounded-2xl py-2 px-4 mx-1 cursor-pointer transition duration-700 hover:bg-black sm:px-2'>
                        Home
                    </span>
                </Link>
                <Link to="/about">
                    <span className='rounded-2xl py-2 px-4 mx-1 cursor-pointer transition duration-700 hover:bg-black sm:px-2'>
                        About
                    </span>
                </Link>
                <Link to="/work">
                    <span className='rounded-2xl py-2 px-4 mx-1 cursor-pointer transition duration-700 hover:bg-black sm:px-2'>
                        Work
                    </span>
                </Link>
                <Link to="/resume">
                    <span className='rounded-2xl py-2 px-4 mx-1 cursor-pointer transition duration-700 hover:bg-black sm:px-2'>
                        Resume
                    </span>
                </Link>
                <Link to="/contact">
                    <span className='rounded-2xl py-2 px-4 mx-1 cursor-pointer hover:bg-black sm:px-2'>
                        Contact
                    </span>
                </Link>
            </div>
        </div>
        <div className='rounded flex flex-col justify-center md:hidden sm:hidden mr-5'>
            <div className='text-white text-2xl flex flex-row justify-center items-center'>
                <span className='mx-3 p-2 w-7 cursor-pointer hover:text-gray-500 transition duration-500 hover:scale-x-110'> <a href='https://github.com/MVKarthikReddy/' target='_blank'><AiFillGithub className='hover:animation-pulse'/></a></span>
                <span className='mx-3 p-2 cursor-pointer w-7 hover:text-gray-500 transition duration-500 hover:scale-x-110'><a href='https://www.linkedin.com/in/karthik-reddy-medagam/' target='_blank'><FaLinkedinIn /></a></span>
                <span className='mx-3 p-2 cursor-pointer w-7 hover:text-gray-500 transition duration-500 hover:scale-x-110'><a href='https://t.me/Karthik_Reddy_Medagam' target='_blank'><FaTelegramPlane /></a></span>
            </div>
        </div>
        
    </div>
    )
}

export default Header;