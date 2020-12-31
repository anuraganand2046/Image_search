import axios from 'axios';
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID kgHExajmBQ5Ksz0gfm8jTnxpIl9_4EubDZy_N3mM8ak'
    }
});