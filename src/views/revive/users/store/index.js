// ** Redux Imports
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// ** Axios Imports
import axios from 'axios'

export const getAllData = createAsyncThunk('users/getAllData', async () => {
  const response = await axios.get('/api/users/list/all-data')
  return response.data
})

export const getData = createAsyncThunk('users/getData', async (params) => {
  const response = await axios.get('/api/users/list/data', params)
  return {
    params,
    data: response.data.users,
    totalPages: response.data.total,
  }
})

export const getUser = createAsyncThunk('users/getUser', async (id) => {
  const response = await axios.get('/api/users/user', { id })
  return response.data.user
})

export const addUser = createAsyncThunk(
  'users/addUser',
  async (user, { dispatch, getState }) => {
    await axios.post('/apps/users/add-user', user)
    await dispatch(getData(getState().users.params))
    await dispatch(getAllData())
    return user
  }
)

export const deleteUser = createAsyncThunk(
  'users/deleteUser',
  async (id, { dispatch, getState }) => {
    await axios.delete('/apps/users/delete', { id })
    await dispatch(getData(getState().users.params))
    await dispatch(getAllData())
    return id
  }
)

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    data: [],
    total: 1,
    params: {},
    allData: [],
    selectedUser: null,
    isVerificationSliderOpen: false,
  },
  reducers: {
    toggleVerificationSlider: (state) => {
      state.isVerificationSliderOpen = !state.isVerificationSliderOpen
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getAllData.fulfilled, (state, action) => {
        state.allData = action.payload
      })
      .addCase(getData.fulfilled, (state, action) => {
        state.data = action.payload.data
        state.params = action.payload.params
        state.total = action.payload.totalPages
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.selectedUser = action.payload
      })
  },
})
export default usersSlice.reducer
export const { toggleVerificationSlider } = usersSlice.actions
