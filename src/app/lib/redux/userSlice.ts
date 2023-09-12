import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    userData: UserDataType
}

type UserDataType = {
    isSignIn: boolean,
    token: string
} 

const initialState: InitialStateType = {
    userData: {
        isSignIn: false,
        token: ''
    }
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUserData(state,action: PayloadAction<UserDataType>) {
            console.log('fiwoigjiwgokwjigwoogjiwoo0gkjiwgwjig-i')
            state.userData = action.payload
            console.log('DATA CHANGED')
            console.log(state.userData)
        },
        logout(state) {
            state = initialState
        }
    }
})

export const {
setUserData,
logout
} = userSlice.actions

export default userSlice.reducer