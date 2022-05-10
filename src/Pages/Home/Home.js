import React from "react";
import { useNavigate } from "react-router-dom";
import Banner from "./Banner/Banner";
import BestSellers from "./BestSellers/BestSellers";
import InventoryItems from "./InventoryItems/InventoryItems";
import WhyPungent from "./WhyPungent/WhyPungent";

const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <svg
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1366 420"
        preserveAspectRatio="none"
        className="svg absolute hidden lg:block"
        style={{
          height: "740px",
          width: "100%",
          zIndex: -10,
          overflow: "hidden",
        }}
      >
        <defs>
          <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
            <stop stopColor="hsla(356, 100%, 95%, 1)" offset="0%"></stop>
            <stop stopColor="hsla(356, 100%, 95%, 1)" offset="100%"></stop>
          </linearGradient>
        </defs>
        <path
          fill="url(#sw-gradient-0)"
          d="M 0.351 264.418 C 0.351 264.418 33.396 268.165 47.112 270.128 C 265.033 301.319 477.487 325.608 614.827 237.124 C 713.575 173.504 692.613 144.116 805.776 87.876 C 942.649 19.853 1317.845 20.149 1440.003 23.965 C 1466.069 24.779 1440.135 24.024 1440.135 24.024 L 1440 0 L 1360 0 C 1280 0 1120 0 960 0 C 800 0 640 0 480 0 C 320 0 160 0 80 0 L 0 0 L 0.351 264.418 Z"
        ></path>
      </svg>
      <Banner></Banner>
      <InventoryItems></InventoryItems>
      <div className="mt-12 flex space-x-2 justify-center mb-12">
        <div>
          <button
            onClick={() => navigate("/manageitems")}
            type="button"
            className="motion-safe:animate-bounce  duration-700 inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Manage Inventories
          </button>
        </div>
      </div>
      <BestSellers></BestSellers>
      <WhyPungent></WhyPungent>
    </>
  );
};

export default Home;
