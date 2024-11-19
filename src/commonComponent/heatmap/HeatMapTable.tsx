import { Box, Paper, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import { useMemo } from "react"
import chroma from "chroma-js";
import { useAppSelector } from "../../redux/Hook";
import { heatMapColors, HeatMapTableHeader, ignorderHeatmapHeader } from "../constants";

export const HeatmapTable = () => {
    const { metricsHeatmapData, metricsRageDetails } = useAppSelector(state => state.Metrics)

    const generateTableCellBackgroundColor = (value: number, metrics: string) =>
        isNaN(value) ? {} : { backgroundColor: chroma.scale(heatMapColors[metrics]).domain([metricsRageDetails![metrics].min, metricsRageDetails![metrics].max])(value).hex() }

    const heatmapMetrices = useMemo(() => {
        if (metricsHeatmapData.length) {
            const headerMetrices = Object.keys(metricsHeatmapData[0]?.Hourly_Data[0]).filter(data => !ignorderHeatmapHeader.includes(data))
            return headerMetrices
        } else {
            return []
        }
    }, [metricsHeatmapData])

    const getTimeRange = (time: string) => {
        const [hours, minutes, seconds] = time.split(':');
        let hour = parseInt(hours);
        const period = hour >= 12 ? 'PM' : 'AM';

        hour = hour % 12 || 12;

        return `${hour}${period}`;

    }

    const timeRanges = useMemo(() => {
        if (metricsHeatmapData.length) {
            return metricsHeatmapData[0]?.Hourly_Data.map(data => data.time_part)
        } else {
            return []
        }
    }, [metricsHeatmapData])

    const heatmapTransferedData = useMemo(() => {
        if (metricsHeatmapData.length) {
            const transformedDataArray = metricsHeatmapData.map(item => {
                const transformedHourlyData = item.Hourly_Data.reduce<{ [key: string]: { [key: string]: string | number } }>((acc, curr) => {
                    const { time_part, show, ...rest } = curr;
                    acc[time_part] = rest;
                    return acc;
                }, {});

                return {
                    ...item,
                    Hourly_Data: transformedHourlyData
                };
            });
            return transformedDataArray
        } else {
            return []
        }
    }, [metricsHeatmapData])

    const renderTotalValues = useMemo(() => {
        return metricsHeatmapData.map((heatmapData: any) =>
            Object.keys(heatmapData)
                .filter(key => key.startsWith("Total_"))
                .map(key => heatmapData[key])
        ).flat();
    }, [metricsHeatmapData]);

    return (
        <Box>
            {metricsHeatmapData.length ?
                <TableContainer component={Paper}>
                    <Table sx={{
                        width: 'calc(100% - 58px)', [`& .${tableCellClasses.root}`]: {
                            borderBottom: "none",
                            textAlign: 'center',
                            p: 1,
                            border: '2px solid #fff',
                        }
                    }}>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                {HeatMapTableHeader.map((day) => (
                                    <TableCell sx={{ color: "rgba(157, 157, 157, 1)", fontSize: "12px" }} colSpan={heatmapMetrices.length} key={day}>{day}</TableCell>
                                ))}
                            </TableRow>
                            <TableRow>
                                <TableCell />
                                {metricsHeatmapData.map(heatmapData => (
                                    <>
                                        {heatmapMetrices.map(header => (
                                            <TableCell sx={{ fontSize: '12px', fontWeight: 500 }} key={header} style={{ width: '10%' }}>
                                                <Typography fontSize={'10px'}>{header}</Typography>
                                            </TableCell>
                                        ))}
                                    </>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {timeRanges.map(range => (
                                <TableRow key={range}>
                                    <TableCell sx={{ fontSize: '12px', fontWeight: 400, color: 'rgba(157, 157, 157, 1)' }}>{getTimeRange(range as string)}</TableCell>
                                    {heatmapTransferedData.map(({ Hourly_Data }, index) => (
                                        Hourly_Data[range] && Object.entries(Hourly_Data[range]).map(([key, value]) => (
                                            <TableCell sx={{ backgroundColor: generateTableCellBackgroundColor(value as number, key), fontSize: '10px', fontWeight: 400 }} key={`${index}-${key}`}>
                                                <Typography fontSize={'10px'}>
                                                    {(value as number).toFixed(5)}
                                                </Typography>
                                            </TableCell>
                                        ))
                                    ))}
                                </TableRow>
                            ))}
                            <TableRow>
                                <TableCell sx={{ fontSize: '12px', fontWeight: 600 }}>Total</TableCell>
                                {renderTotalValues.map((value, index) => (
                                    <TableCell sx={{ fontSize: '10px', fontWeight: 400 }} key={index}>{(value as any).toFixed(5)}</TableCell>
                                ))}
                            </TableRow>
                        </TableBody>

                    </Table>
                </TableContainer> :
                <Box>
                    No Data Found
                </Box>}
        </Box>
    )
}