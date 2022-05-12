import React from "react";

const Contact = () => {
  return (
    <div className="container mx-auto mt-20">
      <section className="text-gray-800 text-center">
        <div className="py-12 md:px-12">
          <div className="container mx-auto xl:px-28">
            <div className="grid lg:grid-cols-2 flex items-center">
              <div className="md:mt-12 lg:mt-0 mb-12 lg:mb-0">
                <div
                  className="block rounded-lg shadow-lg px-2 py-8 md:px-12 lg:-mr-14"
                  style={{
                    background: "hsla(0, 0%, 100%, 0.55)",
                    backdropFilter: "blur(30px)",
                  }}
                >
                  <h2 className="text-3xl font-bold mb-12">Contact us</h2>
                  <form>
                    <div className="form-group mb-6 ">
                      <input
                        type="text"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput7"
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <input
                        type="email"
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleInput8"
                        placeholder="Email address"
                      />
                    </div>
                    <div className="form-group mb-6">
                      <textarea
                        className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        id="exampleFormControlTextarea13"
                        rows="3"
                        placeholder="Message"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </div>
              <div className="md:mb-12 lg:mb-0">
                <div
                  className="map-container relative shadow-lg rounded-lg"
                  style={{ height: "600px", zIndex: " -1" }}
                >
                  <iframe
                    src="https://maps.google.com/maps?q=mirpurdhaka&t=&z=13&ie=UTF8&iwloc=&output=embed"
                    className="left-0 top-0 h-full w-full absolute rounded-lg"
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
