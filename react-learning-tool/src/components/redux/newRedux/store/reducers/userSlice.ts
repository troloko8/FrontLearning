import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IUser } from "../../models/IUser"
import { fetchUser } from "./actionCreator"

interface UserState {
    users: IUser[]
    isLoading: boolean
    error: string | null
    count: number
}

const initialState: UserState = {
    users: [],
    isLoading: false,
    error: null,
    count: 0
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
        // userFetching(state) {
        //     state.isLoading = true;
        // },
        // userFetched(state, action: PayloadAction<IUser[]>) {
        //     state.isLoading = false;
        //     state.error = null;
        //     state.users = action.payload;
        // },
        // userFetchingError(state, action: PayloadAction<string>) {
        //     state.isLoading = false;
        //     state.error = action.payload;
        // },
    },
    // REDUX TOOLKIT WAY
    extraReducers: (builder) => {
        builder
            .addCase(fetchUser.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(fetchUser.fulfilled, (state, action: PayloadAction<IUser[]>) => {
                state.isLoading = false;
                state.error = null;
                state.users = action.payload;
            })
            .addCase(fetchUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Error fetching users';
            });
    }

})

export default userSlice.reducer