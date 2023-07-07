import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

interface Data {
  userId: number
  id: number
  title: string
  completed: boolean
}

export const useGetTodo = () =>
  useQuery({
    queryKey: ['mytodo'],
    queryFn: async () => {
      const { data } = await axios.get(import.meta.env.VITE_API_URL + '?_limit=10')
      return data as Data
    },
    retry: 1,
  })
