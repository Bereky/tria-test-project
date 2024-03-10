"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";

const Header = () => {
  const [sidebar, setSidebar] = useState(false);

  const pathname = usePathname();

  const isActive = (route: string) => {
    if (pathname === route || pathname.startsWith(route + "/")) {
      return "bg-sky-600 text-sky-50";
    }
    return "";
  };

  return (
    <div className="w-full h-20 bg-zinc-00 text-sky-600 flex flex-row justify-between items-center z-20 right-0 border-b-2 border-sky-700 border-opacity-35 md:px-10 px-5">
      <div className="w-64 h-full bg-slate-00 flex justify-start items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-extrabold">TRIA</h1>
        </Link>
      </div>

      <div className="w-auto h-full bg-slate-700 flex justify-center items-center relative">
        <div className=" w-10 h-full  md:hidden flex justify-center items-center absolute right-0 gap-3">
          <button
            onClick={() => setSidebar(!sidebar)}
            className="flex items-center justify-center h-12 w-12  text-3xl"
          >
            {sidebar ? "X" : <FaBars />}
          </button>
        </div>

        {sidebar && (
          <div className="h-36 w-full min-w-full fixed bg-sky-100 top-20 left-0 right-0 ">
            <div className="w-full h-full bg-slate-00 flex justify-center items-center flex-col absolute right-0 gap-4">
              <Link href={"/department"}>
                <button
                  className={`${isActive(
                    "/department"
                  )} w-48 h-9 outline  outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300`}
                >
                  Department
                </button>
              </Link>

              <Link href={"/customer"}>
                <button
                  className={`${isActive(
                    "/customer"
                  )} w-48 h-9 outline  outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300`}
                >
                  Customers
                </button>
              </Link>
            </div>
          </div>
        )}
        <div className="hidden w-auto h-full bg-slate-00 md:flex justify-center items-center absolute right-0 gap-2">
          <Link href={"/department"}>
            <button
              className={`${isActive(
                "/department"
              )} w-36 h-9 outline  outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300`}
            >
              Department
            </button>
          </Link>

          <Link href={"/customer"}>
            <button
              className={`${isActive(
                "/customer"
              )} w-36 h-9 outline  outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300`}
            >
              Customers
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
