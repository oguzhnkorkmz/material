import { Stack, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { DateRangePicker } from '@mui/x-date-pickers-pro'

export const LessonDateRange = () => {
    const [value, setValue] = useState<DataRange<Dayjs>>([null, null])
    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateRangePicker
                    label='Time'
                    value={value}
                    onChange={(newValue) => { setValue(newValue); }}
                    renderInput={(start, end) => (
                        <>
                            <TextField {...start} />
                            <TextField {...end} />
                        </>
                    )}
                />
            </LocalizationProvider>
        </Stack>
    )
}
