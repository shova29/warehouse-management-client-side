import React from "react";
import useInventoryItems from "../../../hooks/useInventoryItems";
import Loading from "../../Shared/Loading/Loading";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const { inventoryItems, spinner } = useInventoryItems();
  return (
    <div id="inventory-items" className="container mx-auto mb-12">
      <h2 className="inventory-items-title text-center lg:text-4xl font-extrabold mt-5">
        Our <span className="text-rose-500 ">Inventory </span>Items
      </h2>
      <div className="row">
        {spinner ? (
          <div className="container mt-6">
            <Loading></Loading>
          </div>
        ) : (
          <div className="inventory-items-container container mx-auto mt-16 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {inventoryItems.slice(0, 6).map((inventoryItem) => (
              <InventoryItem
                key={inventoryItem._id}
                inventoryItem={inventoryItem}
              ></InventoryItem>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default InventoryItems;
