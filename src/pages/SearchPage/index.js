import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import instance from '../../api/axios';
import { useDebounce } from '../../hooks/useDebounce'

const SearchPage = () => {
    const navigate = useNavigate();
    const [searchResults, setSearchResults] = useState([]);

    const useQuery = () => {
        return new URLSearchParams(useLocation().search);
    }

    let query = useQuery();

    const searchTerm = query.get('q');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);


    useEffect(() => {
        if (debouncedSearchTerm.length > 1) {
            fetchSearchMovie(debouncedSearchTerm);
        }   else {
            navigate('/main');
        }
    }, [debouncedSearchTerm, navigate])

    const fetchSearchMovie = async () => {
        try {
            const response = await instance.get(`/search/multi?include_adult=false&query=${searchTerm}`);
            setSearchResults([...response.data.results])
        }   catch(e) {
            
        }
    }

    if (searchResults.length > 0) {
        return(
            <section className='w-full h-screen px-5 py-0 text-center bg-black'>
                {searchResults.map((movie) => {
                    if (movie.backdrop_path !== null && movie.media_type !== "person") {
                        const movieImageUrl = "https://image.tmdb.org/t/p/w500" + movie.backdrop_path;
                        return (
                            <div key={movie.id} className='inline-block pr-1 pb-7'>
                                <div 
                                    onClick={() => navigate(`/${movie.id}`)}
                                    className='transition-transform cursor-pointer hover:scale-125'
                                >
                                    <img 
                                        src={movieImageUrl} 
                                        alt="movie__poster" 
                                        className='w-11/12 rounded-md'
                                    />
                                </div>
                            </div>
                        )
                    }
                })}
            </section>
        )
    }   else {
        return (
            <section className='flex items-center justify-center h-full p-8 text-slate-200'>
                <div>
                    <p>
                        찾고자하는 검색어 "{searchTerm}" 에 맞는 영화 컨텐츠 존재하지 않음.
                    </p>
                </div>
            </section>
        )
    }

    
}

export default SearchPage