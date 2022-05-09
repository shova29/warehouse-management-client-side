import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/inventory")
      .then((response) => response.json())
      .then((data) => {
        setSpinner(false);
        setInventoryItems(data);
      });
  }, []);
  return { inventoryItems, spinner };
};

export default useInventoryItems;
