import React from 'react'
import { Alert, AlertTitle, Stack } from '@mui/material'

export const LessonAlert = () => {
    return (

        <Stack spacing={2}>
            <Alert>
                <AlertTitle>
                    Success
                </AlertTitle>
                Default
            </Alert>
            <Alert severity='error'>Error</Alert>
            <Alert severity='info'>Info</Alert>
            <Alert severity='warning'>Warning</Alert>
            <Alert severity='success'>Success</Alert>
        </Stack>

    )
}
