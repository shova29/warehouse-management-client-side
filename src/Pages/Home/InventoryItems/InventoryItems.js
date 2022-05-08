import React from "react";
import useInventoryItems from "../../../hooks/useInventoryItems";
import InventoryItem from "../InventoryItem/InventoryItem";

const InventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useInventoryItems();
  return (
    <div id="inventory-items" className="px-4 container mx-auto mb-12">
      <div className="row">
        <h2 className="inventory-items-title text-center text-4xl font-extrabold mt-5">
          Our <span className="text-rose-500 ">Inventory </span>Items
        </h2>
        <div className="inventory-items-container mt-12 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {inventoryItems.slice(0, 6).map((inventoryItem) => (
            <InventoryItem
              key={inventoryItem.id}
              inventoryItem={inventoryItem}
            ></InventoryItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InventoryItems;
