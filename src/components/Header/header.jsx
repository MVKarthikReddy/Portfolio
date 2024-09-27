import { IoIosPerson } from "react-icons/io";
import { FaListAlt } from "react-icons/fa";
import { useSidebar } from "../../context/SideBarContext";


const Header = () => {
    const {isOpen, toggleSidebar,about, toggleAbout} = useSidebar()
    return(
    <div className="h-16 w-full flex flex-row justify-center items-center bg-gradient-to-b from-zinc-900 to-black fixed">
        <div className="w-5/6 py-3 rounded-lg backdrop-blur flex justify-between">
            <label htmlFor="" className="px-10">
                <IoIosPerson 
                    className='animate-pulse text-blue-500 text-4xl cursor-pointer' 
                    onClick={() => {toggleAbout(!about)}}
                />
            </label>
            <label htmlFor="" className="px-10">
                <FaListAlt 
                    className='animate-pulse text-white text-4xl cursor-pointer' 
                    onClick={() => {toggleSidebar(!isOpen)}}
                    />
            </label>
        </div>
    </div>
    )
}

export default Header;