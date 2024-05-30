import logo from '../../assets/logo.svg'
import {FaTelegramPlane,FaLinkedinIn} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
const Header = () => {
    return(
    <div className="h-24 bg-black sticky flex flex-row justify-around sm:flex-col ">
        <div className="flex flex-col justify-center sm:items-center">
            <img src={logo} alt='Karthik' className="w-24"/>
        </div>
        <div className='rounded-4 flex flex-col justify-center sm:items-center'>
            <div className='rounded-4 text-white text-xl font-semibold sm:text-lg'>
                <span className='rounded-3xl py-1 px-4 mx-1 cursor-pointer items-center hover:bg-gray-800 sm:px-2'>Home</span>
                <span className='rounded-3xl py-1 px-4 mx-1 cursor-pointer hover:bg-gray-800 sm:px-2'>About</span>
                <span className='rounded-3xl py-1 px-4 mx-1 cursor-pointer hover:bg-gray-800 sm:px-2'>Work</span>
                <span className='rounded-3xl py-1 px-4 mx-1 cursor-pointer hover:bg-gray-800 sm:px-2'>Resume</span>
                <span className='rounded-3xl py-1 px-4 mx-1 cursor-pointer hover:bg-gray-800 sm:px-2'>Contact</span>
            </div>
        </div>
        <div className='rounded flex flex-col justify-center md:hidden sm:hidden'>
            <div className='text-white text-2xl flex flex-row justify-center'>
                <span className='mx-3 p-1 cursor-pointer hover:text-gray-500'><AiFillGithub /></span>
                <span className='mx-3 p-1 cursor-pointer hover:text-gray-500'><FaLinkedinIn /></span>
                <span className='mx-3 p-1 cursor-pointer hover:text-gray-500'><FaTelegramPlane /></span>
            </div>
        </div>
        
    </div>
    )
}

export default Header;