import AsyncStorage from '@react-native-async-storage/async-storage'
import {createSlice , createAsyncThunk} from '@reduxjs/toolkit'


const initialState ={
    user: null,
    status: false,
    error: ""
}


const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload;
        },
        register : (state, action) => {
            state.user = action.payload;
        },
        logout: (state, action) => {
            state.user = null;
        }
    },
  
})
export const {login, register, logout} =authReducer.actions;
// export const selectUser = (state) => state.user.user;

export const auth=authReducer.reducer;