"use client";

import React, { useState } from "react";

import DepartmentDetail from "@/components/department/DepartmentDetail";
import UpdateDepartmentModal from "@/components/Modal/UpdateDepartmentModal";
import DeleteDepartmentModal from "@/components/Modal/DeleteDepartmentModal";
import EditButton from "@/components/Button/EditButton";
import BackButton from "@/components/Button/BackButton";
import DeleteButton from "@/components/Button/DeleteButton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";

interface ModalState {
  state: boolean;
  id: string;
}

const page = () => {
  const { departments, current } = useAppSelector((state) => state.department);
  const dispatch = useAppDispatch();

  const [modalUpdateState, setModalUpdateState] = useState({
    state: false,
    id: "",
  });
  const [modalDeleteState, setModalDeleteState] = useState({
    state: false,
    id: "",
  });

  const toggleUpdateModal = ({ state, id }: ModalState) => {
    if (modalUpdateState.state || state == false) {
      setModalUpdateState({ state: false, id: "" });
    } else {
      setModalUpdateState({ state: true, id: id });
    }
  };
  const toggleDeleteModal = ({ state, id }: ModalState) => {
    if (modalDeleteState.state || state == false) {
      setModalDeleteState({ state: false, id: "" });
    } else {
      setModalDeleteState({ state: true, id: id });
    }
  };

  return (
    <>
      {modalUpdateState.state && (
        <UpdateDepartmentModal toggle={toggleUpdateModal} />
      )}

      {modalDeleteState.state && (
        <DeleteDepartmentModal toggle={toggleDeleteModal} />
      )}

      <div className="w-full h-full flex flex-col">
        <div className="w-full h-auto flex flex-row items-start justify-between gap-10">
          <BackButton />
          <div className="w-auto h-full flex flex-row gap-3 items-center justify-between">
            <EditButton toggle={toggleUpdateModal} />
            <DeleteButton toggle={toggleDeleteModal} />
          </div>
        </div>
        <DepartmentDetail />
      </div>
    </>
  );
};

export default page;
