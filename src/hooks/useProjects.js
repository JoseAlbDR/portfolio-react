import { useQuery } from '@tanstack/react-query'
import { getProduts } from '../services/getProducts'
import _ from 'lodash'
export const useCompanies = () => {
  const { isLoading, data, isError } = useQuery({
    queryKey: ['projects'],
    queryFn: () => getProduts({}),
  })

  return { isLoading, data, isError }
}
