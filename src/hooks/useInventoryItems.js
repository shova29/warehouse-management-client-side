import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://warehouse-management-server-side-shova29-2up0sif5l.vercel.app/inventory")
      .then((response) => response.json())
      .then((data) => {
        setSpinner(false);
        setInventoryItems(data);
      });
  }, []);
  return { inventoryItems, setInventoryItems, spinner };
};

export default useInventoryItems;
