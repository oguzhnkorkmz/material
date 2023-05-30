import React, { useState } from 'react'
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
} from '@mui/material'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'


export const LessonAccordion = () => {
    const [expanded, setExpanded] = useState<string | boolean>(false)

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false)
    }

    return (
        <div>
            {/* <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores deserunt est veritatis voluptas delectus, optio enim doloribus. Quidem soluta asperiores voluptatum fuga consequatur eius voluptas eveniet eligendi quos a?</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores deserunt est veritatis voluptas delectus, optio enim doloribus. Quidem soluta asperiores voluptatum fuga consequatur eius voluptas eveniet eligendi quos a?</AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Third</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores deserunt est veritatis voluptas delectus, optio enim doloribus. Quidem soluta asperiores voluptatum fuga consequatur eius voluptas eveniet eligendi quos a?</AccordionDetails>
            </Accordion> */}
            <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>First</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores deserunt est veritatis voluptas delectus, optio enim doloribus. Quidem soluta asperiores voluptatum fuga consequatur eius voluptas eveniet eligendi quos a?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Second</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores deserunt est veritatis voluptas delectus, optio enim doloribus. Quidem soluta asperiores voluptatum fuga consequatur eius voluptas eveniet eligendi quos a?</AccordionDetails>
            </Accordion>
            <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>Third</Typography>
                </AccordionSummary>
                <AccordionDetails>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolores deserunt est veritatis voluptas delectus, optio enim doloribus. Quidem soluta asperiores voluptatum fuga consequatur eius voluptas eveniet eligendi quos a?</AccordionDetails>
            </Accordion>
        </div>

    )
}
