import { Box, Typography, useTheme } from "@mui/material"
import { getRandomColor } from "../helper/RandomColorGenerator";
import { useAppSelector } from "../../redux/Hook";
import { MetrincsSelect } from "../metricsSelect/MetricsSelect";
import LineChart from "../chart/LineChart";

export const PreformanceComponent = () => {
    const theme = useTheme()
    const { metricsPerformanseChartData } = useAppSelector(state => state.Metrics)

    const coloredSeries = metricsPerformanseChartData?.series.map((data) => ({
        ...data,
        backgroundColor: getRandomColor(theme)
    }));
    return (
        <Box borderRadius={2} sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
        }}>
            <Box px={5} pt={2} borderBottom={'1px solid #E6E6E6'} className='flexCenterBetween'>
                <Box mb={1}>
                    <Typography fontWeight={500} fontSize={'13px'}>Performance Chart</Typography>
                    <Typography color="#9D9D9D" fontWeight={400} fontSize={'11px'}>Key Metrics for Dayparting Schedule Performance Evaluation</Typography>
                </Box>
                <MetrincsSelect />
            </Box>
            <Box px={5} py={2} height={'300px'}>
                {metricsPerformanseChartData && metricsPerformanseChartData.series.length ? (
                    <LineChart
                        data={{
                            ...metricsPerformanseChartData,
                            series: coloredSeries!,
                        }}
                    />
                ) : (
                    <Typography>No data found</Typography>
                )}
            </Box>
        </Box>
    )
}