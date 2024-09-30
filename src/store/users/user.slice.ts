import { createSlice } from "@reduxjs/toolkit";
import { Iuser } from "../../interfaces/user.interface";

interface IuserState {
    users : Iuser[],
    isLoading: boolean,
    error: string | null
}

const initialState:IuserState = {
    users : [],
    isLoading: false,
    error: null
}


const userSlice = createSlice({
     name: 'user',
    initialState,
    reducers:{}
})

export default userSlice.reducer