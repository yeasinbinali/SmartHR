import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const useMessage = () => {
    const axiosSecure = useAxiosPrivate();
    const { data: messages = [] } = useQuery({
        queryKey: ['message'],
        queryFn: async () => {
            const res = await axiosSecure('/message');
            return res.data;
        }
    })
    return [messages];
};

export default useMessage;