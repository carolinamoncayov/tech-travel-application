import axios from 'axios';

const api = axios.create({
    baseURL: 'https://62a2ca2a21232ff9b2102b37.mockapi.io/'
});

export default api;