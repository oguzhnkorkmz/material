import React from 'react'
import {
    Stack,
    ImageList,
    ImageListItem,
    ImageListItemBar
} from '@mui/material'

export const LessonImageList = () => {
    return (
        <Stack>
            <ImageList cols={3} >
                {imgData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img src={item.img} alt="" loading='lazy' />
                        <ImageListItemBar title={item.title}></ImageListItemBar>
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList cols={3} variant='woven' >
                {imgData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img src={item.img} alt="" loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
            <ImageList cols={3} variant="quilted" >
                {imgData.map((item) => (
                    <ImageListItem key={item.title}>
                        <img src={item.img} alt="" loading='lazy' />
                    </ImageListItem>
                ))}
            </ImageList>
        </Stack>
    )
}

const imgData = [
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 1'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 2'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 3'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 4'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 5'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 6'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 7'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 8'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 9'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 10'
    },

    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 11'
    },
    {
        img: 'https://source.unsplash.com/random',
        title: 'Photo 12'
    },

];
