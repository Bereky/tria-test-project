import { setDepartments } from "@/lib/features/department/departmentSlice";
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { createDepartment } from "@/lib/services/common/department";
import { Field, FieldValues, useForm } from "react-hook-form";

import { toast, ToastContainer } from "react-toastify";

type Department = {
  id: string;
  name: string;
  description: string;
  managingDepartmentId: string;
  createdAt: string;
};

const AddDepartmentModal = ({ toggle }: any) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setError,
  } = useForm();

  const { departments } = useAppSelector((state) => state.department);
  const dispatch = useAppDispatch();

  const CreateDepartment = async (FD: FieldValues) => {
    const res: any = await createDepartment(FD);

    if (res?.data?.success) {
      toggle(false);
      toast.success(res?.data?.message);
      dispatch(setDepartments(res?.data?.data));
    } else {
      if (res?.message) {
        return toast.error(res.message);
      }
      toast.error(res?.response?.data.errors.message);
    }
  };

  const onSubmit = handleSubmit(async (formValue: FieldValues) => {
    CreateDepartment(formValue);
  });

  return (
    <div className="fixed w-full h-full min-w-screen min--screen bg-zinc-900 bg-opacity-60 z-50 p-6 flex justify-center items-center top-0 right-0 left-0 ">
      <div className="md:w-1/2 w-3/4 md:h-auto bg-zinc-100 rounded-md px-5 py-2 max-h-screen overflow-auto duration-300">
        {departments ? (
          <form
            onSubmit={onSubmit}
            className="w-full h-full flex flex-col bg-gray-00"
          >
            <div className="w-full h-12 flex flex-row border-b border-sky-400">
              <div className="w-full h-full flex justify-start items-center">
                <h1 className="text-lg font-medium">Add New Deprtment</h1>
              </div>

              <div className="w-16 h-full bg-gray-00 flex justify-end items-center"></div>
            </div>
            <div className="w-full h-full bg-gray-00 flex justify-start items-center flex-col py-2">
              <div className="w-full h-auto grid md:grid-cols- grid-cols-1 gap-y-4 gap-x-4 bg-gray-00 py-2">
                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-sm">Department Name</span>
                  </div>
                  <input
                    {...register("name", {
                      required: "This field is required",
                    })}
                    type="text"
                    placeholder="eg. CEO"
                    className="input w-full h-8  px-2 outline outline-1 outline-sky-400 rounded-sm bg-sky-50 text-sm"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm">
                      * Please enter a valid name.
                    </p>
                  )}
                </label>

                <label className="form-control w-full">
                  <div className="label">
                    <span className="label-text text-sm">Description</span>
                  </div>
                  <input
                    {...register("description", {
                      required: "This field is required",
                    })}
                    type="text"
                    placeholder="eg. Cheif Technology Officer"
                    className="input w-full h-8  px-2 outline outline-1 outline-sky-400 rounded-sm bg-sky-50 text-sm"
                  />

                  {errors.description && (
                    <p className="text-red-400 text-sm">
                      * Please enter a valid description
                    </p>
                  )}
                </label>

                <label className="form-control ">
                  <div className="label">
                    <span className="label-text text-sm">
                      Managing Department
                    </span>
                  </div>
                  <select
                    {...register("managingDepartmentId")}
                    className="input w-full h-8  px-2 outline outline-1 outline-sky-400 rounded-sm bg-sky-50 text-sm"
                  >
                    {departments.length <= 0 && <option value="">None</option>}
                    {departments.map((item: Department) => {
                      return (
                        <option value={item.id} className="capitalize">
                          {item.description}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>
            </div>

            <div className="w-full h-12 flex flex-row justify-end border-t border-sky-200 py-1">
              <div className="w-16 h-full bg-gray-00 flex justify-end items-center flex-row gap-2">
                <button
                  onClick={() => toggle(false)}
                  className="w-auto h-8 bg-sky-50 hover:bg-white outline outline-sky-400 p-3 flex justify-between items-center rounded-sm text-sm"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-auto h-8 bg-sky-600 hover:bg-sky-500 text-sky-50 outline outline-sky-500 p-3 flex justify-between items-center rounded-sm text-sm"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        ) : (
          <p className="">Loading ...</p>
        )}
      </div>
    </div>
  );
};

export default AddDepartmentModal;
