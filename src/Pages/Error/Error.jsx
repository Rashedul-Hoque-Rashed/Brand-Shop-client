import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";

const Error = () => {
    return (
        <div>
            <Navbar/>
            <div className="text-center py-20 md:py-28 lg:py-44">
            <h2 className="text-9xl font-extrabold font-serif">404!</h2>
            <p className="mt-8 text-xl font-bold font-sans">PAGE NOT FOUND</p>
            </div>
            <Footer/>
        </div>
    );
};

export default Error;