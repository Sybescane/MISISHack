import { createSlice,PayloadAction } from "@reduxjs/toolkit";

type InitialStateType = {
    isShowMenu: boolean,
    isErrorShow: boolean,
    isLoginShow: boolean,
    hackFinderQuery: string
}

const initialState: InitialStateType = {
    isShowMenu: false,
    isErrorShow: false,
    isLoginShow: false,
    hackFinderQuery: ''
}

const serviceSlice = createSlice({
    name: 'serviceSlice',
    initialState,
    reducers: {
showMenu(state, action:PayloadAction<boolean>) {
    state.isShowMenu = action.payload
},
showError(state,action:PayloadAction<boolean>) {
    console.log('WORK')
    state.isErrorShow = action.payload
},
showLogin(state,action: PayloadAction<boolean>) {
    state.isLoginShow = action.payload
},
updateFinderQuery(state,action: PayloadAction<string>) {
    state.hackFinderQuery = action.payload
}
    }
})

export const {
    showMenu,
    showError,
    showLogin,
    updateFinderQuery
} = serviceSlice.actions

export default serviceSlice.reducer