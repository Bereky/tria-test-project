"use client";

import { Tab, Tabs } from "./Tab";
import { FaRegUser } from "react-icons/fa";

const DepartmentDetail = () => {
  return (
    <div className="w-full h-full flex flex-col py-8 ">
      <div className="w-full h-auto flex flex-col justify-center items-center gap-5 border-b border-b-zinc-400 py-5">
        <div className="w-20 h-20 bg-zinc-200 rounded-full  flex items-center justify-center outline outline-sky-100">
          <FaRegUser className="text-4xl text-sky-500" />
        </div>

        <div className="w-full h-full flex flex-col justify-center items-center gap-1">
          <h1 className="text-3xl uppercase font-bold">CE0</h1>
          <h1 className="text-md uppercase font-normal">
            Cheif Excutive Officer
          </h1>
        </div>
      </div>
      <div className="w-full h-full py-5 ">
        <Tabs>
          <Tab label="Managing Department">
            <p className="">
              <span className="font-medium">CEO </span> : CHEIF EXCUTIVE OFFICER
            </p>
          </Tab>
          <Tab label="Under Management">
            <p className="">
              <span className="font-medium">CTO </span> : CHEIF TECHNOLOGY
              OFFICER
            </p>
            <p className="">
              <span className="font-medium">CEO </span> : CHEIF FINANCE OFFICER
            </p>
            <p className="">
              <span className="font-medium">CEO </span> : CHEIF OPERATIO OFFICER
            </p>
          </Tab>
        </Tabs>
      </div>
    </div>
  );
};

export default DepartmentDetail;
