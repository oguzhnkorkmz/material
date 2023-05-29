import React, { useState } from 'react'
import {
    Box,
    FormControl,
    FormControlLabel,
    Checkbox,
    FormLabel,
    FormGroup,
} from '@mui/material'

export const LessonCheckbox = () => {

    const [isAccept, setIsAccept] = useState(false)

    const [knowledge, setKnowledge] = useState<string[]>([])

    const handleKnowledgeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const index = knowledge.indexOf(e.target.value)
        if (index === -1) {
            setKnowledge([...knowledge, e.target.value])
        } else {
            setKnowledge(knowledge.filter(item => item !== e.target.value))
        }
    }

    console.log(knowledge)

    return (
        <Box>
            <Box>
                <FormControl>
                    <FormLabel>Plese Select Education</FormLabel>
                    <FormGroup row>
                        <FormControlLabel disabled control={<Checkbox />} label='Elementry' />
                        <FormControlLabel control={<Checkbox defaultChecked />} label='High School' />
                        <FormControlLabel control={<Checkbox />} label='University' />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Plese Select Education</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Checkbox checked={isAccept} onChange={e => setIsAccept(e.target.checked)} />}
                            label='I Accept the Terms of Use' />
                    </FormGroup>
                </FormControl>
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>What do You Know in Frontend </FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            value='react'
                            control={<Checkbox checked={knowledge.includes('react')} onChange={handleKnowledgeChange} />}
                            label='React' />
                        <FormControlLabel
                            value='angular'
                            control={<Checkbox checked={knowledge.includes('angular')} onChange={handleKnowledgeChange} />}
                            label='Angular' />
                        <FormControlLabel
                            value='vue'
                            control={<Checkbox checked={knowledge.includes('vue')} onChange={handleKnowledgeChange} />}
                            label='Vue' />
                    </FormGroup>
                </FormControl>
            </Box>
        </Box>
    )
}
