import { Outlet } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header"
import Abas from "../components/Abas";

const PageLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
            {/* <Abas /> */}
        </>
    );
}

export default PageLayout;