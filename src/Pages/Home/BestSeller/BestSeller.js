import React from "react";
import Rating from "react-rating";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BestSeller = ({ inventoryItem }) => {
  const { name, image, price, supplierName, ratings, category } = inventoryItem;
  return (
    <div className="mx-auto rounded">
      <div className="transition transform hover:-translate-y-2 motion-reduce:transition-none motion-reduce:hover:transform-non">
        <img src={image} alt={name} className="" />
      </div>

      <div className="text-center mt-1 col-md-6 col-lg-6 col-xl-6">
        <h5 className="font-bold">{name}</h5>
        <p className="text-gray-500 font-bold mb-2 mb-md-0 hover:text-rose-600">
          {supplierName}
        </p>
        <h4 className="text-rose-600 font-bold">
          $ <span>{price}</span>
        </h4>
        <h4 className="mt-1">
          <Rating
            initialRating={ratings}
            emptySymbol={<FontAwesomeIcon icon={faStar} />}
            fullSymbol={
              <FontAwesomeIcon style={{ color: "orange" }} icon={faStar} />
            }
            readonly
          ></Rating>
        </h4>
        <h6 className="text-rose-500 font-bold mt-1">{category}</h6>
      </div>
    </div>
  );
};

export default BestSeller;
