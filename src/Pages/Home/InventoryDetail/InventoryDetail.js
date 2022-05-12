import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useInventoryDetail from "../../../hooks/useInventoryDetail";

const InventoryDetail = () => {
  const { inventoryId } = useParams();
  const { inventory, reload, setReload } = useInventoryDetail(inventoryId);
  const customId = "custom-id-yes";
  const navigate = useNavigate();
  let { quantity } = inventory;

  // handle Restock quantity
  const handleRestock = (event) => {
    event.preventDefault();
    let addQuantity = parseInt(event.target.quantity.value);
    if (addQuantity < 0) {
      toast.error("Please Add Positive Quantity", {
        toastId: customId,
      });
      return;
    }
    if (addQuantity >= 0) {
      quantity = quantity + addQuantity;
      const updatedQuantity = { quantity };
      const url = `https://fast-crag-27449.herokuapp.com/inventory/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          event.target.reset();
          setReload(!reload);
          toast.success("Successfully Restock the Items!", {
            toastId: customId,
          });
        });
    }
  };

  // handle Delivered
  const handleDelivered = () => {
    if (quantity >= 0) {
      const quantity = parseInt(inventory?.quantity) - 1;
      const updatedQuantity = { quantity };
      const url = `https://fast-crag-27449.herokuapp.com/inventory/${inventoryId}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(updatedQuantity),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const proceed = window.confirm("Want to Delivered?");
          if (proceed) {
            setReload(!reload);
            toast("Successfully Delivered!", {
              toastId: customId,
            });
          }
        });
    }
  };
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
                  {inventory?.name}
                </h2>
                <p className="text-gray-800 mb-2 pb-2 font-bold">
                  Description:{" "}
                  <span className="text-gray-500">
                    {inventory?.description}
                  </span>
                </p>
                <p className="text-gray-700 text-sm font-bold mb-2">
                  Id:
                  <span className="text-rose-700"> {inventory?._id}</span>
                </p>
                <p className="text-gray-700 text-sm font-bold mb-2">
                  Price:
                  <span className="text-rose-700"> $ {inventory?.price}</span>
                </p>
                <p className="text-gray-700 text-sm font-bold mb-4">
                  Quantity:
                  <span className="text-rose-700">
                    {" "}
                    {inventory?.quantity === 0
                      ? "Sold Out"
                      : inventory?.quantity}
                  </span>
                </p>
                <p className="text-gray-700 font-bold text-sm mb-6">
                  Supplier Name:
                  <span className="text-rose-700">
                    {" "}
                    {inventory?.supplierName}
                  </span>
                </p>
                <button
                  onClick={() => handleDelivered()}
                  type="button"
                  className="inline-block px-7 py-3 bg-rose-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
                >
                  Delivered
                </button>
                <div class="block pt-6 rounded-lg max-w-sm">
                  <form onSubmit={handleRestock}>
                    <input
                      className="block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                      type="number"
                      name="quantity"
                      id=""
                      placeholder="Add Quantity"
                      required
                      autoComplete="off"
                    />

                    <button
                      type="submit"
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
      <div className="mt-12 flex space-x-2 justify-center mb-12">
        <div>
          <button
            onClick={() => navigate("/manageitems")}
            type="button"
            className="inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Manage Inventories
          </button>
        </div>
      </div>
    </div>
  );
};

export default InventoryDetail;
