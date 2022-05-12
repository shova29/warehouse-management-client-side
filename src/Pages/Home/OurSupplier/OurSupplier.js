import React from "react";
import "./OurSupplier.css";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Adidas from "../../../Assets/Images/supplier/Adidas2.jpg";
import Beyonce from "../../../Assets/Images/supplier/Beyonce.png";
import BritneySpears from "../../../Assets/Images/supplier/Britney Spears.png";
import CalvinKlein from "../../../Assets/Images/supplier/Calvin Klein1.png";
import DavidBeckham from "../../../Assets/Images/supplier/David Beckham.png";
import Joop from "../../../Assets/Images/supplier/Joop.png";

const OurSupplier = () => {
  return (
    <div className="container mx-auto py-20">
      <section className="lg:mb-24 text-gray-800 text-center">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="swiper-slide">
            {" "}
            <img
              className="mb-6 mx-auto"
              src={Adidas}
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            {" "}
            <img
              className="mb-6 mx-auto"
              src={Beyonce}
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mb-6 mx-auto"
              src={BritneySpears}
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mb-6 mx-auto"
              src={CalvinKlein}
              alt="Image 1"
              style={{ width: "120px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mb-6 mx-auto"
              src={DavidBeckham}
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <img
              className="mb-6 mx-auto"
              src={Joop}
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default OurSupplier;
