import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

type SpecListType = Array<{
    specializationId: number,
    specName: string
}>

type InitialStateType = {
    specList: SpecListType
} 

const initialState: InitialStateType = {
    specList: []
}

const specSlice = createSlice({
    name: 'specSlice',
    initialState,
    reducers: {
        setSpecs(state,action: PayloadAction<SpecListType>) {
            console.log('SET SPEC')
            console.log(action.payload)
            state.specList = action.payload
        }
    } 
})

export const {
    setSpecs
} = specSlice.actions

export default specSlice.reducer