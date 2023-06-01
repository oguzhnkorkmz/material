import { CircularProgress, LinearProgress, Stack } from '@mui/material'
import React from 'react'

export const LessonProgress = () => {
    return (
        <Stack spacing={2}>
            <CircularProgress />
            <CircularProgress color='secondary' />
            <CircularProgress color='success' />
            <CircularProgress color='success' variant='determinate' value={50} />
            <LinearProgress />
            <LinearProgress color='warning' />
            <LinearProgress color='info' variant='determinate' value={25} />
        </Stack>
    )
}
