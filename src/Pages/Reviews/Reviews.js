import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Reviews = () => {
    const reviews = useLoaderData();
    return (
      <div className="flex justify-center">
        <div className="mb-3 xl:w-96">
          <label
            htmlFor="exampleFormControlTextarea1"
            className="form-label inline-block mb-2 text-gray-700"
          >
            Example textarea
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
            placeholder="Your message"
          ></textarea>
        </div>
      </div>
    );
};

export default Reviews;