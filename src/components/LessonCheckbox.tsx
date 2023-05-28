import React, { useState } from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormGroup,
    FormHelperText
} from '@mui/material'

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false)
    console.log(isAccept)
    return (
        <Box>
            <Box>
                <FormControl>
                    <FormLabel>Plese Select Education</FormLabel>
                    <FormGroup row>
                        <FormControlLabel disabled control={<Checkbox />} label='Elementry' />
                        <FormControlLabel control={<Checkbox defaultChecked />} label='High School' />
                        <FormControlLabel control={<Checkbox />} label='University' />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Plese Select Education</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={isAccept} onChange={e => setIsAccept(e.target.checked)} />}
                            label='I Accept the Terms of Use' />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
