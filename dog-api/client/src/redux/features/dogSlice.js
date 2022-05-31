import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import * as api from "../api";

export const addDog = createAsyncThunk("dog/addDog",
    async ({ updatedDogData, navigate, toast }, { rejectWithValue }) => {
      try {
        const response = await api.addDog(updatedDogData);
        toast.success("Dog added successfully"); //success message
        navigate("/");
        return response.data;
        } catch (err) {
            console.log(err);
            return rejectWithValue(err.response.data);

        }

    }
    );

    const dogSlice = createSlice({
        name: "dog",
        initialState: {
          dog: {},
          dogs: [],
          userDogs: [],
          error: "",
          loading: false,
        },
    
        extraReducers: {
            [addDog.pending]: (state, action) => {
                state.loading = true;
            },
            [addDog.fulfilled]: (state, action) => {
              state.loading = false;
              state.dogs = [action.payload];
              },
              [addDog.rejected]: (state, action) => {
                state.loading = false;
                state.error = action.payload.message;
              },
              
        },
    });

    export default dogSlice.reducer;
