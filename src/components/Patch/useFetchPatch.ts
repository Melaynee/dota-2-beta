import { useQuery } from "react-query";
import axios from "axios";

const fetchPatchData = async () => {
  const { data } = await axios.get(
    `https://api.opendota.com/api/constants/patchnotes`
  );
  return data;
};

const useFetchPatch = () => {
  const { data, isLoading, isError } = useQuery("patchData", fetchPatchData);
  return { data, isLoading, isError };
};

export default useFetchPatch;
