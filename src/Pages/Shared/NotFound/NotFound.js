import React from "react";
import notFound from "../../../Assets/Images/not-found/oops-404-error.png";

const NotFound = () => {
  return (
    <div className="container mx-auto">
      <img
        className="mt-20 fluid rounded w-80 h-80 mx-auto block"
        src={notFound}
        alt={notFound}
      />
    </div>
  );
};

export default NotFound;
