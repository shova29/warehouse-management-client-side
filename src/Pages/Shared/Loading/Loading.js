import React from "react";

const Loading = () => {
  return (
    <div
      className="flex items-center justify-center"
      style={{ height: "100px" }}
    >
      <div
        className="spinner-border animate-spin inline-block text-rose-700 w-8 h-8 border-4 rounded-full"
        role="status"
      >
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
