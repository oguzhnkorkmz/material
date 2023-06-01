import React from 'react'
import { Tooltip, IconButton } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'

export const LessonTooltip = () => {
    return (
        <Tooltip title='Delete' placement='right'>
            <IconButton>
                <DeleteIcon />
            </IconButton>
        </Tooltip>
    )
}
