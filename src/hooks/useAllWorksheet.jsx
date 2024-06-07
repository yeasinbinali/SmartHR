import React from 'react';
import useAxiosPrivate from './useAxiosPrivate';
import { useQuery } from '@tanstack/react-query';

const useAllWorksheet = () => {
    const axiosSecure = useAxiosPrivate();
    
    const { data: allWorks = [] } = useQuery({
        queryKey: ['worksheet'],
        queryFn: async() => {
            const res = await axiosSecure.get('/worksheet');
            return res.data;
        }
    })
    return [allWorks];
};

export default useAllWorksheet;