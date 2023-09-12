import { configureStore } from '@reduxjs/toolkit'
import serviceSliceReducer from './serviceSlice'
import specSliceReducer from './specSlice'
import userSliceReducer from './userSlice'

export function createReduxStore() {
    return configureStore({
        reducer: {
            serviceSlice: serviceSliceReducer,
            specSlice: specSliceReducer,
            userSlice: userSliceReducer
        }
    })   
}

export type AppStore = ReturnType<typeof createReduxStore>
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]