"use client";

import AddButton from "@/components/Button/AddButton";
import AddCustomerModal from "@/components/Modal/AddCustomerModal";
import DeleteCustomerModal from "@/components/Modal/DeleteCustomerModal";
import UpdateCustomerModal from "@/components/Modal/UpdateCustomerModal";
import CustomerList from "@/components/customer/CustomerList";
import CustomerListLoading from "@/components/customer/CustomerListLoading";
import { setCustomers } from "@/lib/features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { useGetCustomersQuery } from "@/lib/services/Api";
import React, { useEffect, useState } from "react";

const page = () => {
  const { customers } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();

  const [modalAddState, setModalState] = useState(false);
  const [modalUpdateState, setUpdateModalState] = useState({
    state: false,
    item: {},
  });

  const [modalDeleteState, setDeleteModalState] = useState({
    state: false,
    item: {},
  });

  const { isLoading, isFetching, data, error, refetch } =
    useGetCustomersQuery(null);

  const toggleAddModal = (value: boolean) => {
    setModalState(value);
  };

  const toggleDeleteModal = (s: any) => {
    if (modalDeleteState.state || s.state == false) {
      setDeleteModalState({ state: false, item: {} });
    } else {
      setDeleteModalState({ state: true, item: s.item });
    }
  };

  const toggleUpdateModal = (s: any) => {
    if (modalUpdateState.state || s.state == false) {
      setUpdateModalState({ state: false, item: {} });
    } else {
      setUpdateModalState({ state: true, item: s.item });
    }
  };

  useEffect(() => {
    if (data) {
      dispatch(setCustomers(data));
    }
  }, [data, customers]);

  useEffect(() => {
    refetch();
  }, [customers]);

  return (
    <>
      {modalAddState && <AddCustomerModal toggle={toggleAddModal} />}
      {modalDeleteState.state && (
        <DeleteCustomerModal toggle={toggleDeleteModal} />
      )}

      {modalUpdateState.state && (
        <UpdateCustomerModal toggle={toggleUpdateModal} />
      )}

      <div className="w-full h-full flex flex-col">
        <div className="w-full h-full flex flex-col items-start justify-between gap-10">
          <div className="w-full h-full flex flex-row gap-3 items-center justify-between">
            <h1 className="text-3xl ">Customers</h1>
            <AddButton onClick={toggleAddModal} />
          </div>
          {isFetching && <CustomerListLoading />}
          {data && customers && !isFetching && !isLoading && (
            <CustomerList
              data={customers}
              toggleDel={toggleDeleteModal}
              toggleUpdate={toggleUpdateModal}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default page;
