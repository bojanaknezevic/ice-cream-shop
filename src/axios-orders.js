import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ice-cream-shop-c385e-default-rtdb.firebaseio.com/'
});

export default instance;