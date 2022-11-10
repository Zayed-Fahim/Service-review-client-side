import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { FcClock, FcServices } from "react-icons/fc";
import { BiDollar } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import Reviews from "../Reviews/Reviews";

const ServicePage = () => {
  const serviceDetails = useLoaderData();
  const { service_img, service_title, service_description } = serviceDetails;
  const facilities = [
    {
      id: 1,
      icon: <FcClock className="h-16 w-16"></FcClock>,
      name: "Availability",
    },
    {
      id: 2,
      icon: <FcServices className="h-16 w-16"></FcServices>,
      name: "Quality Service",
    },
    {
      id: 3,
      icon: <GrMapLocation className="h-16 w-16"></GrMapLocation>,
      name: "Real Time Location",
    },
    {
      id: 4,
      icon: <BiDollar className="h-16 w-16"></BiDollar>,
      name: "Quality Cost Service",
    },
  ];
  return (
    <div class="flex justify-center w-full container mx-auto my-24">
      <div class="rounded-lg shadow-lg bg-white">
        <PhotoProvider>
          <PhotoView src={service_img}>
            <img class="rounded-t-lg w-[100%]" src={service_img} alt="" />
          </PhotoView>
        </PhotoProvider>
        <div class="p-6">
          <h5 class="text-gray-900 text-4xl font-bold mb-2">{service_title}</h5>
          <p class="text-gray-700 text-2xl mb-4">
            {serviceDetails.service_description}
          </p>
          <p className="text-xl">
            <span className="text-red-600 text-2xl font-bold">Charge:</span> $
            {serviceDetails.price}
          </p>
          <div className="flex">
            <div>
              {serviceDetails.facility.map((facility) => {
                return (
                  <div>
                    <div className="mt-44 text-2xl font-semibold">
                      {facility.details}
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              {facilities.map((facility) => {
                return (
                  <div className="mt-20 h-[156px] w-[170px] border-[2px] rounded-xl flex flex-col justify-around items-center hover:bg-purple-500">
                    <div>{facility.icon}</div>
                    <div>
                      <h1 className="text-[16px] hover:text-white font-semibold">
                        {facility.name}
                      </h1>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div>
              <Reviews></Reviews>
            </div>
            <Link to="/services">
              <button
                type="button"
                class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Back to Services
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
