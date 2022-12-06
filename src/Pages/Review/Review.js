import React, { useEffect, useState } from 'react';
import EachReview from '../EachReview/EachReview';

const Review = () => {
    const [reviews, setReviews] = useState([]);
            
    useEffect(() => {
        fetch(
          "https://service-review-server-zayed-fahim.vercel.app/services/service/reviews/review"
        )
          .then((res) => res.json())
          .then((data) => setReviews(data));
    },[])
    console.log(reviews)
    return (
      <div>
        <div>
          <div class="text-center md:max-w-xl lg:max-w-3xl mx-auto">
            <h3 class="text-5xl font-bold mb-6 text-gray-800">Testimonials</h3>
            <p class="mb-6 pb-2 md:mb-12 md:pb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit,
              error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
          </div>
        </div>
        <div className='flex container mx-auto gap-20'>
          {reviews.map((eachReview) => (
            <EachReview
              eachReview={eachReview}
              key={eachReview._id}
            ></EachReview>
          ))}
        </div>
      </div>
    );
};

export default Review;