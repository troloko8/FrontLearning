import axios from "axios";
import { AppDispatch } from "../store";
import { IUser } from "../../models/IUser";
import { userSlice } from "./userSlice";
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchUser = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.userFetching());
//         const responce = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

//         dispatch(userSlice.actions.userFetched(responce.data));
//     } catch (error) {
//         dispatch(userSlice.actions.userFetchingError('Error fetching users'));
//     }
// }

// REDUX TOOLKIT WAY

export const fetchUser = createAsyncThunk(
    'users/fetchAll',
    async (_, thunkAPI) => {
        const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');
        return response.data;
    }
)