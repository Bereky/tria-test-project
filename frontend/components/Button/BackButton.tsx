import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
  return (
    <div className="w-auto h-full flex flex-row gap-3 items-center justify-between">
      <Link
        href={"/department"}
        className="w-9 h-8 outline outline-zinc-300 bg-zinc-50 hover:bg-zinc-400 text-zinc-500 rounded-sm flex items-center justify-center"
      >
        <FaArrowLeft />
      </Link>
    </div>
  );
};

export default BackButton;
