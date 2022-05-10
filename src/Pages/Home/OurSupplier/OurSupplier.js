import React from "react";
import "./OurSupplier.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Adidas from "../../../Assets/Images/supplier/Adidas2.jpg";
import Beyonce from "../../../Assets/Images/supplier/Beyonce.png";
import BritneySpears from "../../../Assets/Images/supplier/Britney Spears.png";
import CalvinKlein from "../../../Assets/Images/supplier/Calvin Klein1.png";
import DavidBeckham from "../../../Assets/Images/supplier/David Beckham.png";
import Joop from "../../../Assets/Images/supplier/Joop.png";

const OurSupplier = () => {
  return (
    <div className="container my-24 px-6 mx-auto mt-6">
      <section className="mb-32 text-gray-800 text-center mt-6">
        <Swiper
          slidesPerView={4}
          spaceBetween={5}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{ delay: 1000 }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <img
              className="mb-6 mx-auto"
              src={Adidas}
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SwiperSlide>
          <SwiperSlide>
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

/* import React, { useRef, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";

const OurSupplier = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-12"></h2>
        <Splide
          options={{
            rewind: true,
            width: 800,
            gap: "1rem",
          }}
          aria-label="My Favorite Images"
        >
          <SplideSlide>
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
              alt="Image 1"
              style={{ width: "150px" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
              alt="Image 2"
              style={{ width: "150px" }}
            />
          </SplideSlide>
          <SplideSlide>
            <img
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
              alt="Image 3"
              style={{ width: "150px" }}
            />
          </SplideSlide>
        </Splide>
        {/*  <div
          id="carouselExampleCaptions"
          className="carousel slide relative carousel-dark"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <img
                className="rounded-full shadow-lg mb-6 mx-auto"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(10).jpg"
                alt="avatar"
                style={{ width: "150px" }}
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                className="rounded-full shadow-lg mb-6 mx-auto"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(32).jpg"
                alt="avatar"
                style={{ width: "150px" }}
              />
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                className="rounded-full shadow-lg mb-6 mx-auto"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg"
                alt="avatar"
                style={{ width: "150px" }}
              />
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        // </div> */
//     </section>
//   </div>
// );
// };
export default OurSupplier;
