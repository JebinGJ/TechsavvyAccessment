import { createAsyncThunk } from "@reduxjs/toolkit"
import api from "../../api"
import { LoginResponse } from "../types/UseTypes";
import { UserLogin } from "../../commonComponent/constants";
import { storageSet } from "../../commonComponent/storage";


export const fetchUserDetails = createAsyncThunk(
    'MetricsAction/fetchMetricsList',
    async (payload: any, { rejectWithValue }) => {
        try {
            const response = await api.fetchPostWithBody<LoginResponse>(UserLogin, {
                ...payload,
                isLoggedInHere: payload.isLoggedInHere ? 1 : 0,
            });
            storageSet('token', response.data.token);
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)