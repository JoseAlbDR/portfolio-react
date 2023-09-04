import { useQuery } from '@tanstack/react-query'
import { getProjects } from '../services/getProjects'

export const useProjects = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProjects({}),
  })

  return { isLoading, data, isError }
}
