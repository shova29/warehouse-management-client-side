import React from "react";
import useInventoryItems from "../../hooks/useInventoryItems";
import Inventory from "../Inventory/Inventory";

const Inventories = () => {
  const { inventoryItems } = useInventoryItems();
  return (
    <>
      <h2 className="inventories-title text-center text-2xl font-extrabold mt-12">
        Stock Item's of
        <span className="text-rose-500 "> Purfume Pungent Warehouse </span>
      </h2>
      <div className="container mx-auto py-5 mt-8">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 rounded-3">
              <div className="card-body">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {inventoryItems.map((inventoryItem) => (
                    <Inventory
                      key={inventoryItem._id}
                      inventoryItem={inventoryItem}
                    ></Inventory>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Inventories;
