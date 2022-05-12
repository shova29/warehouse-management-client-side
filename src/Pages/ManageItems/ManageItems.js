import React from "react";
import useInventoryItems from "../../hooks/useInventoryItems";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const ManageItems = () => {
  const { inventoryItems, setInventoryItems } = useInventoryItems();
  const customId = "custom-id-yes";
  const navigate = useNavigate();
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete a item?");
    if (proceed) {
      const url = `https://fast-crag-27449.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = inventoryItems.filter(
            (inventoryItem) => inventoryItem._id !== id
          );
          setInventoryItems(remaining);
          toast.success("Successfully deleted!", {
            toastId: customId,
          });
        });
    }
  };
  return (
    <div className="container mx-auto relative overflow-x-auto  mb-16">
      <div className="mt-12 flex space-x-2 justify-end mr-56 mb-12">
        <div>
          <button
            onClick={() => navigate("/additem")}
            type="button"
            className="inline-block px-6 py-2.5 bg-rose-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-rose-700 hover:shadow-lg focus:bg-rose-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-rose-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Add New Item
          </button>
        </div>
      </div>
      <table className="shadow-md sm:rounded-lg mt-16 mx-auto min-w text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 mr-8">
              Inventory Name
            </th>
            <th scope="col" className="px-12 py-3">
              Image
            </th>
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Quantity
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        {inventoryItems?.map((inventoryItem) => (
          <tbody key={inventoryItem._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 mr-8 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {inventoryItem.name}
              </th>
              <td className="px-6 py-4">
                {" "}
                <img
                  className="w-20"
                  src={inventoryItem.image}
                  alt={inventoryItem.name}
                />
              </td>
              <td className="px-6 py-4"> {inventoryItem.category}</td>
              <td className="px-6 py-4 text-center"> {inventoryItem.price}</td>
              <td className="px-6 py-4 text-center">
                {" "}
                {inventoryItem.quantity}
              </td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleDelete(inventoryItem._id)}
                  className="font-medium text-lg text-rose-600 dark:text-rose-500 hover:underline"
                >
                  <AiFillDelete></AiFillDelete>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>
    </div>
  );
};

export default ManageItems;
