"use client";

import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

const Header = () => {
  const pathname = usePathname();

  const isActive = (route: string) => {
    if (pathname === route || pathname.startsWith(route + "/")) {
      return "bg-sky-600 text-sky-50";
    }
    return "";
  };
  return (
    <div className="w-full h-20 bg-zinc-00 text-sky-600 flex flex-row justify-between items-center z-20 right-0 border-b-2 border-sky-700 border-opacity-35 px-10">
      <div className="w-64 h-full bg-slate-00 flex justify-start items-center">
        <Link href={"/"}>
          <h1 className="text-4xl font-extrabold">TRIA</h1>
        </Link>
      </div>

      <div className="w-auto h-full bg-slate-700 flex justify-center items-center relative">
        <div className="w-auto h-full bg-slate-00 flex justify-center items-center absolute right-0 gap-2">
          <Link href={"/department"}>
            <button
              className={`${isActive(
                "/department"
              )} w-36 h-9 outline bg-sky-50 outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300`}
            >
              Department
            </button>
          </Link>

          <Link href={"/customer"}>
            <button
              className={`${isActive(
                "/customer"
              )} w-36 h-9 outline bg-sky-50 outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300`}
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
