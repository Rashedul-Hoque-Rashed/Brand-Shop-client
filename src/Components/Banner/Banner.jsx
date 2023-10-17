import banner from "../../assets/Images/banner.jpg"
import Marquee from "react-fast-marquee";

const Banner = () => {
    return (
        <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-20 md:py-24 lg:py-36">
            <h4 className="text-5xl md:text-7xl font-extrabold text-center font-serif text-stone-700">Forever <br /> Cosmetic</h4>
           <div className="text-center mt-10">
           <button className="px-4 md:px-8 py-3 uppercase text-xl font-semibold rounded-full text-white  bg-pink-500 font-sans ">online store</button>
           </div>
        </div>
    );
};

export default Banner;