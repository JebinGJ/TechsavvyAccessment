import { Box, CircularProgress } from "@mui/material"
import { useAppSelector } from "../../redux/Hook"
import { HeatMap } from "../../commonComponent/heatmap/HeadMap"
import { DashBoardLoader } from "../../commonComponent/loader/DashBoardLoader"
import { PreformanceComponent } from "../../commonComponent/performanceComponent/PerformanceComponent"

export const Dashboard = () => {
    const { metricsChartLoading, heatMapLoading } = useAppSelector(state => state.Metrics)
    return (
        <>
            {(metricsChartLoading && heatMapLoading) ?
                <DashBoardLoader /> : <Box>
                    <PreformanceComponent/>
                    <HeatMap />
                </Box>}
        </>
    )
}