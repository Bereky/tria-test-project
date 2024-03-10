"use client";

import { useEffect, useState } from "react";

import CardContainer from "@/components/department/CardContainer";
import AddDepartmentModal from "@/components/Modal/AddDepartmentModal";
import AddButton from "@/components/Button/AddButton";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetDepartmentsQuery } from "@/lib/services/Api";
import CardContainerLoading from "@/components/department/CardContainerLoading";
import { setDepartments } from "@/lib/features/department/departmentSlice";

const page = () => {
  const { departments } = useAppSelector((state) => state.department);
  const dispatch = useAppDispatch();

  const [modalState, setModalState] = useState(false);

  const { isLoading, isFetching, data, error, refetch } =
    useGetDepartmentsQuery(null);

  const toggleModal = (value: boolean) => {
    setModalState(value);
  };

  useEffect(() => {
    if (data) {
      dispatch(setDepartments(data));
    }
  }, [data, departments]);

  useEffect(() => {
    refetch();
  }, [departments]);

  return (
    <div className="">
      {modalState && <AddDepartmentModal toggle={toggleModal} />}
      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col justify-between gap-10">
          <div className="w-full h-full flex flex-row gap-3 items-center justify-between">
            <h1 className="text-3xl ">Departments</h1>
            <AddButton onClick={toggleModal} />
          </div>
          {isFetching && <CardContainerLoading />}
          {data && departments && <CardContainer data={departments} />}
        </div>
      </div>
    </div>
  );
};

export default page;
