
const resumeLink = `https://raw.githubusercontent.com/MVKarthikReddy/Resume/main/Resume.pdf`

const Resume = () => {

   
    return (
        <div className="flex flex-col justify-center items-center text-white">
            <div className="border-r-2 border-t-2 border-l-2 border-red-900 h-24 w-full">

            </div>
            <a href="https://docs.google.com/uc?export=download&id=1vpfVe4hmsuwTacMg_vSbgIxfZWSCUAhA" className="mt-10 sm:mt-14 transition duration-700 hover:scale-x-110 hover:scale-y-110"> <label className="px-3 py-2 bg-zinc-900 hover:bg-gray-800 rounded-lg border cursor-pointer">Download Resume</label> </a>
            <div className="mt-10">
                
                <iframe src="https://drive.google.com/file/d/1vpfVe4hmsuwTacMg_vSbgIxfZWSCUAhA/preview" width="640" height="720" allow="autoplay"></iframe>
            </div>
            
        </div>
    )
}

export default Resume