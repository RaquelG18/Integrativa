import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutPage from "./components/About";
import Contact from "./components/Contact"
import Home from "./components/Home"

export default function Rutas(){
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
    );
}