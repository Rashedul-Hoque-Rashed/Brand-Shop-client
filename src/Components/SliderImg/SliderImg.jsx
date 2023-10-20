import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

const SliderImg = () => {


    return (
        <div className="container mx-auto">


            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img className='w-full h-64 md:h-72 lg:h-96' src={"https://i.ibb.co/NWzqpFx/luchiana-2509818535-1520x394.webp"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-full h-64 md:h-72 lg:h-96' src={"https://i.ibb.co/593RFKy/luchiana-2517430051-1520x394.webp"} alt="" />
                </SwiperSlide>
                <SwiperSlide>
                <img className='w-full h-64 md:h-72 lg:h-96' src={"https://i.ibb.co/wNfkdG4/luchiana-2517802173-1520x394.webp"} alt="" />
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default SliderImg;