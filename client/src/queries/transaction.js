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
const useTransactionsGet = ({
  firstDate,
  lastDate,
  category,
  dateSort,
  priceSort,
  skip,
  take,
  key,
  enabled,
}) =>
  useQuery(
    key,
    () =>
      getTrs({
        firstDate,
        lastDate,
        category,
        dateSort,
        priceSort,
        skip,
        take,
      }),
    {
      refetchOnWindowFocus: false,
      enabled: enabled || false,
      keepPreviousData: true,
    }
  );

const useTransactionsPost = () => useMutation("postTransaction", postTr);
export { useTransactionsGet, useTransactionDelete, useTransactionsPost };
