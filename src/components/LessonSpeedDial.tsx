import React from 'react'
import { SpeedDial, SpeedDialAction, SpeedDialIcon } from '@mui/material'
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import EditIcon from '@mui/icons-material/Edit';

export const LessonSpeedDial = () => {
    return (
        <SpeedDial ariaLabel='Nav' icon={<SpeedDialIcon openIcon={<EditIcon />} />}>
            <SpeedDialAction icon={<ContentCopyIcon />} tooltipTitle='Copy' tooltipOpen />
            <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen />
            <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen />
        </SpeedDial>
    )
}
