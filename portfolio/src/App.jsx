import {
  BrowserRouter as Router,
  Route,
  Routes,
  // Navigate
} from "react-router-dom";

// import { useState } from "react";

import Header from './components/Header/header'
import Home from './components/Home/home'
import Footer from "./components/Footer/footer";
import About from "./components/About/about";
import Resume from "./components/Resume/resume";
import Work from "./components/Work/work";


function App() {

  // const [load, upadateLoad] = useState(true);

  return (
    <Router>
      <Header />
      <div className="App" >
        
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/work" element={<Work />} />
        </Routes>

        
      </div>
      <Footer />
    </Router>
  )
}

export default App
