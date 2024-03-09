import { useForm } from "react-hook-form";

const DeleteDepartmentModal = ({ toggle }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const onSubmit = handleSubmit(async (formData) => {});

  return (
    <div className="fixed w-full h-full min-w-screen min--screen bg-zinc-900 bg-opacity-60 z-50 p-6 flex justify-center items-center top-0 right-0 left-0 ">
      <div className="md:w-2/3 md:h-auto bg-zinc-100 rounded-md px-5 py-2 max-h-screen overflow-auto duration-300">
        <form className="w-full h-full flex flex-col bg-gray-00">
          <div className="w-full h-12 flex flex-row border-b border-sky-400">
            <div className="w-full h-full flex justify-start items-center">
              <h1 className="text-lg font-medium">Remove Deprtment</h1>
            </div>

            <div className="w-16 h-full bg-gray-00 flex justify-end items-center"></div>
          </div>
          <div className="relative flex-auto w-full p-2">
            <p className="my-4 text-rose-500 text-lg leading-relaxed">
              Are you sure do you want to remove this department?
            </p>

            <p className="my-4 text-zinc-700 text-sm leading-relaxed">
              If you remove this department all the bootom departments will be
              affected!
            </p>
          </div>

          <div className="w-full h-12 flex flex-row justify-end border-t border-sky-200 py-1">
            <div className="w-16 h-full bg-gray-00 flex justify-end items-center flex-row gap-2">
              <button
                onClick={() => toggle({ state: false, id: "" })}
                className="w-auto h-8 bg-sky-100 hover:bg-sky-50 outline outline-sky-400 p-3 flex justify-between items-center rounded-sm text-sm"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-auto h-8 bg-rose-600 hover:bg-rose-500 text-sky-50 outline outline-rose-500 p-3 flex justify-between items-center rounded-sm text-sm"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DeleteDepartmentModal;
