import { useMutation, useQuery } from "react-query";
import Ax from "../utils/Axio.js";

//AXIOS CALLS
const deleteTr = async (params) => {
  return await Ax.delete(`transaction/delete/${params}`);
};

const getTrs = async (params) => {
  return await Ax.get("transaction", { params: params });
};

const postTr = async (params) => {
  return await Ax.post("transaction", params);
};

const useTransactionDelete = () => useMutation("deleteTr", deleteTr);
