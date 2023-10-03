import React, { useEffect, useState } from 'react'
import instance from '../api/axios'
import requests from '../api/requests'
import { BsPlay } from 'react-icons/bs'
import Button from './Button'

const Banner = () => {

    const [movie, setMovie] = useState('');
    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const response = await instance.get(requests.fetchNowPlaying);
        if (!response) {
            throw new Error('받아올 데이터가 없습니다')
        }
        const movieId = response.data.results[
            Math.floor(Math.random() * response.data.results.length) 
        ].id;
        
        const { data: movieDetail } = await instance.get(`movie/${movieId}`, {
            params: { append_to_response: "videos" }
        })
        setMovie(movieDetail);
        
    }

    const truncate = (str, n) => {
        return str?.length > n ? str.substring(0, n) + "..." : str;
    }

    if (isClicked) {
        return (
            <>
                <div className='flex items-center justify-center w-full h-screen flex-column'>
                    <div className='w-full h-full'>
                        <iframe
                            className='w-full h-full border-none -z-1 opacity-60 '
                            src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}?controls=0&autoplay=1&loop=1&mute=1&playlist=${movie?.videos?.results[0]?.key}`}
                            width="640"
                            height="360"
                            allow='autoplay; fullscreen'
                        >
                        </iframe>
                    </div>
                </div>
                <button onClick={() => setIsClicked(false)}>X</button>
            </>

        )
    }   else {
        return (
            <header 
                style={{
                    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie.backdrop_path}")`,
                    backgroundPosition: 'top center',
                    backgroundSize: 'cover',
                }}
                className={`
                    object-contain
                    h-[500px]
                    `}
            >
                <div
                    className='relative top-[220px] mx-10'
                >
                    <h1 className='text-5xl'>
                        {movie.title || movie.name || movie.original_name}
                    </h1>

                    <div className='w-auto cursor-pointer h-1/3 my-9'>
                        {movie?.videos?.results[0]?.key &&
                        <Button
                            label='재생하기' 
                            Icon={BsPlay} 
                            onClick={() => setIsClicked(true)}
                        />
                    }
                    </div>
                    <p className='w-[340px]'>
                        {truncate(movie.overview, 80)}
                    </p>
                </div>
                <div className='absolute shadow-inner h-20 w-full b-[200px]'/>
            </header>
        )
    }
}

export default Banner


// `("https://image.tmdb.org/t/p/origianl/${movie.backdrop_path}")`