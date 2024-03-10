import axios from "axios";

const URL = "http://localhost:3004";

export const createDepartment = async (formData: any) => {
  try {
    const res = await axios.post(URL + `/department`, formData);

    return res;
  } catch (error) {
    console.log("Error in create department (service) =>", error);
    return error;
  }
};

export const deleteDepartment = async (id: string) => {
  try {
    const res = await axios.delete(URL + `/department/` + id);

    return res;
  } catch (error) {
    console.log("Error in create department (service) =>", error);
    return error;
  }
};
