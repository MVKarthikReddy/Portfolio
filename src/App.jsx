import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";


import SideComp from "./pages/SideComp";
import Home from "./pages/Home";
import Background from "./pages/Background";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Navbar from "./pages/Navbar";
import Footer from "./components/Footer/footer";
import { useSidebar } from "./context/SideBarContext";
import Header from "./components/Header/header";



function App() {

  const {isOpen, toggleSidebar, about, toggleAbout} = useSidebar()

  return(
    <div className="fixed flex flex-row justify-between w-full">
      <div className={`lg:hidden xl:hidden`}>
        <Header />
      </div>
      <div className={`sm:fixed sm:top-0 md:top-0 sm:left-0 md:left-0 h-full md:w-0 text-white duration-1000 sm:transition-transform md:transition-transform sm:transform sm:z-40 md:transform md:z-40 ${
          about ? 'sm:-translate-x-0 md:-translate-x-0' : 'sm:-translate-x-full md:-translate-x-full'
        }`}>
          <SideComp />
      </div>
      <div className={`h-screen w-full my-3  sm:w-full sm:mx-3 sm:mt-16 md:mt-16 md:mx-3 overflow-y-scroll ${about? 'filter blur-sm cursor-pointer':''} ${(isOpen)? 'filter blur-sm cursor-pointer':''}`} onClick={() => {
        toggleSidebar(false)
        toggleAbout(false)
        }}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="background" element={<Background />} />
                <Route path="contact" element={<Contact />} />
                <Route path="portfolio" element={<Portfolio />} />
            </Routes>
            <Footer />
      </div>
      <div className={`w-20 sm:w-0 md:w-0`}>
          <Navbar />
      </div>
    </div>
  
  )
  
}

export default App
