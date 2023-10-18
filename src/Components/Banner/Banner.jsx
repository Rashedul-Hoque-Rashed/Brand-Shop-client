import banner from "../../assets/Images/banner.jpg"
import Marquee from "react-fast-marquee";
import { GiStarShuriken } from 'react-icons/gi';

const Banner = () => {
    return (
        <div>
            <div style={{ backgroundImage: `url(${banner})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }} className="py-20 md:py-24 lg:py-36">
                <h4 className="text-5xl md:text-7xl font-extrabold text-center font-serif text-stone-500">Forever <br /> Cosmetic</h4>
                <div className="text-center mt-10">
                    <button className="px-4 md:px-8 py-3 uppercase text-xl font-semibold rounded-full text-white  bg-pink-500 font-sans ">online store</button>
                </div>
            </div>
            <div className="bg-base-300 py-7 text-xl font-sans font-medium">
                <Marquee pauseOnHover autoFill speed={50}>
                   <p>Buy three items get one free!</p> <GiStarShuriken className="ml-5 mr-5"/>
                   <p>Every Friday big sales! -40%</p> <GiStarShuriken className="ml-5 mr-5"/>
                   <p>24/7 support</p> <GiStarShuriken className="ml-5 mr-5"/>
                   <p>Free shipping</p> <GiStarShuriken className="ml-5 mr-5"/>
                   <p>Money back warranty</p>
                </Marquee>
            </div>
        </div>
    );
};

export default Banner;