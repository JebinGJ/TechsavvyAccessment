import { Box, Button, Typography } from "@mui/material"
import style from './Sidebar.module.css'
import { Productlogo } from "../../../commonComponent/icons/ProductLogo"
import { DashboardIcon } from "../../../commonComponent/icons/DashboardIcon"
import { useState } from "react"
import { DashboardActiveIcon } from "../../../commonComponent/icons/DashboardActiveIcon"
import { SettingsIcon } from "../../../commonComponent/icons/SettingIcon"

export const Sidebar = () => {
    const [isOpenSideNavBar, setIsOpenSideNavbar] = useState<boolean>(false)
    return (
        <Box className={style.sidebarContainer}
            onMouseEnter={() => setIsOpenSideNavbar(true)}
            onMouseLeave={() => setIsOpenSideNavbar(false)}
            sx={{
                bgcolor: 'background.default',
                color: 'text.primary',
            }}>
            <Box borderBottom={'1px solid #D9D9D9'} p={3} className='flexCenterCenter'>
                {isOpenSideNavBar ? <img src={"/images/logo.png"} width={'150px'} height={'25px'} alt="logo" /> : <Productlogo />}
            </Box>
            <Box className='flexCenter' mt={3}>
                {isOpenSideNavBar ? <Box width={'75%'} gap={1} className='flexCenterStart' bgcolor={'#f6f0ff'} borderRadius={1} p={1}>
                    <DashboardActiveIcon />
                    <Typography color="#5c17ab" fontSize={'14px'}>Dashboard</Typography>
                </Box> : <DashboardIcon />}
            </Box>
            <Box className={style.settingsIconWrapper} >
                <Box py={1} ml={2}>
                    {isOpenSideNavBar ? <Button sx={{ textTransform: 'unset' }} startIcon={<SettingsIcon />}>
                        <Typography sx={{ color: 'rgba(102, 112, 133, 1)' }}>Settings</Typography>
                    </Button> : <SettingsIcon />}
                </Box>
            </Box>
        </Box>
    )
}