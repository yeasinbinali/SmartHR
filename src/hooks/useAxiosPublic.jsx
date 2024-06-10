import axios from 'axios';

const axiosSecure = axios.create({
    baseURL: "https://smart-hr-server.vercel.app"
})
const useAxiosPublic = () => {
    return axiosSecure;
};

export default useAxiosPublic;