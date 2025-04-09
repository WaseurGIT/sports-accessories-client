import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Header = () => {
    return (
        <div className="max-w-[1350px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>            
        </div>
    );
};

export default Header;