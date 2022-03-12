import "./style.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from "./Components/pages/Home";
import { About } from "./Components/pages/About";
import Navbar from "./Components/Navbar";
import { Pricing } from "./Components/pages/Pricing";
import DarkModeToggle from './Components/Theme/DarkModeToggle';

const App = () => {
  return (
    <div>
    <Router>
      <Navbar/>
      <div className="pages">
     <Routes>
     <Route exact path="/" element={<Home />} />
     <Route path="/about" element={<About />} />
     <Route path="/pricing" element={<Pricing />} /> 
      </Routes>
      </div>
      <DarkModeToggle />
    </Router>
    </div>
  );
}



export default App;


