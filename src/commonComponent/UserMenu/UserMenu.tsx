import { Box, Menu, Typography } from "@mui/material"
import { useAppDispatch, useAppSelector } from "../../redux/Hook"
import { Logout } from "@mui/icons-material"
import { storageClear } from "../storage"
import { useNavigate } from "react-router"

export const UserMenu = ({ open, ancherEl, onClose }: { open: boolean, ancherEl: HTMLElement | null, onClose: (status: boolean) => void }) => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { userDetails } = useAppSelector(state => state.user)
 
    const handleLogout = () => {
        storageClear()
        navigate('/')
    }
    return (
        <Menu open={open} anchorEl={ancherEl} onClose={onClose}>
            <Box display={'flex'} alignItems={'center'} gap={1} mx={2}>
                <Box className='flexCenterCenter' color={'white'} bgcolor={'#2A4DD8'} p={'10px'} borderRadius={'15px'} width={'10px'} height={'10px'}>
                    {userDetails?.fullName? userDetails?.fullName.charAt(0).toUpperCase() : 'N'}
                </Box>
                <Box>
                    <Typography fontSize={'12px'} fontWeight={500}>{userDetails?.fullName ? 'userDetails?.fullName' : 'Naveen'}</Typography>
                   <Typography fontSize={'10px'} fontWeight={400}> {userDetails?.profileStatus ? 'online' : 'online'}</Typography>
                </Box>
            </Box>
            <Box display={'flex'} alignItems={'center'} gap={1} mx={2} mt={2} onClick={handleLogout}>
                <Logout fontSize="small" />
                <Typography fontSize={'12px'} fontWeight={500}>Logout</Typography>
            </Box>
        </Menu>
    )
}