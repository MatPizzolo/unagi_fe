import { Resto } from "../interfaces/Resto";
import { createAsyncThunk, PayloadAction, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

interface RestoState {
    restos: Resto[] | null;
    loading: boolean;
    singleGame: Resto | null;
    errors: any;
}

const initialState: RestoState = {
    restos: [],
    singleGame: null,
    loading: false,
    errors: null

}

// actions are process that get data from backend
export const getRestos = createAsyncThunk<Resto[]>(
    "restaurants",
    async (_, thunkAPI) => {
        try {
            const response = await axios.get("http://localhost:8080/restaurants")
            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
);

export const createResto = createAsyncThunk<Object, Resto>(
    "restaurants/create",
    async (data, thunkAPI) => {
        try {
            const response = await axios.post("http://localhost:8080/restaurants/create", data);
            thunkAPI.dispatch(getRestos());
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)


// reducers -> manipulate state
export const gameSlice = createSlice({
    name: "restos",
    initialState,
    reducers: {
        setRestos: (state: any, action: PayloadAction<Resto[]>) => {
            state.restos = action.payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getRestos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(getRestos.fulfilled, (state, action) => {
            state.restos = action.payload;
            state.loading = false;
        })
        builder.addCase(getRestos.rejected, (state, action) => {
            state.loading = false;
            state.errors = action.payload;
        })
    }
})

export default gameSlice.reducer;
export const {setRestos} = gameSlice.actions;
