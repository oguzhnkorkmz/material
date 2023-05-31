import React from 'react'
import { Breadcrumbs, Link } from '@mui/material'

export const LessonBreadCrumb = () => {
    return (
        <Breadcrumbs separator='>' maxItems={2}>
            <Link href='/' underline='hover'>Home</Link>
            <Link href='/' underline='hover'>Blog</Link>
            <Link underline='none'>About</Link>
        </Breadcrumbs>
    )
}
