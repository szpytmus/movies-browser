import React from 'react';
import { useSelector } from 'react-redux';
import { selectGenresAll, selectGenresStatus } from './genres/genresSlice';


export const Movies = ({ movies, showJob, showCharacter }) => { const genres = useSelector(selectGenresAll);
    const genresStatus = useSelector(selectGenresStatus);


};