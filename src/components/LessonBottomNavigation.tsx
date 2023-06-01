import React, { useState } from 'react'
import { BottomNavigation, BottomNavigationAction } from '@mui/material'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';


export const LessonBottomNavigation = () => {
    const [value, setValue] = useState(0)

    return (
        <BottomNavigation
            showLabels
            value={value}
            onChange={(event, newValue) => { setValue(newValue) }}
            sx={{ width: '100%', position: 'absolute', bottom: '0' }}>
            <BottomNavigationAction icon={<RestoreIcon />} label='Restore' />
            <BottomNavigationAction icon={<FavoriteIcon />} label='Favorite' />
            <BottomNavigationAction icon={<LocationOnIcon />} label='Location' />
        </BottomNavigation>
    )
}
