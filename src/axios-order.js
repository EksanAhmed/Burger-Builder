import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-builder-3e0c4.firebaseio.com/'
});

export default instance;