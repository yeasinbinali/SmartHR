import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: "https://smart-hr-server.vercel.app"
})
const useAxiosPrivate = () => {
    return axiosSecure;
};

export default useAxiosPrivate;