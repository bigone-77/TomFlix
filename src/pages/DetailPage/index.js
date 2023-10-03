import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import instance from '../../api/axios';

const DetailPage = () => {
    const { movieId } = useParams();
    
    const [movie, setMovie] = useState({});

    useEffect(() => {
        async function fetchData() {
            const response = await instance.get(
                `/movie/${movieId}`
            )
            setMovie(response.data);
        }
        fetchData();
    }, [movieId])



    return (
        <section>
            <img 
                src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                alt='movie__poster_image'
            />
        </section>
    )
}

export default DetailPage