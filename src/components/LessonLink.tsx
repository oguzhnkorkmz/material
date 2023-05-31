import React from 'react'
import { Link, Box } from '@mui/material'

export const LessonLink = () => {
    return (
        <Box sx={{ display: 'flex', gap: '20px' }}>
            <Link href='https://www.linkedin.com/in/oguzhan-korkmaz-b409b8247/'>Go</Link>
            <Link href='https://www.linkedin.com/in/oguzhan-korkmaz-b409b8247/' color='error'>Go</Link>
            <Link href='https://www.linkedin.com/in/oguzhan-korkmaz-b409b8247/' color='error' variant='body2'>Go</Link>
            <Link href='https://www.linkedin.com/in/oguzhan-korkmaz-b409b8247/' underline='hover'>Go</Link>
            <Link href='https://www.linkedin.com/in/oguzhan-korkmaz-b409b8247/' underline='none'>Go</Link>
            <Link href='https://www.linkedin.com/in/oguzhan-korkmaz-b409b8247/' underline='none' component='button' onClick={() => { console.log('Hello') }}>Go</Link>
        </Box>
    )
}
