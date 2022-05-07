import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  useEffect(() => {
    fetch("inventory-items.json")
      .then((response) => response.json())
      .then((data) => setInventoryItems(data));
  }, []);
  return [inventoryItems, setInventoryItems];
};

export default useInventoryItems;
