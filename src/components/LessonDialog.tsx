import React, { useState } from 'react'
import {
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
    DialogTitle,
} from '@mui/material'

export const LessonDialog = () => {
    const [dialogOpen, setDialogOpen] = useState(false)

    return (
        <>
            <Button onClick={() => { setDialogOpen(true) }}>Open Dialog</Button>
            <Dialog open={dialogOpen} onClose={() => { setDialogOpen(false) }}>
                <DialogTitle>What Do You Love</DialogTitle>
                <DialogContent>
                    <DialogContentText>Which Freamwork</DialogContentText>
                    <DialogActions>
                        <Button onClick={() => { setDialogOpen(false) }}>React</Button>
                        <Button onClick={() => { setDialogOpen(false) }}>Angular</Button>
                    </DialogActions>
                </DialogContent>
            </Dialog>
        </>
    )
}
