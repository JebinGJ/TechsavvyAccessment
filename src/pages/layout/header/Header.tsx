import { Box, AppBar, Toolbar, IconButton, useColorScheme, Typography } from "@mui/material"
import './Header.css'
import { ExpandIcon } from "../../../commonComponent/icons/Expand"
import { ThemeIcon } from "../../../commonComponent/icons/ThemeIcon";
import { UserIcon } from "../../../commonComponent/icons/UserIcon";
import { useState } from "react";
import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";
import { DateSelector } from "../../../commonComponent/dateSelector/DateSelector";
import { UserMenu } from "../../../commonComponent/UserMenu/UserMenu";

export const Header = ({ fullScreenHandler }: { fullScreenHandler: () => void }) => {
    const { mode, setMode } = useColorScheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

    return (
        <Box className='header-container' sx={{
            bgcolor: 'background.default',
            color: 'text.primary',
        }}>
            <AppBar position="static" elevation={0} className="appBarTransparent appBarHeader">
                <Box width={'100%'}>
                    <Box>
                        <Toolbar>
                            <Box display="flex" alignItems="center" justifyContent="space-between" width={1}  >
                                <Box display="flex" alignItems="center">
                                    <Typography color={'#000'} fontWeight={600} >Dashboard</Typography>
                                </Box>
                                <Box display="flex" alignItems="center" sx={{ gap: "8px" }}>
                                    <DateSelector />
                                    <IconButton onClick={fullScreenHandler}>
                                        <ExpandIcon />
                                    </IconButton>
                                    <IconButton onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}>
                                        <ThemeIcon />
                                    </IconButton>
                                    <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
                                        <UserIcon />
                                        {!!anchorEl ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                                    </IconButton>
                                </Box>
                            </Box>
                        </Toolbar>
                    </Box>
                </Box>
            </AppBar>
            <UserMenu open={!!anchorEl} ancherEl={anchorEl} onClose={() => setAnchorEl(null)} />
        </Box>
    )
}