import axios from 'axios';

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "2749440bbb0e6f566923f5c2bc316bd8",
        language: "ko-KR"
    }
})

export default instance;
