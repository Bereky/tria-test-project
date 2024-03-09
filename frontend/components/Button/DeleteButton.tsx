import { FaTrashAlt } from "react-icons/fa";

const DeleteButton = ({ toggle }: any) => {
  return (
    <button
      onClick={() => toggle({ state: true, id: "" })}
      className="w-10 h-8 outline outline-rose-500 bg-rose-600 hover:bg-rose-500 text-sky-50 rounded-sm flex items-center justify-center"
    >
      <FaTrashAlt />
    </button>
  );
};

export default DeleteButton;
