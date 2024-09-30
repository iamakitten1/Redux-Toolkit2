import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({})
export type RootState = ReturnType<typeof rootReducer>

export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true
})


export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore ['dispatch']