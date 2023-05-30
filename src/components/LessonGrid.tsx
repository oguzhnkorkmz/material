import React from 'react'
import { Grid, Box } from '@mui/material'

export const LessonGrid = () => {
    return (
        <Box>
            <Grid container>
                <Grid xs={12} md={8}>8 unit</Grid>
                <Grid xs={12} md={4}>4 unit</Grid>
                <Grid xs={12} md={8}>8 unit</Grid>
                <Grid xs={12} md={4}>4 unit</Grid>
            </Grid>
        </Box>
    )
}
