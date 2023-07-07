import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts, selectPosts, selectIsLoading, selectError } from '@/slices/postSlice'
import { AppDispatch } from '@/store'

import Spinner from '../Spinner/Spinner'

const AsyncThunk = () => {
  const posts = useSelector(selectPosts)
  const isLoading = useSelector(selectIsLoading)
  const error = useSelector(selectError)
  const dispatch = useDispatch<AppDispatch>()

  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])
  return (
    <div className='flex justify-center'>
      {isLoading && <Spinner />}
      {error && <p>An error occured: {error}</p>}
      <ul>{posts && posts?.map((post: any) => <li key={post.id}>{post.title}</li>)}</ul>
    </div>
  )
}

export default AsyncThunk
