// import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
// import axios from "axios"

// const initialState = {
//     items: [],
//     status : null,
//     error: null,
// }

// export const dataFetch = createAsyncThunk(
//     "data/dataFetch",
//     async() =>{

//             const response = await axios.get("http://localhost:3000/");
//             return response?.data;
       
//     }
// )

// const productSlice = createSlice({
//     name: 'data',
//     initialState,
//     reducers:{},
//     extraReducers:{
//         [dataFetch.pending]: (state, action) =>{
//             state.status = "pending";
//         },
//         [dataFetch.fulfilled]: (state, action) =>{
//             state.status = "success";
//             state.items = action.payload
//         },
//         [dataFetch.rejected]: (state, action) =>{
//             state.status = "rejected";
//         },
//     }
// });

// export default productSlice.reducer;