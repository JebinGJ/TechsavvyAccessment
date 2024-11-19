import { Snackbar } from '@mui/material';
import Alert from '@mui/material/Alert';
import { useEffect, useState } from 'react';

export const CommonAlert = ({ mess, sev }: { mess: string, sev: any }) => {
    console.log(mess, sev)
    const [visible, setVisible] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    const alertCloseHandler = () => {
        setVisible(false);
    }

    return (
        <>
            {visible && <Snackbar
                open={visible}
                autoHideDuration={3000}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                onClose={alertCloseHandler}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                }}
                style={{ zIndex: "999999" }}
            >
                <Alert onClose={alertCloseHandler} severity={sev}>
                    {mess}
                </Alert>
            </Snackbar>}
        </>
    )
}
