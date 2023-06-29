import axios from 'axios';
import { getItem } from './TokenCreate';

const token = getItem('access_token');


const instance = axios.create({
    baseURL: 'https://classroom.googleapis.com/v1',
    headers: { Authorization : `Bearer ${token}`},
});
export default instance; 