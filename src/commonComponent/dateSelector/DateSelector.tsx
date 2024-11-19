import { Box, Typography } from "@mui/material"
import { CalenderIcon } from "../icons/CalenderIcon"
import { KeyboardArrowDown } from "@mui/icons-material"
import { useAppSelector } from "../../redux/Hook"

export const DateSelector = () => {
    const { startDate, endDate } = useAppSelector(state => state.Metrics)

    const today = new Date(); 
    const sevenDaysAgo = new Date(today); 
    sevenDaysAgo.setDate(today.getDate() - 6); 

    const formatDate = (date: any) => {
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
        });
    };

    const startingDate = formatDate(sevenDaysAgo); 
    const endingDate = formatDate(today); 
    return (
        <Box className='flexCenterBetween' border={'1px solid #E8E8E8'} gap={1} p={1} borderRadius={1} sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
        }}>
            <CalenderIcon/>
            <Box>
                <Typography fontWeight={400} fontSize={'9px'}>
                    Last 7 Days: 
                    <span style={{ fontWeight: 600 }}>
                        {startingDate}-{endingDate}
                    </span>
                </Typography>                
                <Typography fontWeight={400} fontSize={'8px'} color='#7C7E81'>Compared : Jan 07 - Jan 13, 2024</Typography>
            </Box>
            <KeyboardArrowDown />
        </Box>
    )
}