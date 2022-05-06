import React from "react";
import banner from "../../../Assets/Images/banner/banner-2.png";

const Banner = () => {
  return (
    <section className="mb-40 h-fit">
      <div className="px-4 py-8 lg:my-12 md:px-12 text-gray-800 text-center lg:text-left">
        <div className="container mx-auto xl:px-32">
          <div className="grid lg:grid-cols-2 gap-12 flex items-center">
            <div className="mt-12 lg:mt-0">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                Perfume
                <br />
                <span className="text-rose-600">Pungent</span>
              </h1>
              <p className="text-xl">Highest concentration of fragrance</p>
              <p className="text-xl mb-6">
                Contains lower concentration of fragrance
              </p>
              <a
                className="inline-block px-7 py-3 mr-2 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Get started
              </a>
              <a
                className="inline-block px-7 py-3 bg-transparent text-blue-600 font-medium text-sm leading-snug uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                href="#!"
                role="button"
              >
                Learn more
              </a>
            </div>
            <div className="mb-12 lg:mb-0">
              <img
                src={banner}
                className="w-full h-80 rounded-lg shadow-lg"
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
