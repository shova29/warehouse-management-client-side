import { useEffect, useState } from "react";

const useInventoryItems = () => {
  const [inventoryItems, setInventoryItems] = useState([]);
  const [spinner, setSpinner] = useState(true);
  useEffect(() => {
    fetch("https://fast-crag-27449.herokuapp.com/inventory")
      .then((response) => response.json())
      .then((data) => {
        setSpinner(false);
        setInventoryItems(data);
      });
  }, []);
  return { inventoryItems, setInventoryItems, spinner };
};

export default useInventoryItems;
