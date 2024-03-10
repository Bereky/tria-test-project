"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { Tab, Tabs } from "./Tab";
import { FaRegUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  useGetDepartmentByIdQuery,
  useGetDepartmentsQuery,
} from "@/lib/services/Api";
import { useEffect } from "react";
import {
  resetDepartment,
  setCurrent,
} from "@/lib/features/department/departmentSlice";

const DepartmentDetail = () => {
  const param = useParams();

  const id = param.id;

  const { current } = useAppSelector((state) => state.department);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error, refetch } =
    useGetDepartmentByIdQuery({
      id: id,
    });

  useEffect(() => {
    if (data) {
      dispatch(setCurrent(data));
    }
  }, [data]);

  useEffect(() => {
    refetch();
  }, []);

  return (
    <div className="w-full h-full flex flex-col py-8 ">
      <div className="w-full h-auto flex flex-col justify-center items-center gap-5 border-b border-b-zinc-400 py-5">
        <div className="w-20 h-20 bg-zinc-200 rounded-full  flex items-center justify-center outline outline-sky-100">
          <FaRegUser className="text-4xl text-sky-500" />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center gap-1">
          {isFetching && (
            <>
              <div className="w-36 h-10 bg-sky-100"></div>
              <div className="w-36 h-10 bg-sky-100"></div>
            </>
          )}
          {data && current && (
            <>
              <h1 className="text-3xl uppercase font-bold">{current?.name}</h1>
              <h1 className="text-md uppercase font-normal">
                {current?.description}
              </h1>
            </>
          )}
        </div>
      </div>
      <div className="w-full h-full py-5 ">
        <Tabs>
          <Tab label="Managing Department">
            {data && current?.managingDepartment ? (
              <p className="uppercase">
                <span className="font-medium uppercase">
                  {data && current?.managingDepartment?.name}{" "}
                </span>{" "}
                : {data && current?.managingDepartment?.description}
              </p>
            ) : (
              <span className="font-medium">None </span>
            )}
          </Tab>
          <Tab label="Under Management">
            {data && current?.underManagement?.length <= 0 && (
              <span className="font-medium">None</span>
            )}

            {data &&
              current?.underManagement?.map((item: {}) => {
                return (
                  <p className="uppercase">
                    <span className="font-medium uppercase">{item.name} </span>{" "}
                    : {item.description}
                  </p>
                );
              })}
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default DepartmentDetail;
