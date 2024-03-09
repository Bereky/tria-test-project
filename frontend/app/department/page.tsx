"use client";

import { useState } from "react";

import CardContainer from "@/components/department/CardContainer";
import AddDepartmentModal from "@/components/Modal/AddDepartmentModal";
import AddButton from "@/components/Button/AddButton";

const page = () => {
  const [modalState, setModalState] = useState(false);

  const toggleModal = (value: boolean) => {
    setModalState(value);
  };

  return (
    <div className="">
      {modalState && <AddDepartmentModal toggle={toggleModal} />}
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col justify-between gap-10">
          <div className="w-full h-full flex flex-row gap-3 items-center justify-between">
            <h1 className="text-3xl ">Departments</h1>
            <AddButton onClick={toggleModal} />
          </div>
          <CardContainer />
        </div>
      </div>
    </div>
  );
};

export default page;
