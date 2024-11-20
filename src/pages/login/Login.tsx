import { Box, Button, Checkbox, FormControlLabel, InputAdornment, TextField, Typography } from "@mui/material"
import style from './login.module.css'
import { EmailIcon } from "../../commonComponent/icons/Email"
import { LockIcon } from "../../commonComponent/icons/LockIcon"
import { useFormik } from "formik"
import * as yup from 'yup'
import { useAppDispatch, useAppSelector } from "../../redux/Hook"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router"
import { UserLogin } from "../../commonComponent/constants"
import api from "../../api"
import { storageClear, storageGet, storageSet } from "../../commonComponent/storage"
import { userAction } from "../../redux/reducers/UserSlice"
import { LoadingButton } from "@mui/lab"
import { LoginResponse } from "../../redux/types/UseTypes"
import { CommonAlert } from "../../commonComponent/alert/CommonAlert"
import { fetchUserDetails } from "../../redux/action/UserAction"

export const Login = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const { loading } = useAppSelector(state => state.user)
    const [alertProps, setAlertProps] = useState<{ mess: string; sev: any } | null>(null);

    useEffect(() => {
        const token = storageGet('token');
        if (token) {
            navigate('/dashboard'); // Redirect to home/dashboard if logged in
        }
    }, [navigate]);

    const formik = useFormik({
        initialValues: { email: '', password: '', isLoggedInHere: false },
        validationSchema: yup.object().shape({
            email: yup.string().email('Please enter the valid email').required('Please enter the valid email'),
            password: yup.string().required('Please enter the valid password'),
            isLoggedInHere: yup.boolean()
        }),
        onSubmit: async () => {
            dispatch(userAction.patchState({ loading: true }))
            storageClear()
            try {
                const payload = {
                    email: formik.values.email,
                    password: formik.values.password,
                    isLoggedInHere: formik.values.isLoggedInHere,
                };
                await dispatch(fetchUserDetails(payload)).unwrap();
                setAlertProps({ mess: 'Login successful!', sev: 'success' });
                navigate('/dashboard');

            } catch (error) {
                setAlertProps({ mess: 'Login failed. Please try again.', sev: 'error' });
            } finally {
                dispatch(userAction.patchState({ loading: false }))
            }
        }
    })

    return (
        <Box className={`${style.loginBackground} flexCenterCenter`} flexDirection={'column'} gap={5}>
            <Box>
                <img src={"/images/logo.png"} alt="logo" />
            </Box>
            <Box p={.5} borderRadius={2} bgcolor={'#fff'}>
                <Box className='flexCenterCenter'
                    flexDirection={'column'}
                    gap={5}
                    bgcolor={'#fbfafd'}
                    padding={8}
                    borderRadius={2}>
                    <Typography fontWeight={600} fontSize={'30px'}>Welcome Back!</Typography>
                    <Box display={'flex'} flexDirection={'column'} gap={2}>
                        <Box>
                            <Typography mb={.5} color="#000" fontSize={'12px'}>Email</Typography>
                            <Box border={'.5px solid black'} borderRadius={2}>
                                <TextField fullWidth
                                    value={formik.values.email}
                                    name='email'
                                    placeholder="Email"
                                    onChange={formik.handleChange}
                                    sx={{
                                        '& fieldset': { border: 'none' },
                                        '& input': { color: '#000' },
                                    }}
                                    error={formik.touched.email && !!formik.errors.email}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <EmailIcon />
                                                </InputAdornment>
                                            ),
                                        },
                                    }} />
                            </Box>
                            <Typography mb={.5} color="red" fontSize={'12px'}>{formik.touched.email && formik.errors.email}</Typography>
                        </Box>
                        <Box>
                            <Typography mb={.5} color="#000" fontSize={'12px'}>Password</Typography>
                            <Box border={'.5px solid black'} borderRadius={2}>
                                <TextField fullWidth
                                    placeholder="Password"
                                    value={formik.values.password}
                                    name='password'
                                    onChange={formik.handleChange}
                                    error={formik.touched.password && !!formik.errors.password}
                                    type="password"
                                    sx={{
                                        '& fieldset': { border: 'none' },
                                        '& input': { color: '#000' },
                                    }}
                                    slotProps={{
                                        input: {
                                            startAdornment: (
                                                <InputAdornment position="start">
                                                    <LockIcon />
                                                </InputAdornment>
                                            ),
                                            endAdornment: (
                                                <Button disableTouchRipple disableFocusRipple disableElevation style={{ whiteSpace: 'nowrap', padding: 0, minWidth: 'auto' }}>
                                                    <Typography color="rgba(244, 56, 153, 1)" noWrap fontSize={'14px'}>
                                                        Forgot Password?
                                                    </Typography>
                                                </Button>
                                            ),
                                        },
                                    }} />
                            </Box>
                            <Typography mb={.5} color="red" fontSize={'12px'}>{formik.touched.password && formik.errors.password}</Typography>
                        </Box>
                        <Box className='flexCenterEnd'>
                            <FormControlLabel sx={{
                                '& .MuiFormControlLabel-label': {
                                    fontSize: '12px',
                                    fontWeight: '400',
                                }
                            }} control={<Checkbox size='small' sx={{ padding: 0 }} checked={formik.values.isLoggedInHere} onClick={formik.handleChange} name='isLoggedInHere' />} label='Remember Me' />
                        </Box>
                        <LoadingButton loading={loading} onClick={() => formik.handleSubmit()} sx={{ p: 1, backgroundColor: 'rgba(89, 50, 234, 1)', color: '#fff' }} variant="contained">
                            SIGN IN
                        </LoadingButton>
                    </Box>
                </Box>
            </Box>
            {alertProps && <CommonAlert mess={alertProps.mess} sev={alertProps.sev} />}
        </Box >
    )
}