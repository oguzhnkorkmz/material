import React from 'react'
import { Stack, TextField, InputAdornment } from '@mui/material';
import { useState } from 'react';

export const LessonTextField = () => {
    const [value, setValue] = useState('')
    return (
        <Stack spacing={4}>
            <Stack direction='row' spacing={2}>
                <TextField label='Ad' />
                <TextField label='Ad' variant='outlined' />
                <TextField label='Ad' variant='filled' />
                <TextField label='Ad' variant='standard' />
                <TextField label='Ad' variant='outlined' size='small' color='error' helperText='Plese Enter Name' />
                <TextField label='Password' variant='outlined' size='small' color='error' helperText='Plese Enter Password' type='password' />
                <TextField label='Password' variant='outlined' size='small' color='error' helperText='Plese Enter Password' type='password' disabled />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField label='Password' variant='outlined' size='small' color='error' helperText='Plese Enter Password' type='password' inputProps={{ readOnly: true }} />
                <TextField label='Password' variant='outlined' size='small' color='error' helperText='Plese Enter Password' type='password' InputProps={{ readOnly: true }} />
                <TextField label='Count' variant='outlined' size='small' color='error' InputProps={{ startAdornment: (<InputAdornment position='start'>TL</InputAdornment>) }} />
                <TextField label='Count' variant='outlined' size='small' color='error' InputProps={{ endAdornment: (<InputAdornment position='end'>TL</InputAdornment>) }} />
            </Stack>
            <Stack direction='row' spacing={2}>
                <TextField
                    label='Password'
                    variant='outlined'
                    type='password' color='error'
                    value={value}
                    helperText={!value ? 'Plese Enter Password' : 'Do not share your password with anyone'}
                    InputProps={{ endAdornment: (<InputAdornment position='end'>TL</InputAdornment>) }}
                    onChange={(e) => {
                        setValue(e.target.value)
                    }} />
            </Stack>

        </Stack>
    )
}
