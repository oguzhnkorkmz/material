import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormControlLabel,
    Radio,
    RadioGroup,
    FormHelperText
} from '@mui/material'



export const LessonRadioGroup = () => {

    const [value, setValue] = useState('')

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue(e.target.value)
    // }

    console.log(value)
    return (
        <FormControl>
            <FormLabel>Extected Salery</FormLabel>
            <RadioGroup row name='extected-salary' value={value} onChange={(e) => { setValue(e.target.value) }}>
                <FormControlLabel
                    label='2000$'
                    value='2000'
                    color='secondary'
                    control={<Radio />} />
                <FormControlLabel
                    label='3000$'
                    value='3000'
                    color='secondary'
                    control={<Radio />} />
                <FormControlLabel
                    label='4000$'
                    value='4000'
                    color='secondary'
                    control={<Radio />} />
            </RadioGroup>
            <FormHelperText>Enter</FormHelperText>
        </FormControl>
    )
}
