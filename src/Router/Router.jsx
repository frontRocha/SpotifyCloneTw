import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from '../Components/Layout/Footer/Footer'
import Header from "../Components/Layout/Header/Header";
import Home from "../Pages/Home/Home"


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