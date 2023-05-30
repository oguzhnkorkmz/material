import React from 'react'
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
    Button
} from '@mui/material'

export const LessonCard = () => {
    return (
        <Card sx={{ width: '350px' }}>
            <CardMedia component='img' image='https://source.unsplash.com/random' height='150' />
            <CardContent>
                <Typography variant='h5' component='div'>Title</Typography>
                <Typography variant='body2' component='p'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum, accusantium earum. Maxime dicta consectetur quibusdam ad saepe consequuntur exercitationem explicabo ducimus nesciunt, necessitatibus aliquam sit minima omnis. Earum, ullam eligendi!</Typography>
            </CardContent>
            <CardActions>
                <Button color='error'>Clear</Button>
                <Button>Save</Button>
            </CardActions>
        </Card>
    )
}
