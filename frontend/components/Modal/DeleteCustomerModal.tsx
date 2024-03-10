"use client";
import {
  resetCustomer,
  setCustomers,
} from "@/lib/features/customer/customerSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { deleteCustomer } from "@/lib/services/common/customer";
import { useRouter, redirect } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from "react-toastify";

const DeleteCustomerModal = ({ toggle }: any) => {
  const { customers, current } = useAppSelector((state) => state.customer);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const DeleteCustomer = async (id: string) => {
    const res: any = await deleteCustomer(id);

    if (res?.data?.success) {
      toggle(false);
      toast.success(res?.data?.message);
      dispatch(setCustomers(res?.data?.data));
    } else {
      toast.error(res?.response?.data.errors.message);
    }
  };

  const handelDelete = () => {
    if (current?.id) {
      DeleteCustomer(current?.id);
    }
  };

  return (
    <>
      {current && (
        <div className="fixed w-full h-full min-w-screen min--screen bg-zinc-900 bg-opacity-60 z-50 p-6 flex justify-center items-center top-0 right-0 left-0 ">
          <div className="md:w-2/3 md:h-auto bg-zinc-100 rounded-md px-5 py-2 max-h-screen overflow-auto duration-300">
            <div className="w-full h-full flex flex-col bg-gray-00">
              <div className="w-full h-12 flex flex-row border-b border-sky-400">
                <div className="w-full h-full flex justify-start items-center">
                  <h1 className="text-lg font-medium">Remove Deprtment</h1>
                </div>

                <div className="w-16 h-full bg-gray-00 flex justify-end items-center"></div>
              </div>
              <div className="relative flex-auto w-full p-2">
                <p className="my-4 text-rose-500 text-lg leading-relaxed">
                  Are you sure do you want to remove this Customer?
                </p>

                <p className="my-4 text-zinc-700 text-sm leading-relaxed">
                  If you continue all data about customer will be lost!
                </p>
              </div>

              <div className="w-full h-12 flex flex-row justify-end border-t border-sky-200 py-1">
                <div className="w-16 h-full bg-gray-00 flex justify-end items-center flex-row gap-2">
                  <button
                    onClick={() => toggle({ state: false, item: {} })}
                    className="w-auto h-8 bg-sky-100 hover:bg-sky-50 outline outline-sky-400 p-3 flex justify-between items-center rounded-sm text-sm"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handelDelete}
                    className="w-auto h-8 bg-rose-600 hover:bg-rose-500 text-sky-50 outline outline-rose-500 p-3 flex justify-between items-center rounded-sm text-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DeleteCustomerModal;
