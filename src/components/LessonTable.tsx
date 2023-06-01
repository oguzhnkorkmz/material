import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import React from 'react'

const rows = [
    {
        name: "Apple",
        calories: 52,
        fat: 0.2,
        carbs: 14,
        protein: 0.3
    },
    {
        name: "Banana",
        calories: 96,
        fat: 0.4,
        carbs: 23,
        protein: 1.1
    },
    {
        name: "Eggs",
        calories: 78,
        fat: 5.3,
        carbs: 0.6,
        protein: 6.3
    },
];


export const LessonTable = () => {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Calories</TableCell>
                    <TableCell>Fat</TableCell>
                    <TableCell>Carbs</TableCell>
                    <TableCell>Protein</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                    <TableRow key={row.name}>
                        <TableCell>{row.name}</TableCell>
                        <TableCell>{row.calories}</TableCell>
                        <TableCell>{row.fat}</TableCell>
                        <TableCell>{row.carbs}</TableCell>
                        <TableCell>{row.protein}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
};
