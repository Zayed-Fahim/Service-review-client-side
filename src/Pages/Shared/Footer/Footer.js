import React from "react";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsGithub,
  BsGoogle,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer className="text-center mx-auto bg-gray-900 text-white">
        <div className="px-6 pt-6">
          <div className="flex justify-center mb-6">
            <Link
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <BsFacebook className="w-8 h-8 p-[1px]"></BsFacebook>
            </Link>

            <Link
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <BsTwitter className="w-7 h-7 p-[1px] pt-[3px] ml-[2px]"></BsTwitter>
            </Link>

            <Link
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <BsGoogle className="w-7 h-7 p-[1px] mt-[2px] ml-[2px]"></BsGoogle>
            </Link>

            <Link
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <BsInstagram className="w-6 h-6 p-[1px] mt-[4px] ml-[4px]"></BsInstagram>
            </Link>

            <Link
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <BsLinkedin className="w-6 h-5 p-[1px] mt-[5px] ml-[4px]"></BsLinkedin>
            </Link>

            <Link
              href="#!"
              type="button"
              className="rounded-full border-2 border-white text-white leading-normal uppercase hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out w-9 h-9 m-1"
            >
              <BsGithub className="w-6 h-6 p-[1px] mt-[4px] ml-[4px]"></BsGithub>
            </Link>
          </div>
          <div>
            <form action="">
              <div className="grid md:grid-cols-3 gird-cols-1 gap-4 justify-center items-center">
                <div className="md:ml-auto md:mb-6">
                  <p className="">
                    <strong>Sign up for more offers</strong>
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

          <div className="mb-6 container mx-auto">
            <p>
              Are you hungry? Did you have a long and stressful day? Interested
              in getting a cheesy pizza delivered to your office or looking to
              avoid the weekly shop? Then DELIVERY dot com is the right
              destination for you! DELIVERY dot com offers you a long and
              detailed list of the best restaurants and shops near you to help
              make your everyday easier. Our online food delivery service has it
              all, whether you fancy a juicy burger from Takeout, fresh sushi
              from Samdado or peri peri chicken from Nando's, DELIVERY dot com.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 mx-auto container">
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Services</h5>
              <ul className="list-none mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    Why DELIVERY dot com
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    What I deliver
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">About</h5>
              <ul className="list-none mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Home
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mb-6">
              <h5 className="uppercase font-bold mb-2.5">Support</h5>
              <ul className="list-none mb-0">
                <li>
                  <Link href="#!" className="text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Terms and conditions
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Privacy policy
                  </Link>
                </li>
                <li>
                  <Link href="#!" className="text-white">
                    Refund Account Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2022 Copyright:
          <Link className="text-white" to="/">
            {" "}
            DELIVERY dot com
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
