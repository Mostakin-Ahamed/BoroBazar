import { useState } from "react";

const Reviews = () => {
  const [reviews] = useState([
    {
      id: 1,
      name: "John Doe",
      rating: 4,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      id: 2,
      name: "Jane Smith",
      rating: 5,
      comment: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 3,
      name: "Alice Johnson",
      rating: 3,
      comment: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ]);

  return (
    <section className="mt-20 section-container w-9/12 mx-auto">
      <div className="text-center space-y-2 mt-8">
        <h2 className="font-bold text-3xl">Testimonials</h2>
        <p>Discover what our clients are saying about us.</p>
      </div>
      <div className="flex justify-center space-x-8 mt-10">
        {reviews.map((review) => (
          <div key={review.id} className="flex flex-col items-center space-y-4">
            <img src={`https://i.pravatar.cc/150?img=${review.id}`} alt="avatar" className="w-24 h-24 rounded-full" />
            <h3 className="font-semibold">{review.name}</h3>
            <div className="flex items-center space-x-2">
              {[...Array(review.rating)].map((_, index) => (
                <svg key={index} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 .155a.75.75 0 01.673.418l1.882 3.815 4.21.614a.75.75 0 01.416 1.279l-3.046 2.97.719 4.192a.75.75 0 01-1.088.791L10 12.347l-3.766 1.98a.75.75 0 01-1.088-.79l.72-4.193L.818 6.281a.75.75 0 01.416-1.28l4.21-.613L9.327.573A.75.75 0 0110 .155zm0 2.286L8.615 5.71a.75.75 0 01-.558.41l-3.07.447 2.228 2.172a.75.75 0 01.216.664l-.526 3.067 2.769-1.456a.75.75 0 01.698 0l2.768 1.456-.527-3.067a.75.75 0 01.216-.664l2.229-2.172-3.07-.447a.75.75 0 01-.558-.41L10 2.441v.001z" clipRule="evenodd" />
                </svg>
              ))}
            </div>
            <p className="text-center">{review.comment}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Reviews;
