import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://lumoshive-academy-media-api.vercel.app/api";

export const fetchBlogs = createAsyncThunk("blogs/fetchBlogs", async () => {
  const response = await axios.get(`${API_URL}/tech`);
  return response.data;
});

export const getBlogById = createAsyncThunk("blogs/getBlogById", async (key) => {
  const response = await axios.get(`${API_URL}/detail/${key}`);
  return response.data.results;
});

const initialState = {
  blogs: [],
  currentBlog: {},
  loading: false,
  error: null,
  isSuccess: false,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // extraReducers for fetch blogs
    builder
      .addCase(fetchBlogs.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(fetchBlogs.fulfilled, (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
        state.isSuccess = true;
      })
      .addCase(fetchBlogs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });

    // extraReducers for get blog by id
    builder
      .addCase(getBlogById.pending, (state) => {
        state.loading = true;
        state.isSuccess = false;
        state.error = null;
      })
      .addCase(getBlogById.fulfilled, (state, action) => {
        state.loading = false;
        state.currentBlog = action.payload;
        state.isSuccess = true;
      })
      .addCase(getBlogById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload || "Something went wrong";
      });
  },
});

export default blogsSlice.reducer;
