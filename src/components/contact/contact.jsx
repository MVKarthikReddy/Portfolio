import shakehand from '../../assets/contact.png'
import React,{useState, useRef} from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css';
import emailjs from "@emailjs/browser";
import { Link } from 'react-router-dom';


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
        <div>
            <div className="border-r-2 border-t-2 border-l-2 border-zinc-500 h-24 w-full">

            </div>
            <ToastContainer/>
            
            <div className='flex flex-row justify-around items-center sm:flex-col'>
                <div className='w-2/6 sm:w-4/6 animate-fadeinbounceleft'>
                    <img src={shakehand} alt='shakehand' className='w-full bg-opacity-25 mt-16 md:mt-12 '/>
                </div>
                <div className='w-2/6 mt-20 sm:mt-10 sm:w-full sm:flex sm:flex-col animate-fadeinbounceright'>
                    <div className='w-full text-white text-center'>
                      Please contact me directly at <br></br><Link to={`mailto:${'karthikmedagam@gmail.com'}`} ><span className='underline cursor-pointer'>karthikmedagam@gmail.com</span></Link> <br></br> or through this form.
                    </div>
                    <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col justify-around items-center sm:w-full'>
                        
                        <input type="text" name="from_name" className="w-72 border border-red-900 mt-7 px-2 py-2"  placeholder="Name" onChange={handleChange}/>
                        <input type="email" name="reply_to" className="w-72 mt-10 px-2 py-2" placeholder="Email" onChange={handleChange} />
                        <textarea name="message" className="w-72 p-2 mt-10" placeholder="Message" onChange={handleChange} />
                        <span className='not-done text-white mt-5' >{notDone && "Please, fill all the input fields"}</span>
                        <button type="submit" className="bg-white mt-5 px-5 py-2 rounded-lg items-center transition duration-500 hover:scale-110" disabled={done}>Send</button>
                        <span className='mt-10 text-white'>{done && "Thanks for contacting me and be sure i have recieved your mail. If you are testing this functionality then i am confirming this thing working perfectly fine. If you have any serious query then i will reply. Also if you need me, you can conatct me on Linkedin."}</span>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact