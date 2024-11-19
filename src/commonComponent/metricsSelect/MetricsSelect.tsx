import { Box, Button, Checkbox, ListItemIcon, ListItemText, Menu, MenuItem, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../redux/Hook"
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material"
import { useState } from "react"
import { MetricsAction } from "../../redux/reducers/MetricsSlice"

export const MetrincsSelect = () => {

    const dispatch = useAppDispatch()
    const { metricsList, selectedMetrics } = useAppSelector(state => state.Metrics)
    const [metricsSelected, setMetricsSelected] = useState<Array<string>>(selectedMetrics)
    const [metricsOptionsAncherEl, setMetricsOptionsAncherEl] = useState<HTMLElement | null>(null)

    const handleChange = (option: string) => {
        if (metricsSelected.includes(option)) {
            const updatedSelection = metricsSelected.filter(metricsOption => metricsOption !== option)
            setMetricsSelected(updatedSelection)
        } else {
            setMetricsSelected([...metricsSelected, option])
        }
    }

    const onClose = () => {
        setMetricsOptionsAncherEl(null)
        setMetricsSelected([])
    }

    const handleApplyButton = () => {
        dispatch(MetricsAction.setSelectedMetrics(metricsSelected))
        setMetricsOptionsAncherEl(null)
    }
    return (
        <>
            <Box sx={{ cursor: 'pointer' }} py={.5} px={1} gap={1} borderRadius={'5px'} onClick={(e) => setMetricsOptionsAncherEl(e.currentTarget)} className='flexCenterBetween' border={'1px solid #A7A7A7'}>
                <Typography fontSize={'12px'} fontWeight={400}>Select Metrics</Typography>
                {!!metricsOptionsAncherEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
            </Box>
            <Menu open={!!metricsOptionsAncherEl} anchorEl={metricsOptionsAncherEl} onClose={onClose}>
                {metricsList.map((metricsOptions) => <MenuItem onClick={() => handleChange(metricsOptions.code)}>
                    <ListItemIcon>
                        <Checkbox sx={{
                            p: 0,

                        }} checked={metricsSelected.includes(metricsOptions.code) || selectedMetrics.includes(metricsOptions.code)} />
                    </ListItemIcon>
                    <ListItemText primaryTypographyProps={{ fontSize: '12px' }}>
                        {metricsOptions.label}
                    </ListItemText>
                </MenuItem>)}
                <Box className='flexCenterCenter' gap={1} p={1}>
                    <Button variant="contained" onClick={onClose} sx={{
                        bgcolor: 'background.default',
                        color: 'text.primary',
                        fontSize: '10px'
                    }}>
                        cancel
                    </Button>
                    <Button sx={{ fontSize: '12px' }} size="small" variant="contained" onClick={handleApplyButton}>
                        Apply
                    </Button>
                </Box>
            </Menu>
        </>
    )
}