import instance from '../api/axios';

export const fetchMovies = async () => {
    try {
        const response = await instance.get('/movie/now_playing');
        return response?.data.results;
    }
    catch (e) {
        console.log(e);
        return [];
    }
}