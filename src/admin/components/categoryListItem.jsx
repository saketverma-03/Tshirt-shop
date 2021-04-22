import React from "react";
import { toast } from "react-toastify";
import { isAuthanticated } from "../../server";

// Takes in Following parameters
const categoryListItem = ({ name, handleEdit, handleDelete }) => (
  <>
    <li className="flex items-baseline p-2  bg-gray-100 border-2 border-gray-200">
      <span className="flex-1">{name}</span>
      <button
        className="px-2 py-1 text-white mx-1 bg-red-500 rounded"
        onClick={handleDelete}
      >
        Delete
      </button>
      <button
        className="px-2 py-1 text-white mx-1 bg-green-500 rounded"
        onClick={handleEdit}
      >
        Edit
      </button>
    </li>
  </>
);

export default categoryListItem;
