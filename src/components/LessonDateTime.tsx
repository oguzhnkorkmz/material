import React, { useState } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { Stack, TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DatePicker, TimePicker } from '@mui/x-date-pickers/TimePicker'

export const LessonDateTime = () => {
    const [value, setValue] = useState<Dayjs | null>(null)
    console.log(value)
    return (
        <Stack>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                {/* <DatePicker
                    value={value}
                    onChange={(newValue => setValue(newValue))}
                    label='Date'
                    textField={(props) => <TextField {...props} />} /> */}
                <TimePicker
                    label='Time'
                    value={value}
                    onChange={(newValue => setValue(newValue))}
                    textField={(props) => <TextField {...props} />}
                />
            </LocalizationProvider>
        </Stack>
    )
}
