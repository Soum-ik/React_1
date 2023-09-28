import { FaOtter } from "react-icons/fa6";
import Achivment from "../Achivment";
import Customer from "../Customer";
import Decription from "../Decription";
import Home from "../Home";
import Navbar from "../Navbar";
import Service from "../Service";
import About from "../about";
import Community from "../communit_update";
import Unlock from "../unlock";
import Users from "../use";
import Footer from "../footer";

export default function HomePage() {
    return (
        <>
            <Navbar/>
            <Home/>
            <Service/>
            <About/>
            <Achivment/>
            <Unlock/>
            <Customer/>
            <Community/>
            <Users/>
            <Decription/>
            <Footer/>
        </>
    );
}