
import './App.css';
import {Route,Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Pages/Home";
import Contact from "./components/Pages/Contact";
import AboutUs from "./components/Pages/AboutUs";


function App() {
  return (
        <div className={"App"}>
            <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/contact' element={<Contact/>}/>
                <Route path='/about' element={<AboutUs/>}/>
            </Routes>
        </div>
  );
}

export default App;
