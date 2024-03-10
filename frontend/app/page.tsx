import Link from "next/link";

export default function Home() {
  return (
    <main className="w-full h-full md:p-10 space-y-10">
      <div className="w-full h-auto flex justify-center items-center bg-sky-00 flex-col">
        <h1 className="md:text-4xl text-3xl text-center font-bold uppercase ">
          A Small Application to Manage <br />
          <span className="bg-gradient-to-r from-rose-600 via-sky-500  to-blue-600 bg-clip-text text-transparent">
            Department Heirarchy <br />
          </span>
          &
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-sky-500  to-rose-600 bg-clip-text text-transparent">
            Customer Data{" "}
          </span>
          <br />
          in a Mid-level Organization
        </h1>
      </div>
      <div className="w-full h-auto bg-slate-00 flex justify-center items-center absolute right-0 gap-3">
        <Link href={"/department"}>
          <button className="w-36 h-9 outline  text-sky-700 outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300">
            Department
          </button>
        </Link>

        <Link href={"/customer"}>
          <button className="w-36 h-9 outline  text-sky-700 outline-sky-600 hover:bg-sky-600 hover:text-sky-50 rounded-sm duration-300">
            Customers
          </button>
        </Link>
      </div>
    </main>
  );
}
