import axios from 'axios'
import { useInfiniteQuery } from '@tanstack/react-query'
import sleep from './sleep'

const usePosts = () => {
  return useInfiniteQuery({
    queryKey: ['posts'],
    queryFn: async ({ pageParam = 1 }) => {
      await sleep(1000)
      return axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=6&_page=${pageParam}`)
    },
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 16) {
        return pages.length + 1
      } else {
        return undefined
      }
    },
  })
}

export default usePosts
