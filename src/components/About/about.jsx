import photo from '../../assets/profile4.jpg'
import TechStack from '../../contents/techstack'

const About = () => {
    return (
    <div className="flex flex-col justify-center items-center">
        <div className="border-r-2 border-t-2 border-l-2 border-blue-900 h-24 w-full">

        </div>
        <div className="text-white flex flex-row justify-center items-center mt-16 w-3/6 md:w-4/6 sm:text-3xl sm:w-4/6">
            <img src={photo} alt='Karthik' className='w-28 rounded-full animate-fadeinleft'/>  
            <label className='text-6xl ml-7 md:text-5xl sm:text-4xl animate-fadeinbouncedown'>
                Passionate FullStack Developer
            </label>
        </div>
        <div className='flex flex-col justify-center w-4/6 text-white leading-normal mt-10 text-lg sm:text-md md:text-md sm:w-5/6'>

            <p className='mb-5 animate-fadeinbounceright'>Name's Karthik, a passionate FullStack Web developer who is (currently) based in hyderabad. I am 23 years old, but have at least 2 year's of experience in building projects and developing.</p>

            <p className='mb-5 animate-fadeinbounceleft'>I hold a passion for developing things and believe that great things are often invisible. With an impactful thoughts and job, you can convey your story or the story of your business to a wider audience. I want to help you build an online brand and or strengthening your online brand.</p>

            <p className='mb-5 animate-fadeinbounceright'>I’m also a person with an entrepreneurial mindset. Due to my entrepreneurial mindset, I’m really flexible when it comes to achieving certain objectives. Think about developing top-notch web(apps) and website, but also there is competiton. When I start with a certain task, I do want to know what you’re exactly in need of.</p>

            <p className='mb-5 animate-fadeinbounceleft'>Reason why I spend time in learning more skills is because of the fact that it makes me a more valuable person(developer). I am a big believer in focus on a specific area and getting really good at it.</p>

        </div>
        <div className='w-full animate-fadeinbounceup'>
            <TechStack />
        </div>

    </div>
    )
}


export default About