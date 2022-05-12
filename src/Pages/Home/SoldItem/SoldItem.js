import React from "react";

const SoldItem = ({ soldItem }) => {
  const { name, image, quantity, price, supplierName, ratings, category } =
    soldItem;

  return (
    <div className="flex justify-center">
      <div className="container mx-auto flex flex-col md:flex-row sm:items-center rounded-lg bg-white shadow-md">
        <img
          className="w-fit h-full  rounded-t-lg md:rounded-none md:rounded-l-lg"
          src={image}
          alt={image}
        />
        <div className="p-2 flex flex-col">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-600 hover:text-rose-600 text-base">
            Price: $ <span> {price}</span>
          </p>
          <p className="text-gray-700 text-base mt-1">
            Quantity:{" "}
            <span className="text-rose-700">
              {quantity === 0 ? "Sold Out" : quantity}
            </span>
          </p>
          <h6 className="text-black-500 font-bold mt-1">{category}</h6>
        </div>
      </div>
    </div>
  );
};

export default SoldItem;
