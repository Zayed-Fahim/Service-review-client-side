import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCartIcon } from "@heroicons/react/24/solid";

const Header = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const navData = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Services",
      href: "/services",
    },
    {
      name: "Orders",
      href: "/orders",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  return (
    <div className="bg-gradient-to-r from-[#36d1dc] to-[#5b86e5]">
      <div className="flex container w-full mx-auto justify-between items-center font-bold text-2xl px-5  py-6 ">
        <Link to="/">
          <h1 className="h-[3.5rem] flex items-center text-center uppercase text-white">
            Delivery <br /> <br />
            <span className="lowercase text-black">Dot Com</span>
          </h1>
        </Link>
        <nav className="min-[0px]:hidden max-[767px]:hidden min-[768px]:inline-block space-x-10 items-center text-white">
          {navData.map((n) => {
            return (
              <Link key={n.name} to={n.href}>
                {n.name}
              </Link>
            );
          })}
          <div className="inline-block">
            <span className="text-white bg-red-700 absolute rounded-full text-xs -mt-2.5 ml-2 py-0 px-1.5">
              0
            </span>
            <ShoppingCartIcon className="w-6"></ShoppingCartIcon>
          </div>
        </nav>
        <div className="flex space-x-4 justify-center min-[0px]:hidden max-[767px]:hidden min-[768px]:inline-block">
          <Link to="/login">
            <button
              type="button"
              className="inline-block mx-auto py-3 w-[120px] bg-blue-600 text-white font-medium text-[1.1rem] leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-100"
            >
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button
              type="button"
              className="inline-block py-3 mx-auto w-[120px] text-center bg-purple-600 text-white font-medium text-[1.1rem] leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-100"
            >
              Sign Up
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          {isModalOpen ? (
            <div className="bg-[#2679df] fixed w-[55vw] right-0 top-0 transition translate-x-[-1px] rounded-lg text-white">
              <div className="pt-5 pb-6 px-5">
                <button
                  onClick={() => setModalOpen(!isModalOpen)}
                  className="-mr-2 float-right mb-3"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                </button>
                <div className="mt-[3rem] mb-[3rem] relative">
                  <nav className="grid gap-y-8">
                    {navData.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="flex flex-col-reverse items-center rounded-md"
                      >
                        <h1 className="my-3 ml-3 text-xl font-bold">
                          {item.name}
                        </h1>
                      </Link>
                    ))}
                  </nav>
                </div>
                <div className="flex flex-col space-y-4 justify-center">
                  <Link className="mx-auto" to="/login">
                    <button
                      type="button"
                      className="inline-block mx-auto py-3 w-[120px] bg-blue-600 text-white font-medium text-[1.1rem] leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-100"
                    >
                      Sign In
                    </button>
                  </Link>
                  <Link className="mx-auto" to="/signup">
                    <button
                      type="button"
                      className="inline-block py-3  w-[120px] text-center bg-purple-600 text-white font-medium text-[1.1rem] leading-tight uppercase rounded shadow-md focus:outline-none focus:ring-0 transition duration-150 ease-in-out pointer-events-none opacity-100"
                    >
                      Sign Up
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <button onClick={() => setModalOpen(!isModalOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="white"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
