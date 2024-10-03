import { combineReducers, configureStore } from '@reduxjs/toolkit'
import  useReducer from './users/user.slice'
import { beerAPI } from './beer/beer.api'


//STATE
const rootReducer = combineReducers({
  useReducer,
  [beerAPI.reducerPath]: beerAPI.reducer
})
export type RootState = ReturnType<typeof rootReducer>


//CORE
export const setupStore = () => configureStore({
  reducer: rootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(beerAPI.middleware)
})


export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore ['dispatch']