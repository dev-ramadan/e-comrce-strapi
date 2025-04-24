import { createStandaloneToast } from "@chakra-ui/react";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import CookiServise from '../../Servises/Cookies'
const {toast} = createStandaloneToast()
interface LoginPayload {
  identifier: string;
  password: string;
}

const initialState = {
  loading: false,
  data: [],
  error: null as string | null,
};

export const userLogin = createAsyncThunk<any, LoginPayload, { rejectValue: string }>(
  "login/userLogin",
  async (credentials, thunkApi) => {
    const { rejectWithValue } = thunkApi;
    try {
      const { data } = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/api/auth/local`,
        credentials
      );
      return data;
    }catch (error: any) {
        const errorMsg =
          error.response?.data?.error?.message ||
          error.response?.data?.message ||
          error.message ||
          "Unknown error";
        return rejectWithValue(errorMsg);
      }
  }
);

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
        const date = new Date()
        const EXPIRES_IN_DAYS = 3 ;
        const EXPIRES_AT = 1000 * 60 * 60 * 24 * EXPIRES_IN_DAYS ;
        date.setTime(date.getTime() + EXPIRES_AT);
        console.log(date)
        const option = { path: "/", expires: date };
        CookiServise.set('jwt',action.payload.jwt,option)
        toast({
            title: "Logged In Successfly",
            status: 'success',
            duration: 5000,
            isClosable: true,
          })
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false;
        state.data = [];
        state.error = action.payload ?? null;

        toast({
            title: action.payload,
            description: "We've created your account for you.",
            status: 'error',
            duration: 5000,
            isClosable: true,
          })
        








      });
  },
});

export const selectUser = ({ login }: { login: typeof initialState }) => login;
export default loginSlice.reducer;
