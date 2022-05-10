import React from "react";
import { FaShippingFast } from "react-icons/fa";
import { AiOutlineDollar } from "react-icons/ai";
import { MdOutlineLocalOffer } from "react-icons/md";
const WhyPungent = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800 text-center">
        <h2 className="text-3xl font-bold mb-20">
          Why Perfume <span className="text-rose-600">Pungent</span>
        </h2>
        <div className="grid lg:gap-x-12 lg:grid-cols-3">
          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-4 bg-rose-600 rounded-full shadow-lg inline-block -mt-8">
                  <FaShippingFast className="w-7 h-7 text-white"></FaShippingFast>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-rose-600 mb-4">
                  Fast Delivery Service
                </h3>
                <p className="text-gray-500">
                  Next Day Delivery if you order by 2 Pm today.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-12 lg:mb-0">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-4 bg-rose-600 rounded-full shadow-lg inline-block -mt-8">
                  <AiOutlineDollar className="w-7 h-7 text-white"></AiOutlineDollar>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-rose-600 mb-4">
                  Free Delivery
                </h3>
                <p className="text-gray-500">
                  Free Delivery & Free Gift Wrapping Available on request.
                </p>
              </div>
            </div>
          </div>

          <div className="">
            <div className="rounded-lg shadow-lg h-full block bg-white">
              <div className="flex justify-center">
                <div className="p-4 bg-rose-600 rounded-full shadow-lg inline-block -mt-8">
                  <MdOutlineLocalOffer className="w-7 h-7 text-white"></MdOutlineLocalOffer>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-rose-600 mb-4">
                  Best offers
                </h3>
                <p className="text-gray-500">
                  We regularly offer not to be missed discounts and offers. Sign
                  up to our mailing list below!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyPungent;
