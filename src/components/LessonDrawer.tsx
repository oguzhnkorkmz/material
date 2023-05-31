import React, { useState } from 'react'
import { Drawer, Box, IconButton, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'

export const LessonDrawer = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <>
            <IconButton size='large' onClick={() => { setIsOpen(true) }}>
                <MenuIcon></MenuIcon>
            </IconButton>
            <Drawer open={isOpen} onClose={() => { setIsOpen(false) }} anchor='right'>
                <Box width='250px' textAlign='center'>
                    <Typography variant='h6' component='div'>Menu</Typography>
                </Box>
            </Drawer>
        </>
    )
}
