import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import Footer from "../../Components/Footer/Footer";
import LatestNews from "../../Components/LatestNews/LatestNews";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <WhyChooseUs/>
            <LatestNews/>
            <Footer/>
        </div>
    );
};

export default Home;