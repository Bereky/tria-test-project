import { IoIosAddCircleOutline } from "react-icons/io";

const AddButton = ({ onClick }: any) => {
  return (
    <button
      onClick={() => onClick(true)}
      className="w-16 h-9 flex flex-row items-center justify-center gap-1 outline outline-sky-600 bg-sky-600 hover:bg-sky-700 text-sky-50 rounded-sm"
    >
      <IoIosAddCircleOutline />
      Add
    </button>
  );
};

export default AddButton;
