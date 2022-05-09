import React from "react";

const BestSeller = ({ inventoryItem }) => {
  const { name, image, price, supplierName, category } = inventoryItem;
  return (
    <div className="mx-auto bg-image hover-zoom rounded ">
      <img src={image} alt={name} className="w-100" />
      <div className="col-md-6 col-lg-6 col-xl-6">
        <h5>{name}</h5>
        <p className="text-truncate mb-4 mb-md-0">{supplierName}</p>
        <h4 className="mb-1 me-1">$ {price}</h4>
        <h6 className="text-success">Category: {category}</h6>
      </div>
    </div>
  );
};

export default BestSeller;
