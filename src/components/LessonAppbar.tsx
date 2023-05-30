import React from 'react'
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Stack,
    Button,
    Menu,
    MenuItem
} from '@mui/material'
import AppsIcon from '@mui/icons-material/Apps';
import { useState } from 'react';

export const LessonAppbar = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

    const openControl = Boolean(anchorEl)

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(e.currentTarget)
    }

    const handleClose = () => {
        setAnchorEl(null)
    }
    return (
        <AppBar>
            <Toolbar>
                <IconButton>
                    <AppsIcon />
                </IconButton>
                <Typography variant='h6' component='div' sx={{ marginRight: 'auto' }}>Navbar</Typography>
                <Stack direction='row'>
                    <Button sx={{ color: 'white' }}>Home</Button>
                    <Button sx={{ color: 'white' }}>About</Button>
                    <Button sx={{ color: 'white' }}>Product</Button>
                    <Button sx={{ color: 'white' }}>Price</Button>
                    <Button sx={{ color: 'white' }} onClick={handleClick}>Discount</Button>
                </Stack>
                <Menu anchorEl={anchorEl} open={openControl} onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Books 1</MenuItem>
                    <MenuItem onClick={handleClose}>Books 2</MenuItem>
                    <MenuItem onClick={handleClose}>Books 3</MenuItem>
                    <MenuItem onClick={handleClose}>Books 4</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
    )
}
