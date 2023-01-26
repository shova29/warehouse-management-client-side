import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AiFillDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";
const MyItems = () => {
  const [user] = useAuthState(auth);
  const [items, setItems] = useState([]);
  const customId = "custom-id-yes";
  const navigate = useNavigate();

  useEffect(() => {
    const getItems = async () => {
      console.log(user.email);
      const email = user?.email;
      const url = `https://warehouse-management-server-side-shova29-2up0sif5l.vercel.app/item?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setItems(data);
      } catch (error) {
        console.log(error.message);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/signin");
        }
      }
    };
    getItems();
  }, [user]);

  const handleItemsDelete = (id) => {
    const proceed = window.confirm("Are you sure to delete a item?");
    if (proceed) {
      const url = `https://warehouse-management-server-side-shova29-2up0sif5l.vercel.app/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remaining = items.filter((item) => item._id !== id);
          setItems(remaining);
          toast.success("Successfully deleted!", {
            toastId: customId,
          });
        });
    }
  };
  return (
    <div className="container mx-auto relative overflow-x-auto  mb-28">
      <table className="shadow-md sm:rounded-lg mt-16 mx-auto min-w text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3 mr-8">
              Email
            </th>
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
        {items.map((item) => (
          <tbody key={item._id}>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
              <th
                scope="row"
                className="px-6 py-4 mr-8 font-medium text-gray-900 dark:text-white whitespace-nowrap"
              >
                {item?.email}
              </th>
              <td className="px-6 py-4"> {item?.name}</td>
              <td className="px-6 py-4">
                {" "}
                <img className="w-20" src={item.image} alt={item.name} />
              </td>
              <td className="px-6 py-4"> {item.category}</td>
              <td className="px-6 py-4 text-center"> {item.price}</td>
              <td className="px-6 py-4 text-center"> {item.quantity}</td>
              <td className="px-6 py-4 text-center">
                <button
                  onClick={() => handleItemsDelete(item._id)}
                  className="font-medium text-lg text-rose-600 dark:text-rose-500 hover:underline"
                >
                  <AiFillDelete></AiFillDelete>
                </button>
              </td>
            </tr>
          </tbody>
        ))}
      </table>{" "}
    </div>
  );
};

export default MyItems;
