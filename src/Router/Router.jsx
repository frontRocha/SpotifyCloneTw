import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.jsx";
import Header from "../Components/Layout/Header/header";
import Home from "../Pages/Home/Home";

export default function Router() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}