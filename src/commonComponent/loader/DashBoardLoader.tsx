import { Box, Skeleton } from "@mui/material"

export const DashBoardLoader = () => {
    return (
        <Box>
            <Skeleton
                variant="rectangular"
                width={'100%'}
                height={'450px'}
            />
            <Skeleton sx={{ mt: 2 }}
                variant="rectangular"
                width={'100%'}
                height={'450px'}
            />
        </Box>
    )
}