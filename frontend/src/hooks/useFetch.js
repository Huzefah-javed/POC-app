import { useQuery } from "@tanstack/react-query"
import Loader from "../components/Loader"

export const useFetch=(fetchFn, queryKeyArr)=>{

  const {data,error,isLoading, isError} = useQuery({
    queryKey:queryKeyArr,
    queryFn: fetchFn,
  })

  return {data,error,isLoading, isError}
}