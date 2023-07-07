import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
const useTodo = (todoId: string) => {
  return useQuery({
    queryKey: ['todos', todoId],
    queryFn: () => axios.get(import.meta.env.VITE_API_URL + '/' + todoId).then((res) => res.data),
  })
}

export default useTodo
