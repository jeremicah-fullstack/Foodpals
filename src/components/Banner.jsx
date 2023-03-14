import Image from "next/image";
import { Burger } from "public";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import { Slide1, Slide2, Slide3, Slide4, Slide5 } from "public";

const Banner = () => {
  return (
    <div className="banner py-10">
      <div className="container">
        <div className="banner--show flex ">
          <div className="image w-full bg-center bg-no-repeat flex px-10">
            <Swiper
              centeredSlides={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              loop={true}
              pagination={true}
              modules={[Navigation, Autoplay, Pagination]}
              className="mySwiper "
            >
              <SwiperSlide className="parent bg-slide1 ">
                <div className="img text-center">
                  <p className="z-8 text-lg uppercase">
                    Make every cooking easier
                  </p>
                  <span>ready-made recipes just for you</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="parent bg-slide2">
                <div className="img text-center">
                  <p className="z-8 text-lg uppercase">Easy to go recipes</p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="parent bg-slide3">
                <div className="img text-center">
                  <p className="z-8 text-lg uppercase">
                    Cheap but deliouscious
                  </p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="parent bg-slide4">
                <div className="img text-center">
                  <p className="z-8 text-lg uppercase">Quality made recipes</p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </SwiperSlide>
              <SwiperSlide className="parent bg-slide5">
                <div className="img text-center">
                  <p className="z-8 text-lg uppercase">Easy to go recipes</p>
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Banner;
