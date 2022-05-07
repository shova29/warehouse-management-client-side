import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

function CustomLink({ children, to, ...props }) {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        // className="me-8 lg:text-xl sm:text-sm  font-bold"
        className="mr-8 text-base fw-bolder"
        style={{
          color: match ? "lightseagreen" : "black",
          textDecoration: match ? "underline" : "none",
          //   fontSize: match ? "bolder" : "",
          // textDecoration: match ? "underline" : "none",
        }}
        to={to}
        {...props}
      >
        {children}
      </Link>
    </div>
  );
}

export default CustomLink;
