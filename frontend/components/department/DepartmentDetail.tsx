"use client";

import { useRouter, usePathname, useParams } from "next/navigation";
import { Tab, Tabs } from "./Tab";
import { FaRegUser } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import {
  useGetDepartmentByIdQuery,
  useGetDepartmentsQuery,
} from "@/lib/services/department/departmentApi";
import { useEffect } from "react";
import { setCurrent } from "@/lib/features/department/departmentSlice";

const DepartmentDetail = () => {
  const param = useParams();

  const id = param.id;

  const { departments } = useAppSelector((state) => state.department);
  const dispatch = useAppDispatch();

  const { isLoading, isFetching, data, error } = useGetDepartmentByIdQuery({
    id: id,
  });

  useEffect(() => {
    console.log(data);
    if (data) {
      dispatch(setCurrent(data));
    }
  }, [data]);

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
          {data && (
            <>
              <h1 className="text-3xl uppercase font-bold">{data?.name}</h1>
              <h1 className="text-md uppercase font-normal">
                {data?.description}
              </h1>
            </>
          )}
        </div>
      </div>
      <div className="w-full h-full py-5 ">
        <Tabs>
          <Tab label="Managing Department">
            {data?.managingDepartment ? (
              <p className="">
                <span className="font-medium">
                  {data?.managingDepartment?.name}{" "}
                </span>{" "}
                : {data?.managingDepartment.description}
              </p>
            ) : (
              <span className="font-medium">None </span>
            )}
          </Tab>
          <Tab label="Under Management">
            {data?.underManagement.length <= 0 && (
              <span className="font-medium">None</span>
            )}

            {data?.underManagement?.map((item: {}) => {
              return (
                <p className="">
                  <span className="font-medium">{item.name} </span> :{" "}
                  {item.description}
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
