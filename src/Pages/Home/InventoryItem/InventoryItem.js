import React from "react";
import { useNavigate } from "react-router-dom";

const InventoryItem = ({ inventoryItem }) => {
  const { _id, name, image, shortDescription, price, quantity, supplierName } =
    inventoryItem;
  const navigate = useNavigate();
  const navigateToInventoryDetail = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="px-4 container mx-auto flex justify-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300">
      <div className="overflow-x-hidden  rounded-lg shadow-lg bg-white md:w-96 sm:w-fit">
        <a href="#!" className="flex flex-col items-center">
          <img className="rounded-t-lg pt-4 w-1/2" src={image} alt="" />
        </a>
        <div className="p-6">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{name}</h5>
          <p className="text-gray-500 font-bold text-sm mb-4">
            {shortDescription}
          </p>
          <p className="text-gray-700 text-sm font-bold mb-4 mt-2">
            Price:
            <span className="text-rose-700"> ${price}</span>
          </p>
          <p className="text-gray-700 text-sm font-bold mb-4">
            Quantity:
            <span className="text-rose-700"> {quantity}</span>
          </p>
          <p className="text-gray-700 font-bold text-sm">
            Supplier Name:
            <span className="text-rose-700"> {supplierName}</span>
          </p>
        </div>
        <div className="p-6">
          <button
            onClick={() => navigateToInventoryDetail(_id)}
            type="button"
            className="inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Stock Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryItem;
