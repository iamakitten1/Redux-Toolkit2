import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Iuser } from "../../interfaces/user.interface";
// import { act } from "react";
import { fetchUsers } from "./actions";



interface IuserState {
    users : Iuser[],
    isLoading: boolean,
    error: string | null
    count:number
}

const initialState:IuserState = {
    users : [],
    isLoading: false,
    error: null,
    count: 0
}


const userSlice = createSlice({
     name: 'user',
    initialState,
    reducers:{ 
        increment: (state) => {
            state.count +=1
        },
        decrement: (state) => {
            state.count -=1
        }
    },

    
    extraReducers: (builder) => {
        builder.addCase(fetchUsers.fulfilled, (state:IuserState, action: PayloadAction<Iuser[]>) => {
            state.isLoading = false
            state.error =null
            state.users = action.payload
        }),
        builder.addCase(fetchUsers.pending, (state: IuserState) => {
            state.isLoading = true
        }),
        builder.addCase(fetchUsers.rejected, (state: IuserState, action:PayloadAction<unknown>) => {
            state.isLoading = false
            state.error = action.payload as string
            
        })
    }
})

export default userSlice.reducer
export const {decrement, increment} = userSlice.actions