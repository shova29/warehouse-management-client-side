import { Transition } from "@headlessui/react";
import React, { useState } from "react";
import logo from "../../../Assets/Images/logo/logo-2.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="bg-rose-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="ml-6 flex-shrink-0">
              <img className="h-16 w-16" src={logo} alt="logo" />
            </div>
            <div className="hidden md:block">
              <div className="ml-12 flex items-baseline space-x-4">
                <a
                  href="#"
                  className="hover:bg-text-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Perfume Pungent
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-text-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:bg-text-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Blogs
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-text-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Manage Items
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-text-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Add Items
                </a>

                <a
                  href="#"
                  className="text-gray-300 hover:bg-text-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  My Items
                </a>
              </div>
            </div>
            <div class="flex items-center lg:ml-56 mb-2 lg:mb-0">
              <button
                type="button"
                className="inline-block px-6 py-2.5 mr-2 bg-transparent text-white font-medium text-xs leading-tight uppercase rounded hover:text-rose-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="#"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                About
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Blogs
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Manage Items
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Add Items
              </a>

              <a
                href="#"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                My Items
              </a>
              <button
                type="button"
                className=" mb-2 lg:mb-0 inline-block px-6 py-2.5 mr-2 bg-transparent text-white font-medium text-xs leading-tight uppercase rounded hover:text-rose-500 hover:bg-rose-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-rose-200 transition duration-150 ease-in-out"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
              >
                Login
              </button>
            </div>
          </div>
        )}
      </Transition>
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
    </nav>
  );
};
export default Header;
