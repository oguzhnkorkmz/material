import { Typography } from '@mui/material';

export const LessonTypography = () => {
    return (
        <div>
            <Typography variant='body1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cumque explicabo maxime quos aut non, labore voluptate consequuntur illum fugiat laboriosam sunt necessitatibus harum! Aliquam reiciendis inventore amet culpa quos?</Typography>
            <Typography variant='body2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid cumque explicabo maxime quos aut non, labore voluptate consequuntur illum fugiat laboriosam sunt necessitatibus harum! Aliquam reiciendis inventore amet culpa quos?</Typography>

            <Typography variant='h1'>H1</Typography>
            <Typography variant='h2'>H2</Typography>
            <Typography variant='h3'>H3</Typography>
            <Typography variant='h4'>H4</Typography>
            <Typography variant='h5'>H5</Typography>
            <Typography variant='h6'>H6</Typography>

            <Typography variant='h1' component='h4'>H1</Typography>

            <Typography variant='h2' align='center'>H2</Typography>
            <Typography variant='h2' align='right'>H2</Typography>
            <Typography variant='h2' align='left'>H2</Typography>
        </div>
    )
}
