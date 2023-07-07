import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { RootState } from '@/rootReducer'

const url = 'https://jsonplaceholder.typicode.com/posts?_limit=10'

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
  try {
    const res = await axios.get(url)
    return res.data
  } catch (error) {
    return (error as any).message
  }
})

type PostType = {
  userId: number
  id: number
  title: string
  body: string
}

type StateType = {
  posts: PostType[]
  isLoading: boolean
  error?: string
}

const initialState: StateType = {
  posts: [],
  isLoading: true,
  error: '',
}

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPosts.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getPosts.fulfilled, (state, action) => {
        state.isLoading = false
        state.posts = action.payload
      })
      .addCase(getPosts.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.error.message
      })
  },
})

export const selectPosts = (state: RootState) => state.post.posts
export const selectIsLoading = (state: RootState) => state.post.isLoading
export const selectError = (state: RootState) => state.post.error

export default postSlice.reducer
