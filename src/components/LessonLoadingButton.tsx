import { Stack } from '@mui/material'
import React, { useState } from 'react'
import { LoadingButton } from '@mui/lab'

export const LessonLoadingButton = () => {
    const [value, setValue] = useState(false)

    return (
        <Stack direction='row'>
            <LoadingButton loading>Save</LoadingButton>
            <LoadingButton loading={value} variant='outlined' onClick={() => { setValue(true) }}>Save</LoadingButton>
        </Stack>
    )
}
