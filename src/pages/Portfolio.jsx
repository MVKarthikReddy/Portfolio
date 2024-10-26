import ProjectCard from "../components/portfolio/projectcard";

const Portfolio = () => {
    return (
        <div className="text-white pt-7 rounded-lg bg-zinc-950 flex flex-col justify-center items-center">
            
            <div className="mx-7 ">
                <label className="text-4xl sm:text-3xl md:text-4xl">My Works</label>
                <p className="text-md mt-5 sm:text-md md:text-lg text-gray-400">Here are some projects that highlight my skills and capabilities. These projects demonstrate how I tackle real-world problems using development. Each project showcases my process and approach to problem-solving. Through these examples, you can see the impact of my work in addressing today's challenges. My projects reflect my ability to leverage development to find effective solutions.</p>
            </div>
            <div className="mt-10">
                <ProjectCard />
            </div>
        </div>
    )
}

export default Portfolio;