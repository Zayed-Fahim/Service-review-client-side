import React from "react";
import { Link } from "react-router-dom";

const FilteredService = ({ filteredService }) => {
  const { service_img, service_title, service_description, price, service_id } =
    filteredService;
  return (
    <div className="flex justify-center mt-12 w-[400px]">
      <div className="rounded-lg shadow-lg bg-white">
        <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
          <img
            className="rounded-t-lg scale-100 hover:scale-90 ease-out duration-500"
            src={service_img}
            alt=""
          />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">
            {service_title}
          </h5>
          <p className="text-gray-700 text-base mb-4">
            {service_description.substring(0, 100)}
            {"..."}
          </p>
          <div className="flex justify-between">
            <p>
              <span className="text-[18px] text-red-600 font-bold">Charge</span>
              : ${price}
            </p>
            <Link to={`/services/${service_id}`}>
              <button
                type="button"
                className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredService;
