import Link from "next/link";

import { IoIosAddCircleOutline } from "react-icons/io";
import Card from "./Card";
import AddButton from "./Button/AddButton";

const CardContainer = () => {
  return (
    <div className="w-full h-auto grid md:grid-cols-4 gap-5">
      <Card />
      <Card />
      <Card />
      <Card />

      <button className="col-span-1 h-40 outline outline-sky-500 bg-sky-50 hover:bg-sky-100 rounded-sm flex flex-col items-center justify-center p-4 gap-1  shadow-lg hover:shadow-md duration-300">
        <h1 className="text-xl uppercase font-bold">CT0</h1>
        <h1 className="text-md uppercase font-normal">
          Cheif Technology Officer
        </h1>
      </button>

      <button className="col-span-1 h-40 outline outline-sky-500 bg-sky-50 hover:bg-sky-100 rounded-sm flex flex-col items-center justify-center p-4 gap-1   shadow-lg hover:shadow-md duration-300">
        <h1 className="text-xl uppercase font-bold">CF0</h1>
        <h1 className="text-md uppercase font-normal">Cheif Finance Officer</h1>
      </button>
    </div>
  );
};

export default CardContainer;
