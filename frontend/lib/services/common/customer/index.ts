import axios from "axios";

const URL = "http://localhost:3004";

export const createCustomer = async (formData: any) => {
  try {
    const res = await axios.post(URL + `/customer`, formData);

    return res;
  } catch (error) {
    console.log("Error in create customer(service) =>", error);
    return error;
  }
};

export const updateCustomer = async (id: string, formData: any) => {
  try {
    const res = await axios.put(URL + `/customer/` + id, formData);

    return res;
  } catch (error) {
    console.log("Error in updating customer (service) =>", error);
    return error;
  }
};

export const deleteCustomer = async (id: string) => {
  try {
    const res = await axios.delete(URL + `/customer/` + id);

    return res;
  } catch (error) {
    console.log("Error in deleting customer (service) =>", error);
    return error;
  }
};
