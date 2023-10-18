import Banner from "../../Components/Banner/Banner";
import Brands from "../../Components/Brands/Brands";
import LatestNews from "../../Components/LatestNews/LatestNews";
import Services from "../../Components/Services/Services";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Banner/>
            <Brands/>
            <WhyChooseUs/>
            <LatestNews/>
            <Services/>
        </div>
    );
};

export default Home;