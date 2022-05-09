import React from "react";
import useInventoryItems from "../../hooks/useInventoryItems";
import { AiFillDelete } from "react-icons/ai";
import { toast } from "react-toastify";

const ManageItems = () => {
  const { inventoryItems, setInventoryItems } = useInventoryItems();
  const customId = "custom-id-yes";
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete a item?");
    if (proceed) {
      const url = `http://localhost:5000/inventory/${id}`;
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
              Delete
            </th>
          </tr>
        </thead>
        {inventoryItems?.map((inventoryItem) => (
          <tbody>
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
