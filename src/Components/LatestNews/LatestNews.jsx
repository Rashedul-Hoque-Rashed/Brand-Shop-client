import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const LatestNews = () => {

    const newses = [
        {
            id: 1,
            news_title: "Makeup Trends for Fall 2023",
            news_img: "https://i.ibb.co/zFPXnQj/image-720x480.png",
            description: "Get ready for fall with warm, earthy makeup trends. Embrace deep reds, burnt oranges, and dark lip shades. Elevate your look with dramatic eyeshadows and glitter accents. Stay ahead of the curve and capture the season's charm and warmth.",
            date: "October 10, 2023"
        },
        {
            id: 2,
            news_title: "New Skincare Line Launches",
            news_img: "https://i.ibb.co/N7yG0n0/natural.png",
            description: "Introducing a revolutionary skincare line with advanced anti-aging technology. Rejuvenate your skin with our powerful serums and creams. Achieve radiant, youthful skin with confidence. Join us in this exciting journey towards a new era of beauty and self-care.",
            date: "September 25, 2023"
        },
        {
            id: 3,
            news_title: "Celebrity Beauty Secrets Revealed",
            type: "Cosmetic & Fusion",
            news_img: "https://i.ibb.co/yRcBmKC/beauty.png",
            description: "Discover the beauty secrets of your favorite celebrities. Get insights into their skincare regimens and makeup techniques. Embrace their tips to look and feel like a star. Elevate your beauty game with their trusted secrets.",
            date: "August 12, 2023"
        }
    ];


    return (
        <div className="container mx-auto px-2 md:px-6 my-12 md:my-28">
            <h4 className="text-2xl md:text-4xl text-center font-bold font-serif text-stone-500 mb-10">OUR LATEST NEWS</h4>
            <div className="rounded-lg p-4 mt-10 md:w-2/3 lg:w-1/2 mx-auto">


                <Swiper
                className="shadow-xl rounded-lg"
                    modules={[Navigation]}
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        768: {
                            slidesPerView: 1,
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 1,
                            spaceBetween: 40,
                        },
                        1440: {
                            slidesPerView: 1,
                            spaceBetween: 50,
                        }
                    }}
                    navigation={{
                        nextEl: ".next",
                        prevEl: ".prev"
                    }}
                >
                    {newses.map(news => (
                        <SwiperSlide key={news.id}>
                            <div>
                                <img className='w-full mx-auto rounded-t-lg' src={news.news_img} alt="" />
                                <h3 className='text-2xl font-bold text-center mt-8'>{news.news_title}</h3>
                                <p className='text-center text-sm mt-2 font-sans font-medium'>{news.date}</p>
                                <p className='px-2 md:px-6 lg:px-10 mt-4 text-center mb-8'>
                                    {news.description}
                                </p>
                            </div>
                        </SwiperSlide>
                    ))}

                </Swiper>
                <div className='flex justify-center gap-3 mt-8'>
                    <button className="btn rounded-full prev"><BsArrowLeft /></button>
                    <button className="btn rounded-full next"><BsArrowRight /></button>
                </div>

            </div>

        </div>
    );
};

export default LatestNews;