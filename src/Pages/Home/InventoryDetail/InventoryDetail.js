import React from "react";
import { useParams } from "react-router-dom";
import useInventoryDetail from "../../../hooks/useInventoryDetail";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const [inventory] = useInventoryDetail(inventoryId);
  return (
    <div className="container my-24 px-12 mx-auto">
      <section className="mb-32 text-gray-800 text-center md:text-left">
        <div className="block rounded-lg shadow-lg bg-white">
          <div className="flex flex-wrap items-center">
            <div className="grow-0 shrink-0 basis-auto block lg:flex justify-cenetr items-center w-full lg:w-6/12 xl:w-4/12 sm:3/12 md:w-7/12 md:mx-auto">
              <img
                src={inventory.image}
                alt={inventory.name}
                className="mx-auto w-6/12 rounded-t-lg lg:rounded-tr-none lg:rounded-bl-lg"
              />
            </div>
            <div className="container mx-auto grow-0 shrink-0 basis-auto w-full lg:w-6/12 xl:w-8/12">
              <div className="px-6 py-12 md:px-12">
                <h2 className="text-3xl font-bold mb-6 pb-2">
                  {inventory.name}
                </h2>
                <p className="text-gray-800 mb-2 pb-2 font-bold">
                  Description:{" "}
                  <span className="text-gray-500">{inventory.description}</span>
                </p>
                <p className="text-gray-700 text-sm font-bold mb-2">
                  Price:
                  <span className="text-rose-700"> ${inventory.price}</span>
                </p>
                <p className="text-gray-700 text-sm font-bold mb-4">
                  Quantity:
                  <span className="text-rose-700"> {inventory.quantity}</span>
                </p>
                <p className="text-gray-700 font-bold text-sm mb-6">
                  Supplier Name:
                  <span className="text-rose-700">
                    {" "}
                    {inventory.supplierName}
                  </span>
                </p>

                <button
                  type="button"
                  className="inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delivered
                </button>
                <div class="block pt-6 rounded-lg max-w-sm">
                  <form>
                    <input
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="number"
                      name="address"
                      id=""
                      placeholder="Add Quantity"
                      required
                      autoComplete="off"
                    />

                    <button
                      type="button"
                      className="mt-4 inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                      Restock
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InventoryDetail;
