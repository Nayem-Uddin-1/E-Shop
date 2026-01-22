import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    users: null,
};


const userSlice = createSlice({

    name: "user",
    initialState,
    reducers: {
        setUsers: (state, action) => {
            state.users = action.payload;
        },
        logoutUser: (state) => {
            state.users = null;
        },
    }

})



export const {setUsers,logoutUser}=userSlice.actions
export default userSlice.reducer