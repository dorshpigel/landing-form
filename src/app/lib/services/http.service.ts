import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000/', //need to replace to airflow base url
    timeout: 10000, 
    headers: {
        'Content-Type': 'application/json',
    },
});


axiosInstance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        console.error('API Error:', error.response || error.message);
        return Promise.reject(error);
    }
);

export default axiosInstance;
