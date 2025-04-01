import { useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse } from "axios"
import { httpGETUsers } from "../services/users"

export const useMembers = ()=>{

  const {
    data: response,
    isLoading,
    error,
  } = useQuery<AxiosResponse<Array<any>, AxiosError>>({
    queryKey: ['members'],
    queryFn: httpGETUsers,
  })

  const { data: members } = response || {}

  return {
    members,
    isLoading,
    error,
  }
}