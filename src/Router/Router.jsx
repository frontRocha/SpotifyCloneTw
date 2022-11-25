import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "../Components/Layout/Footer/Footer.jsx";
import Header from "../Components/Layout/Header/Header.jsx";
import Teste from "../Pages/teste/Teste.jsx";

export default function Router() {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Teste />}/>
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}