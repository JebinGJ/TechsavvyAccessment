import { Box, Typography } from "@mui/material"
import { HeatmapTable } from "./HeatMapTable"

export const HeatMap = () => {
    return (
        <Box borderRadius={2} mt={3} sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
        }}>
            <Box px={5} pt={2} borderBottom={'1px solid #E6E6E6'} className='flexCenterBetween'>
                <Box mb={1}>
                    <Typography fontWeight={500} fontSize={'13px'} >Heat Map</Typography>
                    <Typography color="#9D9D9D" fontWeight={400} fontSize={'11px'}>Select hours to schedule Dayparting</Typography>
                </Box>
            </Box>
            <Box px={5} py={2}>
                <HeatmapTable/>
            </Box>
        </Box>
    )
}