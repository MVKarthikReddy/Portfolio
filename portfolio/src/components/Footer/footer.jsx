import { AiOutlineCopyright } from "react-icons/ai";


const Footer = () => {
    return (
    <div className="flex flex-col items-center justify-center">
        <div className="h-px w-5/6 bg-white mt-10">hai</div>
        <div className="text-white h-12 flex flex-row justify-center items-center">
            
            <label className="hover:underline">
                CopyRight &copy;2024 - <a href="http://localhost:5173/" className="cursor-pointer">Karthik</a>
            </label>
            
        </div>
    </div>
    )
}

export default Footer