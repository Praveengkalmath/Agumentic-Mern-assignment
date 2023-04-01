import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./About";
import Footer from "./Footer";
import Home from "./home";
import Package from "./package";

const HomePortal = () => {
    return ( 
        <div className="homePortal">
            <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/about" element={<About/>}/>
                <Route path="/package" element={<Package/>}/>
                
            </Routes>
            <Footer/>
            </BrowserRouter>
        </div>
     );
}
 
export default HomePortal;