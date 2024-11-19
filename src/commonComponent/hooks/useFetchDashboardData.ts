import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../redux/Hook"
import { fetchMetricsPerformanceLine, fetchMetricsHeatMap } from "../../redux/action/MetricsAction"

export const useFetchDashboardData = () => {
    const dispatch = useAppDispatch()
    const { selectedMetrics } = useAppSelector(state => state.Metrics)

    const today = new Date(); 
    const startDate = new Date(today); 
    startDate.setDate(today.getDate() - 6);

    useEffect(() => {
        dispatch(fetchMetricsPerformanceLine({ startDate: "2024-06-08", endDate: "2024-07-07", metrics: selectedMetrics }))
        dispatch(fetchMetricsHeatMap({ startDate: "2024-06-08", endDate: "2024-07-07", metrics: selectedMetrics }))
    }, [selectedMetrics])
}