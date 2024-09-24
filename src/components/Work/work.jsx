import ProjectCard from "../../contents/projectcard";

const Work = () => {
    return (
        <div className="text-white flex flex-col justify-center items-center">
            <div className="border-r-2 border-t-2 border-l-2 border-green-900 h-24 w-full">

            </div>
            <div className="w-4/6 mt-10 sm:w-5/6 md:w-5/6 animate-fadeinbouncedown">
                <label className="text-5xl sm:text-3xl md:text-4xl">My Works</label>
                <p className="text-lg mt-5 sm:text-md md:text-lg">Here are some projects that highlight my skills and capabilities. These projects demonstrate how I tackle real-world problems using development. Each project showcases my process and approach to problem-solving. Through these examples, you can see the impact of my work in addressing today's challenges. My projects reflect my ability to leverage development to find effective solutions.</p>
            </div>
            <div className="mt-10">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Work;