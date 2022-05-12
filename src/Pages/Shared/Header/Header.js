import { Transition } from "@headlessui/react";
import { signOut } from "firebase/auth";
import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import logo from "../../../Assets/Images/logo/logo-2.png";
import auth from "../../../firebase.init";
import CustomLink from "../CustomLink/CustomLink";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <nav className="max-w-full bg-rose-600 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <div className="flex items-center">
            <div className="ml-6 flex-shrink-0">
              <CustomLink to="/home">
                <img className="h-16 w-16" src={logo} alt="logo" />
              </CustomLink>
            </div>
            <div className="hidden md:block">
              <div className="ml-8 flex justify-between items-center space-x-2">
                <p className="hover:bg-text-700 text-white text-base px-3 py-2 xl:mr-10 rounded-md font-medium no-underline">
                  Perfume Pungent
                </p>
                <CustomLink
                  className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 xl:ml-4 rounded-md"
                  to="/home"
                >
                  Home
                </CustomLink>
                <CustomLink
                  className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                  to="/inventory"
                >
                  Inventory
                </CustomLink>
                <CustomLink
                  className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                  to="/about"
                >
                  About
                </CustomLink>
                <CustomLink
                  className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                  to="/blogs"
                >
                  Blogs
                </CustomLink>
                {user && (
                  <>
                    <CustomLink
                      className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                      to="/manageitems"
                    >
                      Manage Items
                    </CustomLink>
                    <CustomLink
                      className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                      to="/additem"
                    >
                      Add Item
                    </CustomLink>
                    <CustomLink
                      className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                      to="/myitems"
                    >
                      My Items
                    </CustomLink>
                  </>
                )}

                <div className="justify-center items-center lg:ml-6 mb-2 lg:mb-0">
                  {user ? (
                    <button
                      onClick={handleSignOut}
                      className="btn btn-link lg:ml-20 text-white text-sm font-bold text-decoration-none ms-5"
                    >
                      Sign Out
                    </button>
                  ) : (
                    <CustomLink to="/signin" className="text-white lg:ml-80">
                      <li
                        className="btn btn-link ml-22 md:mt-2 inline-block px-4 py-2.5 mr-2 bg-transparent text-white font-medium text-sm leading-tight uppercase rounded hover:text-rose-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                      >
                        Sign In
                      </li>{" "}
                    </CustomLink>
                  )}
                </div>
              </div>
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
            <div ref={ref} className="ml-6 px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <CustomLink
                className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                to="/home"
              >
                Home
              </CustomLink>
              <CustomLink
                className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                to="/inventory"
              >
                Inventory
              </CustomLink>
              <CustomLink
                className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                to="/about"
              >
                About
              </CustomLink>
              <CustomLink
                className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                to="/blogs"
              >
                Blogs
              </CustomLink>
              {user && (
                <>
                  <CustomLink
                    className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                    to="/manageitems"
                  >
                    Manage Items
                  </CustomLink>
                  <CustomLink
                    className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                    to="/additem"
                  >
                    Add Item
                  </CustomLink>
                  <CustomLink
                    className="text-gray-300 hover:bg-text-700 text-sm hover:text-white px-3 py-2 rounded-md"
                    to="/myitems"
                  >
                    My Items
                  </CustomLink>
                </>
              )}
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="btn btn-link lg:ml-28 px-3 py-2 text-white text-sm font-bold text-decoration-none"
                >
                  Sign Out
                </button>
              ) : (
                <CustomLink to="/signin" className="text-white lg:ml-28">
                  <li
                    className="btn btn-link inline-block px-3 py-2 mr-2 bg-transparent text-white font-medium text-sm leading-tight uppercase rounded hover:text-rose-500 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                  >
                    Sign In
                  </li>{" "}
                </CustomLink>
              )}
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
};
export default Header;
