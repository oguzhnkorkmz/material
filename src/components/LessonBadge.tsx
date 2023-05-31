import React from 'react'
import { Stack, Badge } from '@mui/material'
import EmailIcon from '@mui/icons-material/Email';

export const LessonBadge = () => {
    return (
        <Stack direction='row' spacing={2}>
            <Badge badgeContent={50} color='secondary'>
                <EmailIcon />
            </Badge>
            <Badge badgeContent={50} max={40} color='secondary'>
                <EmailIcon />
            </Badge>
            <Badge badgeContent={50} max={40} color='secondary' anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                <EmailIcon />
            </Badge>
            <Badge badgeContent={50} max={40} color='secondary' anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
                <EmailIcon />
            </Badge>
            <Badge badgeContent={50} max={40} color='secondary' anchorOrigin={{ vertical: 'top', horizontal: 'left' }}>
                <EmailIcon />
            </Badge>
        </Stack>
    )
}
