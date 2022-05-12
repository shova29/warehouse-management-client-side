import React from "react";
import banner3 from "../../Assets/Images/banner/banner-3.jpg";

const About = () => {
  return (
    <div className="container my-24 px-6 mx-auto">
      <section className="mb-32 text-gray-800">
        <div className="container mx-auto xl:px-32 text-center lg:text-left">
          <div className="grid lg:grid-cols-2 flex items-center">
            <div className="mb-12 lg:mb-0">
              <div
                className="block rounded-lg shadow-lg px-6 py-12 md:px-12 lg:-mr-14"
                style={{
                  background: "hsla(0, 0%, 100%, 0.55)",
                  backdropFilter: "blur(30px)",
                }}
              >
                <h2 className="text-3xl font-bold mb-6">
                  About <span className="text-rose-600">Us</span>
                </h2>

                <p className="text-gray-500 mb-0 text-justify">
                  Perfume Pungent is a well established retailer of beauty and
                  fragrance related products. We offer you strong range of
                  perfume brands and we are one of the largest stockiest of
                  perfume industry in the worldwide market. Our mission is to
                  provide our clients with utmost satisfaction and pleasure in
                  making their decision and then getting the best products in a
                  timely fashion at the right prices. We are proud to bring you
                  the best selection that the beauty world has to offer. We
                  continually stock top name brands, hard to finds, and newly
                  released products. All products are guaranteed to be genuine
                  and 100% authentic. We are not responsible for any
                  typographical errors or inaccuracies contained in this web
                  site. The information, prices and discounts presented on this
                  site are subject to change without prior notice. We offer all
                  the comfort and conveniences of online shopping with secure
                  credit card processing. We personally welcome you to our
                  Online Store, and wish your trip would be a pleasurable one.
                </p>
                <p className="text-gray-400 mt-6">
                  Perfume Pungent Support Team
                </p>
              </div>
            </div>

            <div>
              <img
                src={banner3}
                className="w-full rounded-lg shadow-lg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
