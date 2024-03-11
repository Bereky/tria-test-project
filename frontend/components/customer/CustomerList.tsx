import { setCurrentCustomer } from "@/lib/features/customer/customerSlice";
import { useAppDispatch } from "@/lib/hooks";
import { FaEdit, FaTrash } from "react-icons/fa";

const CustomerList = ({ data, toggleDel, toggleUpdate }) => {
  const dispatch = useAppDispatch();

  const setCurrent = (i) => {
    if (i) {
      dispatch(setCurrentCustomer(i));
    }
  };
  return (
    <div className="w-full h-auto min-h-80 bg-sky-100 p-3 flex justify-start items-center flex-col overflow-x-auto table-container rounded-sm">
      <div className="w-full h-auto flex justify-start items-center bg-gray-00">
        <table className="w-full table-auto borde border-collapse text-s text-sky-800">
          <thead className="w-full bg-gray-00 border-b border-sky-400  h-11 bg-gray-70">
            <tr>
              <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                Full Name
              </th>
              <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                Email
              </th>
              <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                Address
              </th>
              <th className="borde font-normal text-start pr-3 whitespace-nowrap">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.map((item, index) => {
                return (
                  <tr className="h-11" key={index}>
                    <td className="borde text-start pr-3 whitespace-nowrap">
                      {item?.name}
                    </td>
                    <td className="borde text-start pr-3 whitespace-nowrap">
                      {item?.email}
                    </td>
                    <td className="borde text-start pr-3 whitespace-nowrap">
                      {item?.address}
                    </td>

                    <td className="borde space-x-2 flex justify-start items-center h-11">
                      <button
                        onClick={() => {
                          setCurrent(item);
                          toggleUpdate({ state: true, item: item });
                        }}
                        className="w-7 h-6 outline outline-sky-600 bg-sky-600 hover:bg-sky-700 text-sky-50 rounded-sm flex items-center justify-center"
                      >
                        <FaEdit className="text-sm" />
                      </button>
                      <button
                        onClick={() => {
                          setCurrent(item);
                          toggleDel({ state: true, item: item });
                        }}
                        className="w-7 h-6 outline outline-rose-600 bg-rose-600 hover:bg-rose-700 text-sky-50 rounded-sm flex items-center justify-center"
                      >
                        <FaTrash className="text-sm" />
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerList;
