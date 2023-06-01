import React, { ReactFragment, useState } from 'react'
import CloseIcon from '@mui/icons-material/Close'
import { Button, IconButton, Snackbar } from '@mui/material'

export const LessonSnackbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const handleClick = () => {
        setIsOpen(true)
    }

    const handleClose = () => {
        setIsOpen(false)
    }


    const action = (
        < React.Fragment >
            <Button color='error' size='small' onClick={handleClose}>Close</Button>
            <IconButton>
                <CloseIcon sx={{ color: 'white' }} onClick={handleClose} />
            </IconButton>
        </ React.Fragment >
    )

    return (
        <div>
            <Button onClick={handleClick}>Open Snackbar</Button>
            <Snackbar
                open={isOpen}
                message='Error'
                action={action}
                autoHideDuration={3000}
                onClose={handleClose}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            />
        </div>
    )
}
