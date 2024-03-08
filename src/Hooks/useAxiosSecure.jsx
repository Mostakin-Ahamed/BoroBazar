import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: 'https://boro-bazar-server.vercel.app'
})

const useAxiosSecure = () => {
    return axiosSecure;
};

export default useAxiosSecure;