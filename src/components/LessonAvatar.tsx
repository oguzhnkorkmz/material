import React from 'react'
import { Stack, AvatarGroup, Avatar } from '@mui/material'

export const LessonAvatar = () => {
    return (
        <Stack direction='row' spacing={4}>
            <AvatarGroup>
                <Avatar sx={{ marginRight: '10px' }} src='https://randomuser.me/api/portraits/women/56.jpg' />
                <Avatar src='https://randomuser.me/api/portraits/men/56.jpg' />
            </AvatarGroup>
            <AvatarGroup max={4}>
                <Avatar
                    sx={{ marginRight: '10px', bgcolor: 'primary.light', width: 100, height: 100 }}>
                    Oğuzhan
                </Avatar>
                <Avatar
                    variant='square'
                    sx={{ marginRight: '10px', bgcolor: 'success.light', width: 50, height: 50 }}>Ali
                </Avatar>
                <Avatar
                    variant='square'
                    sx={{ marginRight: '10px', bgcolor: 'success.light', width: 50, height: 50 }}>Ali
                </Avatar>
                <Avatar
                    variant='square'
                    sx={{ marginRight: '10px', bgcolor: 'success.light', width: 50, height: 50 }}>Ali
                </Avatar>
                <Avatar
                    variant='square'
                    sx={{ marginRight: '10px', bgcolor: 'success.light', width: 50, height: 50 }}>Ali
                </Avatar>
            </AvatarGroup>
        </Stack>
    )
}
