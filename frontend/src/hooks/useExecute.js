import { useMutation, } from "@tanstack/react-query"

export const useExecute=(mutateFn, onSuccessFn, onErrorFn)=>{

  const {data, isError, isPending, error, mutate} = useMutation({
    mutationFn:(data)=>mutateFn(data),
    onSuccess:onSuccessFn,
    onError:onErrorFn,
  })

  return {data, isError, isPending, error,mutate}
}