import { Box, Stack } from '@mui/material'
import React from 'react'

export const LessonCustomization = () => {
    return (
        <Stack spacing={3}>
            <Box sx={{ height: '400px', bgcolor: 'secondary.light' }}></Box>
            <Box sx={{ height: '400px', bgcolor: 'secondary.main' }}></Box>
            <Box sx={{ height: '400px', bgcolor: 'secondary.dark' }}></Box>
        </Stack>
    )
}
