import React, { useRef } from 'react';

// Image 
import Image from 'next/image';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay } from 'swiper/modules';
import { Slider_1, Slider_2, Slider_3, Slider_4 } from '@/src/Assets';

const HomeSlider = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <section className='slider-container'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onAutoplayTimeLeft={onAutoplayTimeLeft}
                className="mySwiper"
            >
                <SwiperSlide>
                  <Image src={Slider_1} alt="AppStick School Slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={Slider_2} alt="AppStick School Slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={Slider_3} alt="AppStick School Slider"/>
                </SwiperSlide>
                <SwiperSlide>
                <Image src={Slider_4} alt="AppStick School Slider"/>
                </SwiperSlide>
                <div className="autoplay-progress" slot="container-end">
                    <svg viewBox="0 0 48 48" ref={progressCircle}>
                        <circle cx="24" cy="24" r="20"></circle>
                    </svg>
                    <span ref={progressContent}></span>
                </div>
            </Swiper>
        </section>
    );
};

export default HomeSlider;