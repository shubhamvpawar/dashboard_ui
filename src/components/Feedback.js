import React from "react";

const Feedback = () => {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md col-span-1">
      <h2 className="text-xl mb-4">Customer's Feedback</h2>
      <div className="border-b-2 border-gray-400">
        <h3 className="font-bold">Jenny Wilson</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="text-sm">
          The food was excellent and so was the service. I has the mushroom
          risotto with scallops which was awesome. I had a burger over greens
          (glutten-free) which was also very good. They were very conscientious
          about gluten allergies.
        </p>
      </div>
      <br></br>
      <div className="border-b-2 border-gray-400">
        <h3 className="font-bold">Dianne Russel</h3>
        <p>⭐⭐⭐⭐⭐</p>
        <p className="text-sm">
          We enjoyed the Eggs Benedict served on homemade focaccia bread and hot
          coffee. Perfect service.
        </p>
      </div>
      <br></br>

      <div className="">
        <h3 className="font-bold">Devon Lane</h3>
        <p>⭐⭐⭐⭐</p>
        <p className="text-sm">
          Normally wings are wings but theirs are lean meaty and tender and ...
        </p>
      </div>
    </div>
  );
};

export default Feedback;
