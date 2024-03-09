import Link from "next/link";

const Card = () => {
  return (
    <Link
      href={"/department/1"}
      className="col-span-1 h-40 outline outline-sky-500 bg-sky-50 hover:bg-sky-100 rounded-sm flex flex-col items-center justify-center p-4 gap-1 shadow-lg hover:shadow-md duration-300"
    >
      <h1 className="text-xl uppercase font-bold">CE0</h1>
      <h1 className="text-md uppercase font-normal text-center">
        Cheif Excutive Officer
      </h1>
    </Link>
  );
};

export default Card;
