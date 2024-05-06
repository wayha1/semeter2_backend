import React from "react";
import { CgPhone } from "react-icons/cg";
import {
  FaFacebook,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTelegramPlane,
  FaTiktok,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { IoMdHome } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

import Logo from "../asset/img.png";
export default function Footer() {
  return (
    <footer className="text-center text-neutral-600  lg:text-left">
      <div className="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-400 lg:justify-between">
        <div className="mr-12 hidden lg:block">
          <span>Get connected with us on social networks</span>
        </div>
        {/* <!-- Social network icons container --> */}
        <div className="flex justify-center">
          <div className="mr-6 text-neutral-600 hover:text-pink-400 ">
            <FaFacebook />
          </div>
          <div className="mr-6 text-neutral-600 hover:text-pink-400 ">
            <FaInstagram />
          </div>
          <div className="mr-6 text-neutral-600 hover:text-pink-400 ">
            <FaGoogle />
          </div>
          <div className="mr-6 text-neutral-600 hover:text-pink-400 ">
            <FaLinkedin />
          </div>
          <div className="mr-6 text-neutral-600 hover:text-pink-400 ">
            <FaSquareXTwitter />
          </div>
          <div className="text-neutral-600 hover:text-pink-400 ">
            <FaTiktok />
          </div>
        </div>
      </div>

      {/* <!-- Main container div: holds the entire content of the footer, including four sections (TW Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* <!-- TW Elements section --> */}
          <div className="pl-10">
            <div className="flex justify-center md:flex md:justify-normal">
              <img
                className="w-[100px] h-[40px] mt-2 mr-8"
                src={Logo}
                alt="Skin.me"
              />
            </div>
            <p className="pt-5">
              Our website offers a unique feature where you can explore skincare
              ingredients specific to your province of interest. Additionally,
              we provide a platform for discovering and purchasing skincare
              products tailored to your needs.
            </p>
          </div>
          {/* <!-- Products section --> */}
          <div className="pl-10">
            <h6
              className="mb-4 flex justify-center text-pink-400
              uppercase md:justify-start text-xl font-bold"
            >
              Service
            </h6>
            <p className="mb-4">
              <Link to="/shop">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  Shop
                </div>
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/cart">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  Cart
                </div>
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  Product Listing
                </div>
              </Link>
            </p>
            <p>
              <Link to="/">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  Order History
                </div>
              </Link>
            </p>
          </div>
          {/* <!-- Useful links section --> */}
          <div className="pl-10">
            <h6
              className="mb-4 flex justify-center text-pink-400
              uppercase md:justify-start text-xl font-bold"
            >
              Information
            </h6>
            <p className="mb-4">
              <Link to="/about">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  About Us
                </div>
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/contact">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  Contact Us
                </div>
              </Link>
            </p>
            <p className="mb-4">
              <Link to="/">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  FAQs
                </div>
              </Link>
            </p>
            <p>
              <Link to="/">
                <div className="text-neutral-600 hover:text-pink-400 ">
                  Terms & Conditions
                </div>
              </Link>
            </p>
          </div>
          {/* <!-- Contact section --> */}
          <div className="pl-10">
            <h6
              className="mb-4 flex justify-center text-pink-400
              uppercase md:justify-start text-xl font-bold "
            >
              Contact
            </h6>
            <p className="mb-4  flex items-center justify-center md:justify-start hover:text-pink-400">
              <IoMdHome size={22} className="mr-2" /> Phnom Penh, Cambodia
            </p>
            <p className="mb-4  flex items-center justify-center md:justify-start hover:text-pink-400">
              <MdEmail size={22} className="mr-2" /> skinme168@gmail.com
            </p>
            <p className="mb-4  flex items-center justify-center md:justify-start hover:text-pink-400">
              <CgPhone size={22} className="mr-2" /> 096 225 3049
            </p>
            <p className="flex items-center justify-center md:justify-start hover:text-pink-400">
              <FaTelegramPlane size={22} className="mr-2" />{" "}
              {/* Add margin-right for spacing */}
              096 225 3049
            </p>
          </div>
        </div>
      </div>

      {/* <!--Copyright section--> */}
      <div className="bg-neutral- text-pink-400 p-3 text-center">
        <span>© 2024 Skinme Website in Cambodia</span>
        {/* <div
          className=" text-neutral-600 "
          href="https://tw-elements.com/"
        >
          Lotd. Cambodia
        </div> */}
      </div>
    </footer>
  );
}
