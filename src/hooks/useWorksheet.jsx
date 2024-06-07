import { useQuery } from '@tanstack/react-query';
import useAxiosPrivate from './useAxiosPrivate';
import { useContext } from 'react';
import { authContext } from '../providers/AuthProvider';

const useWorksheet = () => {
    const { user } = useContext(authContext);
    const axiosSecure = useAxiosPrivate();
    const { data: worksheet = [], refetch } = useQuery({
        queryKey: ['worksheet', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/worksheet/${user?.email}`)
            return res.data;
        }
    })

    return [worksheet, refetch]
};

export default useWorksheet;