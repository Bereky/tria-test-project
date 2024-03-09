import { FaEdit } from "react-icons/fa";

const EditButton = ({ toggle }: any) => {
  return (
    <button
      onClick={() => toggle(true)}
      className="w-10 h-8 outline outline-sky-600 bg-sky-600 hover:bg-sky-700 text-sky-50 rounded-sm flex items-center justify-center"
    >
      <FaEdit />
    </button>
  );
};

export default EditButton;
