import React from "react";
import "animate.css";
import banner from "../../../Assets/Images/banner/banner-2.png";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <section className="mb-20 h-fit">
      <div className="py-8 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0 animate__animated animate__fadeInUp animate__delay-0.5s">
              <h1 className="sm:text-4xl lg:text-7xl md:text-6xl font-bold tracking-tight mb-12">
                Perfume
                <br />
                <span className="text-rose-600">Pungent</span>
              </h1>
              <p className="lg:text-xl sm:text-sm">
                Highest concentration of fragrance
              </p>
              <p className="lg:text-xl sm:text-sm mb-6">
                Contains lower concentration of fragrance
              </p>
              <a
                className="inline-block px-7 py-3 mr-2 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#inventory-items"
                role="button"
              >
                Get started
              </a>
              <button
                onClick={() => navigate("/about")}
                className="inline-block px-7 py-3 bg-transparent text-black-600 font-medium text-sm leading-snug uppercase rounded hover:text-rose-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                About Pungent
              </button>
            </div>
            <div className="mb-12 lg:mb-0 sm:mx-auto">
              <img
                src={banner}
                className="animate__animated animate__slideInRight animate__delay-0.5s sm:min-w h-80 rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
