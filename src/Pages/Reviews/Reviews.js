import React, { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Reviews = () => {
  const { user } = useContext(AuthContext);
  const reviews = useLoaderData();
  const [userReview, setUserReview] = useState("");
  const [reviewTrigger, setReviewTrigger] = useState(false);

  const { review, _id } = reviews;
  const urlID = _id;


  const handleTextAreaTrigger = () => {
    setReviewTrigger(true);
    const data = {
      review: userReview,
      serviceId: urlID,
      reviewer_name: user.displayName,
      reviewer_email: user.email,
      reviewer_photo : user.photoURL,
    };
    console.log(data)
    fetch(
      "https://service-review-server-zayed-fahim.vercel.app/services/service/reviews",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.acknowledged) {
          alert("Review added successfully!!");
        }
      });
  };

  const handleAddReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const textArea = form.value;
    setUserReview(textArea);
  };

  return (
    <div className="flex flex-col">
      <div className="mb-3 xl:w-96">
        <label
          htmlFor="exampleFormControlTextarea1"
          className="form-label inline-block mb-2 font-bold text-2xl"
        >
          {review}
        </label>
        <form action="">
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
            onChange={handleAddReview}
            name="textarea"
          ></textarea>
        </form>
      </div>
      <div>
        <button
          type="button"
          onClick={handleTextAreaTrigger}
          className=" inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          POST
        </button>
      </div>
    </div>
  );
};

export default Reviews;
