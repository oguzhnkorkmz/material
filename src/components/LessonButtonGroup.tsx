import React from 'react'
import { Button, Stack, ButtonGroup } from '@mui/material';

export const LessonButtonGroup = () => {
    return (
        <Stack direction='row'>
            <ButtonGroup variant='contained'>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='outlined'>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='text' orientation='vertical'>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
            <ButtonGroup variant='text' orientation='vertical' size='small' color='error'>
                <Button>Button</Button>
                <Button>Button</Button>
                <Button>Button</Button>
            </ButtonGroup>
        </Stack>
    )
}
