import React from "react";
import useInventoryItems from "../../../hooks/useInventoryItems";
import BestSeller from "../BestSeller/BestSeller";

const BestSellers = () => {
  const { inventoryItems } = useInventoryItems();
  return (
    <>
      <h2 className="inventory-items-title text-center text-4xl font-extrabold mt-12">
        Top Rated<span className="text-rose-500 "> Supplier's </span>
      </h2>
      <div className="container mx-auto py-5 mt-8">
        <div className="row justify-content-center mb-3">
          <div className="col-md-12 col-xl-10">
            <div className="card shadow-0 rounded-3">
              <div className="card-body">
                <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {inventoryItems.slice(9, 13).map((inventoryItem) => (
                    <BestSeller
                      key={inventoryItem._id}
                      inventoryItem={inventoryItem}
                    ></BestSeller>
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

export default BestSellers;
