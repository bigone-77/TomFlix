import React, { useCallback, useEffect, useState } from 'react'
import instance from '../api/axios';
import MovieModal from './MovieModal';

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/css/scrollbar';

const Row = ({ title, id, fetchUrl }) => {
    const [movies, setMovies] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [movieSelected, setMovieSelected] = useState({});

    const fetchMovieData = useCallback(async() => {
        const response = await instance.get(fetchUrl);
        setMovies(response.data.results);
    }, [fetchUrl])

    useEffect(() => {
        fetchMovieData();
    }, [fetchMovieData])

    const handleClick = (movie) => {
        setModalOpen(true);
        setMovieSelected(movie);
    }

    return (
        <div className='p-[26px]'>
            <h2>{title}</h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                loop={true}
                navigation
                pagination={{ clickable: true }}
                breakpoints={{
                    1378: {
                        slidesPerView: 6,
                        slidesPerGroup: 6,
                    },
                    998: {
                        slidesPerView: 5,
                        slidesPerGroup: 5,
                    },
                    625: {
                        slidesPerView: 4,
                        slidesPerGroup: 4,
                    },
                    0: {
                        slidesPerView: 3,
                        slidesPerGroup: 3,
                    },
                }}
            >
                <div id={id} className=''>
                    {movies?.map(movie => (
                        <SwiperSlide key={movie.id}>
                            <div className='w-[95%] h-[95%] pt-[56%] rounded-sm overflow-hidden transition-all'>
                                <img 
                                    key={movie.id}
                                    src={`https://image.tmdb.org/t/p/original/${movie.backdrop_path}`}
                                    alt={movie.name}
                                    onClick={() => handleClick(movie)}
                                    className='absolute inset-0 z-10 block object-cover w-full h-full transition-all hover:scale-95 hover:rounded-md hover:border-slate-300 hover:border-[1px] hover:ease-in-out'
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </div>
            </Swiper>
            {modalOpen && 
                <MovieModal 
                    {...movieSelected}
                    setModalOpen={setModalOpen}
                />
            }

        </div>
    )
}

export default Row