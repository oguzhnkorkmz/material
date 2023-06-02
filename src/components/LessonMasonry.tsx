import { Masonry } from '@mui/lab'
import { Accordion, AccordionDetails, AccordionSummary, Paper } from '@mui/material'
import React from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
const heights = [150, 30, 90, 70, 90, 100, 150, 30, 50, 80]

export const LessonMasonry = () => {
    return (
        <Masonry columns={3} spacing={2}>
            {heights.map((height, index) => (
                <Paper key={index}>
                    <Accordion sx={{ minHeight: height }}>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            Accordion {index + 1}
                        </AccordionSummary>
                        <AccordionDetails>
                            Content
                        </AccordionDetails>
                    </Accordion>
                </Paper>
            ))}
        </Masonry>
    )
}
