"use client";

import AddButton from "@/components/Button/AddButton";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const page = () => {
  const [modalState, setModalState] = useState(false);

  const toggleModal = (value: boolean) => {
    setModalState(value);
  };

  return (
    <div className="w-full h-full flex flex-col">
      <div className="w-full h-full flex flex-col items-start justify-between gap-10">
        <div className="w-full h-full flex flex-row gap-3 items-center justify-between">
          <h1 className="text-3xl ">Customers</h1>
          <AddButton onClick={toggleModal} />
        </div>

        <div className="w-full h-auto min-h-80 bg-sky-100 p-3 flex justify-start items-center flex-col overflow-x-auto table-container rounded-sm">
          <div className="w-full h-auto flex justify-start items-center bg-gray-00">
            <table className="w-full table-auto borde border-collapse text-s text-sky-800">
              <thead className="w-full bg-gray-00 border-b border-sky-400  h-11 bg-gray-70">
                <tr>
                  <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                    Full Name
                  </th>
                  <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                    Email
                  </th>
                  <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                    Address
                  </th>
                  <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-11">
                  <td className="borde text-start pr-3 whitespace-nowrap">
                    Abebe Kebene
                  </td>
                  <td className="borde text-start pr-3 whitespace-nowrap">
                    customer@gmail.xom
                  </td>
                  <td className="borde text-start pr-3 whitespace-nowrap">
                    Addis Ababa
                  </td>

                  <td className="borde space-x-2 flex justify-start items-center h-11">
                    <button className="w-7 h-6 outline outline-sky-600 bg-sky-600 hover:bg-sky-700 text-sky-50 rounded-sm flex items-center justify-center">
                      <FaEdit className="text-sm" />
                    </button>
                    <button className="w-7 h-6 outline outline-rose-600 bg-rose-600 hover:bg-rose-700 text-sky-50 rounded-sm flex items-center justify-center">
                      <FaTrash className="text-sm" />
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
