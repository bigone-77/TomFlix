import React, { useRef } from 'react'
import useOnClickOutside from '../../hooks/useOnClickOutside';


const MovieModal = ({
    backdrop_path,
    title,
    overview,
    name, 
    release_date,
    first_air_date,
    vote_average,
    setModalOpen,
}) => {
    const ref = useRef();

    useOnClickOutside(ref, () => {
        setModalOpen(false);
    })

    return (
        <div role='presentation' className='absolute z-50 w-full'> 
            <div className='fixed inset-0 flex justify-center bg-opacity-50 bg-slate-600'>
                <div 
                    className='relative max-w-[800px] bg-slate-800 overflow-y-scroll ease-in-out duration-300 rounded-lg animate-fadeIn'
                    ref={ref}
                >
                    <span
                        onClick={() => setModalOpen(false)}
                        className='absolute right-[20px] top-[20px] cursor-pointer z-40 hover:animate-bounce'
                    >
                        X
                    </span>
                    <img 
                        src={`https://image.tmdb.org/t/p/original/${backdrop_path}`}
                        alt='modal-img' 
                        className='w-full h-auto'
                    />

                    <div className='p-[40px]'>
                        <p className='mb-4 text-2xl'>
                            <span>100% for you</span>{" "}
                            {release_date ? release_date : first_air_date}
                        </p>

                        <h2 className='mb-4 text-4xl'>{title ? title : name}</h2>
                        <p className='mb-5 text-2xl'>평점: {vote_average}</p>
                        <p>{overview}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieModal