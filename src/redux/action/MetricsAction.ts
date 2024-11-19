import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../api";
import { MetricsHeatMap, MetricsList, MetricsPerformanceLine } from "../../commonComponent/constants";
import { MatricsListResponse, MatricsPerformanceChartResponse, MetricsHeatMapResponse } from "../types/MetricsTypes";

export const fetchMetricsList = createAsyncThunk(
    'MetricsAction/fetchMetricsList',
    async ({ type }: { type: string }, { rejectWithValue }) => {
        try {
            const response = await api.fetchAuthPostWithBody<MatricsListResponse>(MetricsList, { type })
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchMetricsPerformanceLine = createAsyncThunk(
    'MetricsAction/fetchMetricsPerformanceLine',
    async (payload: { startDate: string, endDate: string, metrics: Array<string> }, { rejectWithValue }) => {
        try {
            const response = await api.fetchAuthPostWithBody<MatricsPerformanceChartResponse>(MetricsPerformanceLine, payload)
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)

export const fetchMetricsHeatMap = createAsyncThunk(
    'MetricsAction/fetchMetricsHeatMap',
    async (payload: { startDate: string, endDate: string, metrics: Array<string> }, { rejectWithValue }) => {
        try {
            const response = await api.fetchAuthPostWithBody<MetricsHeatMapResponse>(MetricsHeatMap, payload)
            return response.data
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)