import React from "react";
import { Link } from "react-router-dom";

function UpdateCategory() {
  return (
    <div className="text-white">
      <h3>Update Category under progress</h3>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
    </div>
  );
}

export default UpdateCategory;
