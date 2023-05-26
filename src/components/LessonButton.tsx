import React from 'react'
import AddIcon from '@mui/icons-material/Add';
import { Button, Stack } from '@mui/material';

export const LessonButton = () => {
    return (
        <Stack spacing={4}>
            <Stack direction={'row'} spacing={2}>
                <Button variant='text'>Text</Button>
                <Button variant='outlined'>Outlined</Button>
                <Button variant='contained'>Contained</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Button variant='text' color='primary'>Primary</Button>
                <Button variant='text' color='secondary'>Secondary</Button>
                <Button variant='text' color='success'>Success</Button>
                <Button variant='text' color='error'>Error</Button>
                <Button variant='text' color='warning'>Warning</Button>
                <Button variant='text' color='info'>Info</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Button variant='outlined' color='primary'>Primary</Button>
                <Button variant='outlined' color='secondary'>Secondary</Button>
                <Button variant='outlined' color='success'>Success</Button>
                <Button variant='outlined' color='error'>Error</Button>
                <Button variant='outlined' color='warning'>Warning</Button>
                <Button variant='outlined' color='info'>Info</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>
                <Button variant='contained' color='primary'>Primary</Button>
                <Button variant='contained' color='secondary'>Secondary</Button>
                <Button variant='contained' color='success'>Success</Button>
                <Button variant='contained' color='error'>Error</Button>
                <Button variant='contained' color='warning'>Warning</Button>
                <Button variant='contained' color='info'>Info</Button>
            </Stack>
            <Stack direction={'row'} spacing={2} display='block'>
                <Button variant='outlined' size='small'>Button</Button>
                <Button variant='outlined' size='medium'>Button</Button>
                <Button variant='outlined' size='large'>Button</Button>
            </Stack>
            <Stack direction={'row'} spacing={2}>

                <Button variant='contained' startIcon={<AddIcon />}>Add</Button>
                <Button variant='contained' endIcon={<AddIcon />}>Add</Button>
                <Button variant='contained' ><AddIcon /></Button>
            </Stack>
        </Stack>
    )
}
