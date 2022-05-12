import React from "react";
import useInventoryItems from "../../../hooks/useInventoryItems";
import SoldItem from "../SoldItem/SoldItem";

const SoldItems = () => {
  const { inventoryItems } = useInventoryItems();
  const soldItems = inventoryItems.filter((item) => item.quantity === 0);
  return (
    <div className="container my-24 mx-auto">
      <section className="mb-32 text-gray-800">
        {" "}
        <h2 className="sold-items-title text-rose-500 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold mt-12">
          Sold<span className="text-black "> Item's </span>
        </h2>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-2 gap-12 mt-12">
          {" "}
          {soldItems.slice(0, 3).map((soldItem) => (
            <SoldItem key={soldItem?._id} soldItem={soldItem}></SoldItem>
          ))}{" "}
        </div>
      </section>
    </div>
  );
};

export default SoldItems;
