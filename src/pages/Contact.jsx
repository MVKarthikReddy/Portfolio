import {useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "@emailjs/browser";
import {FaTelegramPlane,FaLinkedinIn, FaYoutube} from 'react-icons/fa'
import {AiFillGithub} from 'react-icons/ai'
import { MdEmail } from "react-icons/md";


const Contact = () => {

    const form = useRef();
    const [done, setDone] = useState(false)
    const [notDone, setNotDone] = useState(false)
    const [formData, setFormData] = useState({});

    const Notify = () => {
      toast("Message Sent Successfully.")
    }

    const Notify1 = () => {
      toast("Something went wrong")
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name] : e.target.value})
        setDone(false)
        setNotDone(false)
    }
    const sendEmail = (e) => {
        e.preventDefault();
        
        if(!formData.from_name || !formData.reply_to ||!formData.message){
          setNotDone(true)
        } else {
          
          //  Please use your own credentials from emailjs or i will recive your email
          
        emailjs
          .sendForm(
            "service_s0qvgws",
            "template_otbhox6",
            form.current,
            "c-0kdgOVoOZIJTPVa"
          )
          .then(
            (result) => {
              console.log(result.text);
              Notify()
              setFormData({...formData, [e.target.name] : ""})
              // setDone(true);
            },
            (error) => {
              console.log(error.text);
              Notify1()
            }
          );
        }
        };

    return (
        <div className='bg-zinc-950 rounded-lg'>
            <ToastContainer/>            
            <div className='flex flex-col justify-around items-center'>
                <div className='w-full my-8 flex flex-col '>
                    <label className='text-white font-bold text-2xl px-4'>Contact Information</label>
                    <div className='flex flex-row sm:flex-col justify-around items-center w-full '>
                        <div className='my-5 w-3/6 sm:w-5/6 mx-4 rounded-lg p-5 bg-zinc-900 '>
                            <div className=' py-1 px-4 flex justify-between'>
                                <label className='font-bold text-gray-200'>Country</label>
                                <label className='text-gray-500'>India</label>
                            </div>
                            <div className=' px-4 my-2 flex justify-between'>
                                <label className='font-bold text-gray-200'>City</label>
                                <label className='text-gray-500'>Hyderabad</label>
                            </div>
                            <div className=' py-1 px-4 flex justify-between'>
                                <label className='font-bold text-gray-200'>Company</label>
                                <label className='text-gray-500'></label>
                            </div>
                        </div>
                        <div className='my-5 w-3/6 sm:w-5/6 mx-4 rounded-lg p-5 bg-zinc-900'>
                            <div className=' py-1 px-4 flex justify-between'>
                                <label className='font-bold text-gray-200'>Email</label>
                                <label className='text-gray-500'>karthikmedagam@gmail.com</label>
                            </div>
                            <div className=' px-4 my-2 flex justify-between'>
                                <label className='font-bold text-gray-200'>Phone</label>
                                <label className='text-gray-500'>+91 9182305651</label>
                            </div>
                            <div className=' py-1 px-4 flex justify-between'>
                                <label className='font-bold text-gray-200'>LinkedIn</label>
                                <label className='text-gray-500'>karthik-reddy-medagam</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-5/6 rounded-lg py-2 bg-zinc-800 flex items-center justify-center'>
                    <div className='text-white w-3/6 sm:w-5/6 px-6 py-1 text-center h-9 text-2xl flex flex-row justify-between items-center'>
                        <span className=' w-6 cursor-pointer hover:text-gray-500 transition duration-500 hover:scale-x-110'> <a href='https://github.com/MVKarthikReddy/' target='_blank'><AiFillGithub className='hover:animation-pulse'/></a></span>
                        <span className=' w-6 cursor-pointer hover:text-blue-500 transition duration-500 hover:scale-x-110'><a href='https://www.linkedin.com/in/karthik-reddy-medagam/' target='_blank'><FaLinkedinIn /></a></span>
                        <span className=' w-6 cursor-pointer hover:text-blue-400 transition duration-500 hover:scale-x-110'><a href='https://t.me/Karthik_Reddy_Medagam' target='_blank'><FaTelegramPlane /></a></span>
                        <span className=' w-6 cursor-pointer hover:text-red-500 transition duration-500 hover:scale-x-110'><a href='https://www.youtube.com/@dynamic-dev-on' target='_blank'><FaYoutube /></a></span>
                        <span className=' w-6 cursor-pointer hover:text-green-500 transition duration-500 hover:scale-x-110'><a href='mailto:karthikmedagam@gmail.com' target='_blank'><MdEmail /></a></span>
                    </div>
                </div>
                <div className='w-full mt-10 flex flex-col items-center justify-center'>
                    <label className='text-white font-bold text-xl'>Get In Touch</label>
                    <form ref={form} onSubmit={sendEmail} className='w-5/6 my-5 bg-zinc-800 rounded-lg mx-10 flex flex-col justify-around items-center sm:w-full'>
                        <input type="text" name="from_name" className="w-5/6 bg-zinc-900 text-gray-400 rounded mt-7 px-2 py-2"  placeholder="Name" onChange={handleChange}/>
                        <input type="email" name="reply_to" className="w-5/6 bg-zinc-900 text-gray-400 rounded mt-5 px-2 py-2" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="w-5/6 bg-zinc-900 text-gray-400 rounded p-2 mt-5" placeholder="Message" onChange={handleChange} />
                        <span className='not-done text-white mt-5' >{notDone && "Please, fill all the input fields"}</span>
                        <button type="submit" className="bg-white font-bold my-5 px-5 py-2 rounded-lg items-center transition duration-500 hover:scale-110" disabled={done}>Send</button>
                        {done && <span className='mt-10 text-white'> "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."</span>}
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact