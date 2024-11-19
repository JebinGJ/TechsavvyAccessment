import { Box } from "@mui/material"
import { useEffect } from "react"
import { useAppDispatch } from "../../redux/Hook"
import { useNavigate } from "react-router"
import { Header } from "./header/Header"
import { Sidebar } from "./sidebar/Sidebar"
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { Dashboard } from "../dashboard/Dashboard"
import { fetchMetricsList } from "../../redux/action/MetricsAction"
import { storageGet } from "../../commonComponent/storage"
import { useFetchDashboardData } from "../../commonComponent/hooks/useFetchDashboardData"

export const Layout = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const handle = useFullScreenHandle();

    useEffect(() => {
        const token = storageGet('token')
        if (!token) {
            navigate('/')
        }
    }, [])

    useEffect(() => {
        dispatch(fetchMetricsList({ type: 'customizeMetrics' }))
    }, [])

    useFetchDashboardData()

    return (
        <FullScreen handle={handle}>
            <Box>
                <Sidebar />
                <div>
                    <Header fullScreenHandler={handle.active ? handle.exit : handle.enter} />
                    <div className='component-container'>
                        <Dashboard />
                    </div>
                </div>
            </Box>
        </FullScreen>
    )
}