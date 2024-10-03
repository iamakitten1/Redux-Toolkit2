import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { Iuser } from "../../interfaces/user.interface";

export const fetchUsers = createAsyncThunk(
    'users/fetchAll',
     async (_, thunkApi) => {
        try {
            const res = await axios.get<Iuser[]>('https://jsonplaceholder.typicode.com/users')
            return res.data
        } catch(error) {
            return thunkApi.rejectWithValue('user not found')

        }
     }
)