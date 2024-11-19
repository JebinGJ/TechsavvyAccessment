import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchMetricsHeatMap, fetchMetricsList, fetchMetricsPerformanceLine } from "../action/MetricsAction"
import { HeatmapDataProps, MatricsList, MatricsPerformanceChartData, RangeDetails } from "../types/MetricsTypes"

interface MetricsProps {
    metricsList: Array<MatricsList>
    metricsPerformanseChartData: MatricsPerformanceChartData | null
    metricsHeatmapData: Array<HeatmapDataProps>
    metricsRageDetails: RangeDetails | null
    selectedMetrics: Array<string>
    startDate: string | null
    endDate: string | null
    metricsChartLoading: boolean
    heatMapLoading: boolean
}

const initialState: MetricsProps = {
    metricsList: [],
    metricsPerformanseChartData: null,
    metricsHeatmapData: [],
    metricsRageDetails: null,
    selectedMetrics: ["CPC", "CR_perc", "ROAS"],
    startDate: null,
    endDate: null,
    metricsChartLoading: true,
    heatMapLoading: true
}


const MetricsSlice = createSlice({
    name: 'Metrics',
    initialState,
    reducers: {
        patchState(state,
            action: PayloadAction<Partial<MetricsProps>>) {
            return { ...state, ...action.payload }
        },
        setSelectedMetrics: (state, { payload }) => {
            state.selectedMetrics = payload
        }
    },
    extraReducers(builder) {
        builder.addCase(fetchMetricsList.fulfilled, (state, { payload }) => {
            state.metricsList = payload.result
        })
        builder.addCase(fetchMetricsList.rejected, state => {
            state.metricsList = []
        })

        builder.addCase(fetchMetricsPerformanceLine.pending, (state) => {
            state.metricsChartLoading = true
        })
        builder.addCase(fetchMetricsPerformanceLine.fulfilled, (state, { payload }) => {
            state.metricsPerformanseChartData = payload.result
            state.metricsChartLoading = false
        })
        builder.addCase(fetchMetricsPerformanceLine.rejected, state => {
            state.metricsChartLoading = false
        })

        builder.addCase(fetchMetricsHeatMap.pending, (state) => {
            state.heatMapLoading = true
        })
        builder.addCase(fetchMetricsHeatMap.fulfilled, (state, { payload }) => {
            state.metricsHeatmapData = payload.result
            state.metricsRageDetails = payload.rangeDetails
            state.heatMapLoading = false
        })
        builder.addCase(fetchMetricsHeatMap.rejected, state => {
            state.heatMapLoading = false
        })
    },
})

export const MetricsAction = MetricsSlice.actions
export default MetricsSlice.reducer