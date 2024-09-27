import { FaListAlt } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { BsFillProjectorFill } from "react-icons/bs";
import { FaHandshake } from "react-icons/fa";
import { PiGraduationCapFill } from "react-icons/pi";
import { useSidebar } from '../context/SideBarContext';
import { IoIosPerson } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import HiddenNavbar from "../components/Header/hiddenNavbar";




const Navbar = () => {
    const { isOpen, toggleSidebar, about, toggleAbout } = useSidebar()
    const navigate = useNavigate()

  return (
    <>
        {!isOpen && <div className=' m-2 rounded-xl flex flex-col md:hidden sm:hidden justify-between h-screen text-white'>
                <div className='w-16 h-16 rounded-t-xl flex justify-center items-center bg-zinc-800'>
                    <FaListAlt className='animate-pulse text-4xl cursor-pointer' onClick={() => {toggleSidebar(!isOpen)}}/>
                </div>
                <div className=" m-auto [writing-mode:vertical-lr] rounded-b-xl bg-zinc-900 w-16 h-full mb-4 flex items-center justify-center">
                    <label htmlFor="" className='text-gray-600 text-3xl font-black'>
                        NavBar
                    </label>
                </div>
            </div>
        }
        {
            isOpen && <HiddenNavbar />
      
        }

        
    </>
  )
}

export default Navbar
