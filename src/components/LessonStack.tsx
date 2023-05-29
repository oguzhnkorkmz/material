import React from 'react'
import { Stack, Divider } from '@mui/material'

export const LessonStack = () => {
    return (
        <Stack
            direction={{ xs: 'column', md: 'row' }}
            spacing={{ xs: 1, sm: 3, md: 5 }}
            divider={<Divider orientation='vertical' flexItem />} >
            <div>İtem 1</div>
            <div>İtem 2</div>
            <div>İtem 3</div>
        </Stack >
    )
}
