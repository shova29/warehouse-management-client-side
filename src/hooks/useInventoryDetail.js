import { useEffect, useState } from "react";

const useInventoryDetail = (inventoryId) => {
  const [inventory, setInventory] = useState({});
  const [reload, setReload] = useState(false);
  useEffect(() => {
    const url = `http://localhost:5000/inventory/${inventoryId}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => setInventory(data));
  }, [inventoryId, reload]);

  return { inventory, reload, setReload };
};

export default useInventoryDetail;
