import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import './carousel.scss'

const Carousel = () => {
  return (
    <div className="j-karosel">
      <Swiper
        navigation={true}
        pagination={true}
        modules={[Navigation, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div>1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div>2</div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div>3</div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div>4</div>{" "}
        </SwiperSlide>
        <SwiperSlide>
          <div>5</div>{" "}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;
