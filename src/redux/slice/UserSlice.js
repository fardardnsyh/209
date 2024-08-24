import { createSlice } from '@reduxjs/toolkit';

const initialState  = {
    access: "",
    refresh: "",
    isAuthenticated: false,
};
  
export const userSlice = createSlice({
name: 'userSlice',
initialState,
reducers: {
    setAccessToken: (state, action) => {
        state.access = action.payload;
        state.isAuthenticated = true;
    },

    setRefreshToken: (state, action) => {
        state.refresh = action.payload
    },
  
    logout: (state, action) => {
        state.isAuthenticated = false;
        state.token = ""
        state.userData = null
    },
},
});
  
export const { setAccessToken, setRefreshToken, logout } = userSlice.actions;
  
export default userSlice.reducer;