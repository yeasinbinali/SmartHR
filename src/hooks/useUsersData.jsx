import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from './useAxiosPublic';

const useUsersData = () => {
    const axiosSecure = useAxiosPublic();
    const {data: users = []} = useQuery({
        queryKey: ['users'],
        queryFn: async() => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    })
    return [users];
};

export default useUsersData;