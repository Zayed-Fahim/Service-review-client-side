import React from "react";
import { useLoaderData } from "react-router-dom";

const Reviews = () => {
  const reviews = useLoaderData();
  const { review } = reviews;
  return (
    <div className="flex flex-col">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label inline-block mb-2 font-bold text-2xl"
        >
          {review}
        </label>
        <textarea
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
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Type your review about this service..."
        ></textarea>
      </div>
      <div>
        <button
          type="button"
          class=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Reviews;
