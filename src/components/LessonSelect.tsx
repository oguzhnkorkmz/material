import React, { useState } from 'react'
import {
    Box, TextField, MenuItem,
} from '@mui/material'

export const LessonSelect = () => {

    const [value, setValue] = useState('')
    console.log(value)
    return (
        <Box width='250px'  >
            <TextField
                select
                label='Select Country'
                fullWidth
                value={value}
                onChange={e => setValue(e.target.value)}>
                <MenuItem value='TR'>Turkey</MenuItem>
                <MenuItem value='USA'>Usa</MenuItem>
                <MenuItem value='FR'>France</MenuItem>
            </TextField>
        </Box>
    )
}
