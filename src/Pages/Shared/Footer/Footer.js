import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="max-w-full min-h-[80vh] text-center bg-gray-900 text-white">
      <div className="container mx-auto px-6 pt-6">
        <div>
          <form action="">
            <div className="grid md:grid-cols-3 gird-cols-1 gap-4 mt-6 flex justify-center items-center">
              <div className="md:ml-auto md:mb-6">
                <p className="">
                  <strong>Get the best deals and discounts</strong>
                </p>
              </div>

              <div className="md:mb-6">
                <input
                  type="text"
                  className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                  id="exampleFormControlInput1"
                  placeholder="Email address"
                />
              </div>

              <div className="md:mr-auto mb-6">
                <button
                  type="submit"
                  className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="grid lg:grid-cols-5 md:grid-cols-3 mt-4">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">
              Purfume Pungent Warehouse
            </h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Men's
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Women's
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Best Sellers
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Security & payment</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Privacy
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Security & Payment
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Terms & Conditions
                </a>
              </li>

              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Warehouse Insurance
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Your deal</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Track deal
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Delivery
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Store Finder
                </a>
              </li>

              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Online Returns
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Customer Service</h5>
            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Price Promise
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Everyday Low Prices
                </a>
              </li>{" "}
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Consumer Guarantees Act
                </a>
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Corporate</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Warehouse
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Investor Center
                </a>
              </li>
              <li>
                <a href="#!" className="text-white hover:text-rose-400">
                  Suppliers
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="mb-4">
        {" "}
        <p>For Sale & Advice: 000 0000 0000</p>
        <p>Whatsapp Us On: 0000 000 000</p>
        <p>Open 10 am to 7 pm</p>
      </div>
      <div className="flex justify-center mb-6">
        <a
          href="#!"
          type="button"
          className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
        >
          <FaFacebook className="w-4 h-full mx-auto hover:text-rose-400" />
        </a>
        <a
          href="#!"
          type="button"
          className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
        >
          <FaTwitter className="w-4 h-full mx-auto hover:text-rose-400" />
        </a>
        <a
          href="#!"
          type="button"
          className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
        >
          <FaGoogle className="w-4 h-full mx-auto hover:text-rose-400" />
        </a>
        <a
          href="#!"
          type="button"
          className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
        >
          <FaInstagram className="w-4 h-full mx-auto hover:text-rose-400" />
        </a>
        <a
          href="#!"
          type="button"
          className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
        >
          <FaLinkedin className="w-4 h-full mx-auto hover:text-rose-400" />
        </a>
        <a
          href="#!"
          type="button"
          className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
        >
          <FaGithub className="w-4 h-full mx-auto hover:text-rose-400" />
        </a>
      </div>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        Copyright {new Date().getFullYear()} &#64; All Rights Reserved by
        <a
          className="text-white hover:text-rose-400"
          href="https://github.com/shova29"
        >
          {" "}
          Perfume Pungent
        </a>
      </div>
    </footer>
  );
};

export default Footer;

/* 
{/* <footer className="text-center bg-gray-900 text-white ">
        <div className="container px-6 pt-6">
          <div>
            <form action="">
              <div className="grid md:grid-cols-3 gird-cols-1 gap-4 flex justify-center items-center">
                <div className="md:ml-auto md:mb-6">
                  <p className="">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </div>

                <div className="md:mb-6">
                  <input
                    type="text"
                    className="
                form-control
                block
                w-full
                px-3
                py-1.5
                text-base
                font-normal
                text-gray-700
                bg-white bg-clip-padding
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                m-0
                focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
              "
                    id="exampleFormControlInput1"
                    placeholder="Email address"
                  />
                </div>

                <div className="md:mr-auto mb-6">
                  <button
                    type="submit"
                    className="inline-block px-6 py-2 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </form>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Links</h5>

              <ul className="list-none mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex justify-center mb-6">
          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <FaFacebook className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <FaTwitter className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <FaGoogle className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <FaInstagram className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <FaLinkedin className="w-4 h-full mx-auto" />
          </a>

          <a
            href="#!"
            type="button"
            className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
          >
            <FaGithub className="w-4 h-full mx-auto" />
          </a>
        </div>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          &copy;Copyright {new Date().getFullYear()} &#64; All Rights Reserved
          by
          <a className="text-white" href="https://github.com/shova29">
            {" "}
            Perfume Pungent
          </a>
        </div>
      </footer> */
