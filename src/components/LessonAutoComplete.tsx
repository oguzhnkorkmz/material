import React from 'react'
import { TextField, Autocomplete } from '@mui/material'

const movies = [
    { label: "The Shawshank Redemption", year: 1994 },
    { label: "The Godfather", year: 1972 },
    { label: "The Dark Knight", year: 2008 },
    { label: "Pulp Fiction", year: 1994 },
    { label: "Schindler's List", year: 1993 },
    { label: "The Lord of the Rings: The Return of the King", year: 2003 },
    { label: "Fight Club", year: 1999 },
    { label: "Forrest Gump", year: 1994 },
    { label: "Inception", year: 2010 },
    { label: "The Matrix", year: 1999 },
    { label: "Goodfellas", year: 1990 },
    { label: "Seven Samurai", year: 1954 },
    { label: "Se7en", year: 1995 },
    { label: "City of God", year: 2002 },
    { label: "The Silence of the Lambs", year: 1991 },
    { label: "It's a Wonderful Life", year: 1946 },
    { label: "Life Is Beautiful", year: 1997 },
    { label: "Spirited Away", year: 2001 },
    { label: "Saving Private Ryan", year: 1998 },
    { label: "The Green Mile", year: 1999 },
    { label: "Interstellar", year: 2014 },
    { label: "Léon: The Professional", year: 1994 },
    { label: "The Pianist", year: 2002 },
    { label: "The Departed", year: 2006 },
    { label: "Whiplash", year: 2014 },
    { label: "Gladiator", year: 2000 },
    { label: "The Prestige", year: 2006 },
    { label: "American History X", year: 1998 },
    { label: "The Lion King", year: 1994 },
    { label: "Apocalypse Now", year: 1979 },
    { label: "The Great Dictator", year: 1940 },
    { label: "The Lives of Others", year: 2006 },
    { label: "Django Unchained", year: 2012 },
    { label: "Cinema Paradiso", year: 1988 },
];



export const LessonAutoComplete = () => {
    return (
        <Autocomplete
            options={movies}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label='Movies' />} />
    )
}
